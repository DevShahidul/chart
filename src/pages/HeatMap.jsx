import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Heatmap = () => {
  const options = {
    chart: {
      type: 'heatmap',
      plotBorderWidth: 0,
      marginTop: 130,
      marginBottom: 40,
      height: (9/16 * 100) + "%",
    },
    plotOptions: {
        series: {
          pointPadding: 0,
        }
      },
    title: {
      text: 'Missing Tags',
      style: {
        fontSize: "3em",
        fontFamily: 'TT Firs Neue Trl DemiBold'
      },
    },
    xAxis: {
      categories: ['snapshot', 'privateimage', 'servicerole', 'privatenetwork', 'privatesubnet', 'instance', 'volume'],
      opposite: true,
      labels: {
        align: 'center',
        style: {
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.125rem',
            fontWeight: '500',
            background: '#F6F6F6',
            color: '#383838'
        },
      },
    lineWidth: 10,
    lineColor: '#FFFFFF',
    tickWidth: 0,
    tickLength: 0,
    tickColor: 'rgba(0,0,0,0.75)',
      min: 0,
      max: 6
    },
    yAxis: {
        labels: {
            style: {
              fontFamily: "'Economica', sans-serif",
              fontSize: '1.375rem',
              fontWeight: '700',
              color: '#383838'
            },
          },
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
            'Alkermes EC2 RI'
        ],
        offset: 10
    },
    colorAxis: {
        min: 0,
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
        labels: {
            align: 'center',
            y: -23,
            width: 534,
            style: {
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.375rem',
                fontWeight: '600',
                color: '#1E1E1E'
            },
        },
    },
    legend: {
        align: 'right',
      //   layout: 'horizontal',
        margin: 0,
        verticalAlign: 'top',
        y: -36,
        symbolHeight: 10,
    },
    series: [
      {
        name: 'Heatmap',
        
      borderWidth: 1,
      borderColor: 'white',
      dataLabels: {
        enabled: true,
        format: '{point.value}',
        style: {
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#FFFFFF'
          },
          inside: true,
          verticalAlign: 'middle',
          crop: false,
          overflow: 'none',
          y: 0, // Adjust the vertical position of the data labels
          height: null, // Reset the default height of the data labels
          formatter: function() {
            const height = 48; // Get the height from the data array
            return '<div style="height: ' + height + 'px">' + this.point.value + '</div>';
          },
      },
      // Set the values on the heatmap as array [hour, day, value]
        data: [
            [0, 1, 0], [0, 2, 0], [0, 3, 1378], [0, 4, 39], [0, 5, 0], [0, 6, 0], [0, 7, 3445], [0, 8, 0], [0, 9, 35407], [0, 10, 29850], [0, 11, 28272], [0, 12, 14057], [0, 13, 3387], [0, 14, 13564], [0, 15, 26],

            [1, 1, 0], [1, 2, 0], [1, 3, 481], [1, 4, 13], [1, 5, 1044], [1, 6, 1637], [1, 7, 1014], [1, 8, 1782], [1, 9, 10508], [1, 10, 29850], [1, 11, 28272], [1, 12, 14057], [1, 13, 3387], [1, 14, 13564], [1, 15, 26], 

            [2, 1, 0], [2, 2, 0], [2, 3, 481], [2, 4, 39], [2, 5, 0], [2, 6, 0], [2, 7, 3445], [2, 8, 0], [2, 9, 35407], [2, 10, 29850], [2, 12, 28272], [2, 12, 14057], [2, 13, 3387], [2, 14, 13564], [2, 15, 26],
            
            [3, 1, 0], [3, 2, 0], [3, 3, 481], [3, 4, 39], [3, 5, 0], [3, 6, 0], [3, 7, 3445], [3, 8, 0], [3, 9, 35407], [3, 10, 29850], [3, 13, 28272], [3, 13, 14057], [3, 13, 3387], [3, 14, 13564], [3, 15, 26],

            [4, 1, 0], [4, 2, 0], [4, 3, 481], [4, 4, 39], [4, 5, 0], [4, 6, 0], [4, 7, 3445], [4, 8, 0], [4, 9, 35407], [4, 10, 29850], [4, 14, 28272], [4, 14, 14057], [4, 14, 3387], [4, 14, 13564], [4, 15, 26],

            [5, 1, 0], [5, 2, 0], [5, 3, 481], [5, 4, 39], [5, 5, 0], [5, 6, 0], [5, 7, 3445], [5, 8, 0], [5, 9, 35407], [5, 10, 29850], [5, 11, 28272], [5, 12, 14057], [5, 13, 3387], [5, 14, 13564], [5, 15, 26],

            [6, 1, 0], [6, 2, 0], [6, 3, 481], [6, 4, 39], [6, 6, 0], [6, 6, 0], [6, 7, 3445], [6, 8, 0], [6, 9, 35407], [6, 10, 29850], [6, 11, 28272], [6, 12, 14057], [6, 13, 3387], [6, 14, 13564], [6, 15, 26],
            
            [7, 1, 0], [7, 2, 0], [7, 3, 481], [7, 4, 39], [7, 7, 0], [7, 7, 0], [7, 7, 3445], [7, 8, 0], [7, 9, 35407], [7, 10, 29850], [7, 11, 28272], [7, 12, 14057], [7, 13, 3387], [7, 14, 13564], [7, 15, 26],
        ]
      },
    ],
  };

  return (
    <div className="w-full">
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Heatmap;