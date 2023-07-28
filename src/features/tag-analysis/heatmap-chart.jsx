import PropTypes from "prop-types";
import Highcharts from 'highcharts';
import HeatmapModule from 'highcharts/modules/heatmap';
import HighchartsReact from "highcharts-react-official";
import { formatTagData } from "@utils/dataFormatter";
import requiredTags from '@utils/required-tags';
HeatmapModule(Highcharts);

export const HeatmapChart = ({ data }) => {
    const chartData = formatTagData(data);
    const tagData = generateHeatmapSeries(chartData);

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
            categories: Object.keys(chartData)
            // categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas',
            //     'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
        },
    
        yAxis: {
            categories: requiredTags,
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
            data: tagData,
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
HeatmapChart.propTypes = {
    data: PropTypes.array
}

const generateHeatmapSeries = (data) => {
    let heatMapData = [];
    const resources = Object.keys(data);
    console.log('resources: ', resources);
    // console.log('data: ', data);
    // data.map(d => console.log('d: ', d));
    resources.map((resource, i0) => {
        console.log(`${resource}`, data[resource]);
        requiredTags.map((tag, i1) => {
            const initialCount = 0;
            const countMissingTags = data[resource].reduce(
                (accumulator, currentValue) => {
                    // console.log('accumulator: ', accumulator);
                    // console.log('currentValue: ', currentValue);
                    // console.log('index: ', index);
                    // console.log('array: ', array);
                    return currentValue.missingTags.includes(tag) 
                        ? accumulator+1 
                        : accumulator;
                }, initialCount
            );
            // console.log('missingTags: ', countMissingTags, ' for ', data[resource])
            // console.log('i0, i1, count: ', i0, i1, countMissingTags);
            heatMapData.push([i0, i1, countMissingTags])
            // data[resource].map((d, i1) => {
            //     console.log(`{r: ${resource}, tag: ${tag}, numMissing: ${d.missingTags.length}}`)
            // })
        })
    })
    console.log('heatMapData: ', heatMapData);
    return heatMapData;
}
