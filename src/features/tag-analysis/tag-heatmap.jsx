import PropTypes from "prop-types";
import Highcharts from 'highcharts';
import HeatmapModule from 'highcharts/modules/heatmap';
import HighchartsReact from "highcharts-react-official";
HeatmapModule(Highcharts);

export const TagHeatmap = ({ data }) => {
    // const chartData = formatTagData(data);
    const { xAxisLabels, yAxisLabels, heatMapSeries} = generateHeatmapSeries(data);

    console.log('xAxisLabels: ', xAxisLabels)
    console.log('yAxisLabels: ', yAxisLabels)
    console.log('heatMapSeries: ', heatMapSeries)
    

    const options = {
        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1
        },
    
    
        title: {
            text: 'Resource Tag Analysis',
            style: {
                fontSize: '1em'
            }
        },
    
        xAxis: {
            categories: xAxisLabels
            // categories: Object.keys(data)
            // categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas',
            //     'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
        },
    
        yAxis: {
            categories: yAxisLabels,
            // categories: requiredTags,
            // categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            title: null,
            reversed: true
        },
    
        accessibility: {
            point: {
                descriptionFormat: '{(add index 1)}. ' +
                    '{series.xAxis.categories.(x)} sales ' +
                    '{series.yAxis.categories.(y)}, {value}.'
            }
        },
    
        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },
    
        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280
        },
    
        tooltip: {
            format: '<b>{series.xAxis.categories.(point.x)}</b> sold<br>' +
                '<b>{point.value}</b> items on <br>' +
                '<b>{series.yAxis.categories.(point.y)}</b>'
        },
    
        series: [{
            name: 'Sales per employee',
            borderWidth: 1,
            data: heatMapSeries,
            // data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67],
            //     [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48],
            //     [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52],
            //     [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16],
            //     [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115],
            //     [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120],
            //     [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96],
            //     [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30],
            //     [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84],
            //     [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    yAxis: {
                        labels: {
                            format: '{substr value 0 1}'
                        }
                    }
                }
            }]
        }
    }
    return (
        <div className="
            bg-blue-100
        ">
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}
TagHeatmap.propTypes = {
    data: PropTypes.object
}

const generateHeatmapSeries = (tagData) => {
    let heatMapData = [];
    
    const resources = Object.keys(tagData);
    // console.log('resources: ', resources);

    //need to iterate through tagData and pull out unique instance types
    const resourceTypes = resources
        //first loop thru each resource and extract the resource type
        //this results in an array or arrays
        .map(resource => tagData[resource]
            .map(r => r.resourceType)
        )
        //to deal with the array of arrays, we reduce the multiple
        //arrays into a single array with each instance type found
        .reduce(
            (prev, current) => [...prev, ...current]
        )
        //filter out duplicate instance types
        .filter(
            (type, index, currentVal) => currentVal.indexOf(type) === index
        )

    //already have Alkermes resource names in array
    const accountNames = resources;

    accountNames.map((account, i0) => {
        resourceTypes.map((type, i1) => {
            const initialCount = 0;
            const missingTagCount = tagData[account].reduce(
                (accumulator, currentResource) => {
                    return currentResource.resourceType === type
                        ? accumulator + currentResource.numMissingTags
                        : accumulator
                }, initialCount
            );
            heatMapData.push([i1, i0, missingTagCount])
        })
    })

    // console.log('heatMapData: ', heatMapData);
    return {
        xAxisLabels: resourceTypes,
        yAxisLabels: accountNames,
        heatMapSeries: heatMapData
    };
}

