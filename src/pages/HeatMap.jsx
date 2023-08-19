import { HeatmapPercentSwitch } from '@features/tag-analysis/heatmap-percent-switch';
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
    credits: {
        enabled: false
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
    
      gridLineWidth: 0,
      lineWidth: 0,
      min: 0,
      max: 6,
    },
    yAxis: {
        title: {
            enabled: false
        },
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
        offset: 0,
        gridLineColor: '#FFFFFF',
        gridLineWidth: 0,
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
            style: {
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#1E1E1E'
            },
        },
        // tickInterval: 0
    },
    legend: {
        align: 'right',
      //   layout: 'horizontal',
        margin: 0,
        verticalAlign: 'top',
        y: -36,
        symbolHeight: 10,
        // width: 300
    },
    series: [
      {
        name: 'Heatmap',
        
      borderWidth: 5,
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
      },
      // Set the values on the heatmap as array [hour, day, value]
        data: [
            [0, 1, 0], [0, 2, 0], [0, 3, 1378], [0, 4, 39], [0, 5, 0], [0, 6, 0], [0, 7, 3445], [0, 8, 0], [0, 9, 35407], [0, 10, 29850], [0, 11, 28272], [0, 12, 14057], [0, 13, 3387], [0, 14, 13564], [0, 15, 26], [0, 16, 21036],

            [1, 1, 0], [1, 2, 0], [1, 3, 481], [1, 4, 13], [1, 5, 1044], [1, 6, 1637], [1, 7, 1014], [1, 8, 1782], [1, 9, 10508], [1, 10, 8765], [1, 11, 11017], [1, 12, 3113], [1, 13, 1472], [1, 14, 2444], [1, 15, 0], [1, 16, 5497], 

            [2, 1, 224], [2, 2, 704], [2, 3, 480], [2, 4, 352], [2, 5, 1249], [2, 6, 880], [2, 7, 672], [2, 8, 672], [2, 9, 1808], [2, 10, 2325], [2, 11, 4928], [2, 12, 2932], [2, 13, 1952], [2, 14, 1296], [2, 15, 992], [2, 16, 2965],
            
            [3, 1, 238], [3, 2, 70], [3, 3, 70], [3, 4, 70], [3, 5, 70], [3, 6, 56], [3, 7, 70], [3, 8, 84], [3, 9, 56], [3, 10, 308], [3, 11, 140], [3, 12, 70], [3, 13, 70], [3, 14, 56], [3, 15, 56], [3, 16, 70],

            [4, 1, 770], [4, 2, 182], [4, 3, 406], [4, 4, 308], [4, 5, 280], [4, 6, 196], [4, 7, 504], [4, 8, 476], [4, 9, 266], [4, 10, 1470], [4, 11, 392], [4, 12, 392], [4, 13, 252], [4, 14, 392], [4, 15, 252], [4, 16, 406],

            [5, 1, 0], [5, 2, 0], [5, 3, 481], [5, 4, 39], [5, 5, 0], [5, 6, 0], [5, 7, 3445], [5, 8, 0], [5, 9, 35407], [5, 10, 29850], [5, 11, 28272], [5, 12, 14057], [5, 13, 3387], [5, 14, 13564], [5, 15, 26], [5, 16, 406],

            [6, 1, 0], [6, 2, 0], [6, 3, 481], [6, 4, 39], [6, 5, 0], [6, 6, 0], [6, 7, 3445], [6, 8, 0], [6, 9, 35407], [6, 10, 29850], [6, 11, 28272], [6, 12, 14057], [6, 13, 3387], [6, 14, 13564], [6, 15, 26], [6, 16, 40000],
        ]
      },
    ],
    plotOptions: {
        series: {
          pointPadding: 0,
        },
        yAxes: {
        }
    },
  };

  return (
    <div className="w-full ">
        <div className="-mb-[4.5rem] z-10 relative font-inter font-semibold px-3">
            <HeatmapPercentSwitch />
        </div>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Heatmap;