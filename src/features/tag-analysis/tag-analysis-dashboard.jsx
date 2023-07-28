import { useEffect, useState } from "react";
import { TagHeatmap } from "./tag-heatmap"
import { ResourceTree } from "./resource-tree";
import { ComponentSpinner } from "@components/spinners";
import { formatTagData } from "@utils/data-formatting";
import testJSONData from "@utils/test-data"
import alkTestData from '@utils/test-data';
import { ResourceDetails } from "./resource-details";

export const TagAnalysisDashboard = () => {

    const [loading, setLoading] = useState(true);
    const [tagData, setTagData] = useState({});
    const [selectedResources, setSelectedResources] = useState([])
    const [resourceDetails, setResourceDetails] = useState({})
    
    useEffect(() => {
        const data = formatTagData(alkTestData);
        setTagData(data);
        setLoading(false);
    }, [])

    const handleSetSelectedResources = (evt) => {
        console.log('handleSetSelectedResourced():evt: ', evt)
    }

    const handleSetResourceDetails = (evt) => {
        console.log('handleSetResourceDetails():evt: ', evt);
        setResourceDetails({...evt})
    }

    
    if(loading) {
        return (
            <ComponentSpinner />
        )
    }

    return (
        <div className="grid grid-cols-2 gap-x-2">
            <div className="col-span-2">
                <TagHeatmap
                    data={tagData}
                />
            </div>
            <div className="p-4 shadow-inner bg-slate-100">
                <ResourceTree 
                    resources={selectedResources}
                    onHandleSelectedResources={handleSetSelectedResources}
                    onHandleResourceDetails={handleSetResourceDetails}
                />
                {/* <p>Formatted Tag Data</p>
                <div className="
                    whitespace-pre-wrap 
                    text-sm
                ">
                    {JSON.stringify(tagData, null, 3)}
                </div> */}
            </div>
            <div className="p-4 shadow-inner bg-slate-100">
                <ResourceDetails 
                    details={resourceDetails}
                />
                {/* <p>Raw Test Data (from API):</p>
                <div className="
                    whitespace-pre-wrap 
                    text-sm
                ">
                    {JSON.stringify(testJSONData, null, 3)}
                </div> */}
            </div>
        </div>
    )
}