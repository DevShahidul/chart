import { ComponentSpinner } from "@components/spinners";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HeatmapModule from "highcharts/modules/heatmap";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
HeatmapModule(Highcharts);

export const TagHeatmap = ({ 
  data, 
  onHandleSelectedResources, 
  showPercentages
}) => {
  const [loading, setLoading] = useState(true);
  const [heatmapData, setHeatmapData] = useState({});
  
  useEffect(() => {
    const { xAxisLabels, yAxisLabels, heatmapSeries } =
      generateHeatmapSeries(data, showPercentages);
    setHeatmapData({ xAxisLabels, yAxisLabels, heatmapSeries });
    setLoading(false);
  }, [data, showPercentages]);

  const handleHeatmapClick = (x, y) => {
    const resource = heatmapData.xAxisLabels[x];
    const account = heatmapData.yAxisLabels[y];
    //loop through heatmap data and extract matching accounts/resources
    onHandleSelectedResources(account, resource);
  };

  const options = {
    chart: {
      type: "heatmap",
      marginTop: 130,
      marginBottom: 40,
      plotBorderWidth: 0,
      borderColor: "#000000", // Black border for the overall chart
      height: (9/16 * 100) + "%",
    },
    credits: {
      enabled: false
    },
    title: {
      text: "Missing Tags",
      style: {
        fontSize: "3em",
        fontFamily: 'TT Firs Neue Trl DemiBold'
      },
    },

    xAxis: {
      categories: heatmapData.xAxisLabels,
      opposite: true,
      
      gridLineWidth: 0,
      lineWidth: 0,          

      labels: {
        // align: 'center',
        style: {
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.125rem',
            fontWeight: '500',
            textTransform: 'capotilize',
            background: '#F6F6F6',
            color: '#383838'
        },
      },
    },

    yAxis: {
      categories: heatmapData.yAxisLabels,
      title: null,
      reversed: true,
      labels: {
        // align: 'start',
        distance: 17,
        enabled: true,
        format: '{value}',
        formatter: null,
        overflow: null,
        rotation: 0,
        // x: 0,
        // y: 0,
        zIndex: 7,
        style: {
            fontFamily: "'Economica', sans-serif",
            fontSize: '1.375rem',
            fontWeight: '700',
            color: '#383838',
            textAlign: 'left'
        },
      },
      offset: 0,

      gridLineColor: '#FFFFFF', 
      gridLineDashStyle: 'solid',
      gridLineWidth: 0, 
      lineWidth: 0,    
      gridZIndex: 1,  
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

    // colorAxis: {
    //   min: 0,
    //   minColor: "#FFFFFF",
    //   maxColor: Highcharts.getOptions().colors[4],
    // },

    colorAxis: {
      // stops: [
      //     [0, '#f5fff7'],
      //     [0.25, '#f5e871'],
      //     [0.5, '#fa8f37'],
      //     [0.75, '#c4463a']
      // ],
      stops: [
        [0, '#117D00'],
        [0.1258, '#32B81D'],
        [0.2513, '#EDF69F'],
        [0.3812, '#DFEB70'],
        [0.5034, '#CADB2A'],
        [0.6343, '#97CC00'],
        [0.7532, '#F8BB1D'],
        [0.8821, '#F36523'],
        [1, '#ED1B24']
      ],
      min: 0,
      labels: {
        // align: 'center',
        y: -23,
        style: {
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#1E1E1E'
        },
      },
    },

    legend: {
      align: "right",
      layout: "horizontal",
      margin: 0,
      verticalAlign: "top",
      y: -36,
      symbolWidth: 334, 
      symbolHeight: 10,
      // symbolHeight: 380,
    },

    tooltip: {
      format:
        "<b>{series.yAxis.categories.(point.y)}</b> missing<br>" +
        `<b>{point.value}${showPercentages ? "%" : ""}</b> tags on <br>` +
        "<b>{series.xAxis.categories.(point.x)}</b> resources.",
    },

    series: [
      {
        name: "Sales per employee",
        borderWidth: 5,
        borderColor: "#FFFFFF", // Black border for individual cells
        data: heatmapData.heatmapSeries,
        dataLabels: {
          enabled: true,
          color: "#FFFFFF",
          style: {
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#FFFFFF'
          },
          formatter() {
            return showPercentages 
              ? this.point.value + "%"
              : this.point.value
          }
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
      <HighchartsReact 
        highcharts={Highcharts} 
        options={options} 
      />
    </div>
  );
};

TagHeatmap.defaultProps = {
  showPercentages: false
}

TagHeatmap.propTypes = {
  data: PropTypes.object,
  onHandleSelectedResources: PropTypes.func,
  showPercentages: PropTypes.bool
};

const generateHeatmapSeries = (tagData, showPercentages) => {
  let heatmapData = [];

  const resources = Object.keys(tagData);

  const totalMissingTags = resources
    .reduce((accumulator, currentAccount) => {
      const missingTags = tagData[currentAccount]
        .reduce((acc, currentResource) => 
          (acc + currentResource.numMissingTags), 0)
      return accumulator+missingTags
    }, 0)

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

      const dataValue = showPercentages 
        ? Number(parseFloat((missingTagCount/totalMissingTags)*100).toFixed(2))
        : missingTagCount
      // heatmapData.push([i1, i0, missingTagCount]);
      heatmapData.push([i1, i0, dataValue]);
    });
  });

  return {
    xAxisLabels: resourceTypes,
    yAxisLabels: accountNames,
    heatmapSeries: heatmapData,
  };
};
