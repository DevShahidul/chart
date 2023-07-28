import { TagHeatmap } from "./tag-heatmap"
import { formatTagData } from "@utils/data-formatting";
import testJSONData from "@utils/test-data"
import alkTestData from '@utils/test-data';

export const TagAnalysisDashboard = () => {

    const data = formatTagData(alkTestData);
    
    return (
        <div className="grid grid-cols-2">
            <div className="col-span-2">
                <TagHeatmap
                    data={data}
                />
            </div>
            <div>
                <p>Formatted Tag Data</p>
                <div className="
                    whitespace-pre-wrap 
                    text-sm
                ">
                    {JSON.stringify(data, null, 3)}
                </div>
            </div>
            <div>
                <p>Raw Test Data (from API):</p>
                <div className="
                    whitespace-pre-wrap 
                    text-sm
                ">
                    {JSON.stringify(testJSONData, null, 3)}
                </div>
            </div>
        </div>
    )
}