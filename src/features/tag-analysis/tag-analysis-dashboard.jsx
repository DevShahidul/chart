import { HeatmapChart } from "./heatmap-chart"
import testJSONData from "@utils/test-data"

import testChartData from '@utils/chart-data';
import alkTestData from '@utils/test-data';
import { formatTagData } from "@utils/dataFormatter";

export const TagAnalysisDashboard = () => {

    const data = formatTagData(alkTestData);

    return (
        <div className="grid grid-cols-2">
            <div className="col-span-2">
                <HeatmapChart 
                    data={alkTestData}
                />
            </div>
            <div>
                LEFT DETAILS COL
            </div>
            <div className="">
                <p>TEST DATA:</p>
                <div className="whitespace-pre-wrap text-sm">{JSON.stringify(testJSONData, null, 3)}</div>
            </div>
        </div>
    )
}