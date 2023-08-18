import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HeatmapComponent = () => {
  const options = {
    chart: {
      type: 'heatmap',
      borderWidth: 0,
      backgroundColor: '#F6F6F6',
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: [
        'snapshot',
        'privateimage',
        'servicerole',
        'privatenetwork',
        'privatesubnet',
        'instance',
        'volume',
      ],
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 'bold',
        },
      },
    },
    yAxis: {
      categories: [
        'Alkermes Ent Shared Services NON-PROD Account',
        'Alkermes GXPAPPS 01 Account',
        'Alkermes Clinical Account',
        'Alkermes IT DEV Account',
        'Alkermes Ent Shared Services PROD Account',
        'Alkermes R&D Applications DEV Account',
        'Alkermes IT Account',
        'Alkermes R&D Applications PROD Account',
        'Alkermes R&D Applications NON-PROD Account',
        'ALKS-AWS-CRESSET',
        'Alkermes GRC and Security Account',
        'Alkermes Commercial Account',
        'Alkermes Log Aggregation Account',
        'Alkermes Clinical NON-PROD Account',
        'Alkermes Data&Analytics DEV Account',
        'Alkermes EC2 RI',
      ],
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 'bold',
        },
      },
    },
    colorAxis: {
      min: 0,
      minColor: '#FFFFFF',
      maxColor: Highcharts.getOptions().colors[0],
    },
    legend: {
      align: 'right',
    //   layout: 'horizontal',
      margin: 0,
      verticalAlign: 'top',
      y: 25,
    //   symbolHeight: 80,
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> - <b>' +
          this.series.yAxis.categories[this.point.y] + '</b><br>' +
          'Value: <b>' + this.point.value + '</b>';
      },
    },
    series: [
      {
        name: 'Dummy Data',
        borderWidth: 1,
        // Set the values on the heatmap as array [hour, day, value]
        data: [
            [1, 2, 100],
            [4, 3, 200],
            [7, 4, 300],
            [2, 5, 400],
            [5, 6, 500],
            [12, 1, 600],
            [10, 0, 700],
          // Add more data points as needed
        ],
        dataLabels: {
          enabled: true,
          color: '#000000',
        },
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default HeatmapComponent;