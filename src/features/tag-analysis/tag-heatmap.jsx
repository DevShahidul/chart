import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ComponentSpinner } from "@components/spinners";
import Highcharts from "highcharts";
import HeatmapModule from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";
HeatmapModule(Highcharts);

export const TagHeatmap = ({ data, onHandleSelectedResources }) => {
  const [loading, setLoading] = useState(true);
  const [heatmapData, setHeatmapData] = useState({});

  useEffect(() => {
    const { xAxisLabels, yAxisLabels, heatmapSeries } =
      generateHeatmapSeries(data);
    setHeatmapData({ xAxisLabels, yAxisLabels, heatmapSeries });
    setLoading(false);
  }, [data]);

  const handleHeatmapClick = (x, y) => {
    const resource = heatmapData.xAxisLabels[x];
    const account = heatmapData.yAxisLabels[y];
    //loop through heatmap data and extract matching accounts/resources
    onHandleSelectedResources(account, resource);
  };

  const options = {
    chart: {
      type: "heatmap",
      marginTop: 40,
      marginBottom: 40,
      plotBorderWidth: 1,
      borderColor: "#000000", // Black border for the overall chart
      // height: "33%", // Set height to 100%
      // height: "100%"
      height: (9/16 * 100) + "%"
    },

    title: {
      text: "Resource Tag Analysis",
      style: {
        fontSize: "1em",
      },
    },

    xAxis: {
      categories: heatmapData.xAxisLabels,
      // categories: Object.keys(data)
      // categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas',
      //     'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
    },

    yAxis: {
      categories: heatmapData.yAxisLabels,
      // categories: requiredTags,
      // categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      title: null,
      reversed: true,
    },

    accessibility: {
      point: {
        //NEED TO FIX THIS LATER
        descriptionFormat:
          "{(add index 1)}. " +
          "{series.xAxis.categories.(x)} sales " +
          "{series.yAxis.categories.(y)}, {value}.",
      },
    },

    colorAxis: {
      min: 0,
      minColor: "#FFFFFF",
      maxColor: Highcharts.getOptions().colors[4],
    },

    legend: {
      align: "right",
      layout: "vertical",
      margin: 0,
      verticalAlign: "top",
      y: 25,
      symbolHeight: 280,
    },

    tooltip: {
      format:
        "<b>{series.yAxis.categories.(point.y)}</b> missing<br>" +
        "<b>{point.value}</b> tags on <br>" +
        "<b>{series.xAxis.categories.(point.x)}</b> resources.",
    },

    series: [
      {
        name: "Sales per employee",
        borderWidth: 1,
        borderColor: "#000000", // Black border for individual cells
        data: heatmapData.heatmapSeries,
        dataLabels: {
          enabled: true,
          color: "#000000",
          style: {
            fontSize: "14px", // Adjust the font size as needed
          },
        },
        //tshea
        cursor: "pointer",
        point: {
          events: {
            click: function () {
              // alert('Category: ' + this.x + ', value: ' + this.y);
              handleHeatmapClick(this.x, this.y);
            },
          },
        },
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            yAxis: {
              labels: {
                format: "{substr value 0 1}",
              },
            },
          },
        },
      ],
    },
  };

  if (loading) {
    return <ComponentSpinner />;
  }

  return (
    <div className="mb-4">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
TagHeatmap.propTypes = {
  data: PropTypes.object,
  onHandleSelectedResources: PropTypes.func,
};

const generateHeatmapSeries = (tagData) => {
  let heatmapData = [];

  const resources = Object.keys(tagData);

  //need to iterate through tagData and pull out unique instance types
  const resourceTypes = resources
    //first loop thru each resource and extract the resource type
    //this results in an array or arrays
    .map((resource) => tagData[resource].map((r) => r.resourceType))
    //to deal with the array of arrays, we reduce the multiple
    //arrays into a single array with each instance type found
    .reduce((prev, current) => [...prev, ...current])
    //filter out duplicate instance types
    .filter((type, index, currentVal) => currentVal.indexOf(type) === index);

  //already have Alkermes resource names in array
  const accountNames = resources;

  accountNames.map((account, i0) => {
    resourceTypes.map((type, i1) => {
      const initialCount = 0;
      const missingTagCount = tagData[account].reduce(
        (accumulator, currentResource) => {
          return currentResource.resourceType === type
            ? accumulator + currentResource.numMissingTags
            : accumulator;
        },
        initialCount
      );
      heatmapData.push([i1, i0, missingTagCount]);
    });
  });

  return {
    xAxisLabels: resourceTypes,
    yAxisLabels: accountNames,
    heatmapSeries: heatmapData,
  };
};
