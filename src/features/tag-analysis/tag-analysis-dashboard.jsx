import { useEffect, useState } from "react";
import { TagHeatmap } from "./tag-heatmap"
import { ComponentSpinner } from "@components/spinners";
import { formatTagData } from "@utils/data-formatting";
import testJSONData from "@utils/test-data"
import alkTestData from '@utils/test-data';

export const TagAnalysisDashboard = () => {

    const [loading, setLoading] = useState(true);
    const [tagData, setTagData] = useState({});
    
    useEffect(() => {
        const data = formatTagData(alkTestData);
        setTagData(data);
        setLoading(false);
    }, [])

    
    if(loading) {
        return (
            <ComponentSpinner />
        )
    }

    return (
        <div className="grid grid-cols-2">
            <div className="col-span-2">
                <TagHeatmap
                    data={tagData}
                />
            </div>
            <div>
                <p>Formatted Tag Data</p>
                <div className="
                    whitespace-pre-wrap 
                    text-sm
                ">
                    {JSON.stringify(tagData, null, 3)}
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