import { useEffect, useState } from "react";
import { TagHeatmap } from "./tag-heatmap"
import { ResourceTree } from "./resource-tree";
import { ComponentSpinner } from "@components/spinners";
import { formatTagData } from "@utils/data-formatting";
// import testJSONData from "@utils/test-data"
import alkTestData from '@utils/test-data';
import { ResourceDetails } from "./resource-details";

export const TagAnalysisDashboard = () => {

    const [loading, setLoading] = useState(true);
    const [tagData, setTagData] = useState({});
    const [selectedResources, setSelectedResources] = useState({})
    const [resourceDetails, setResourceDetails] = useState({})
    
    useEffect(() => {
        const data = formatTagData(alkTestData);
        setTagData(data);
        setLoading(false);
    }, [])

    const handleSetSelectedResources = (resourceData) => {
        console.log('handleSetSelectedResourced():evt: ', resourceData)
        setSelectedResources(resourceData)
    }

    const handleSetResourceDetails = (resourceData) => {
        console.log('handleSetResourceDetails():resourceData: ', resourceData);
        setResourceDetails({...resourceData})
    }

    
    if(loading) {
        return (
            <ComponentSpinner />
        )
    }

    return (
        <div className="grid grid-cols-2 gap-x-2 grow content-start">
            <div className="col-span-2">
                <TagHeatmap
                    data={tagData}
                    onHandleSelectedResources={handleSetSelectedResources}
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