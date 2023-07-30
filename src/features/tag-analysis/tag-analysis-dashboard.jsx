import { useEffect, useState } from "react";
import { TagHeatmap } from "./tag-heatmap"
import { ResourceTree } from "./resource-tree";
import { ComponentSpinner } from "@components/spinners";
import { formatTagData } from "@utils/data-formatting";
import { ResourceDetails } from "./resource-details";
import alkTestData from '@utils/test-data';

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

    const handleSetSelectedResources = (account, resourceType) => {
        const selectedResources = {
            [account]: tagData[account].filter(
                r => r.resourceType === resourceType
            )
        }
        setSelectedResources(selectedResources)
        //reset the resource details data since tree changed
        setResourceDetails({})
    }

    const handleSetResourceDetails = (accountName, resourceId) => {
        const details = getResourceDetails(accountName, resourceId)
        setResourceDetails(details)
    }

    const getResourceDetails = (accountName, resourceId) => {
        if(accountName === resourceId) {
            return tagData[accountName]            
        }
        const details = tagData[accountName].find(r => r.resourceId === resourceId)
        if(!details) {
            return {
                error: `Resource ID (${resourceId}) not found!`
            }
        }
        return details;
    }

    
    if(loading) {
        return (
            <ComponentSpinner />
        )
    }

    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-x-2 grow content-start">
            <div className="col-span-2">
                <TagHeatmap
                    data={tagData}
                    onHandleSelectedResources={handleSetSelectedResources}
                />
            </div>
            <div className="
                p-4 
                shadow-inner 
                bg-slate-100
                text-slate-800
                dark:bg-slate-800
                dark:text-slate-200
            ">
                <ResourceTree 
                    resources={selectedResources}
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
            <div className="
                p-4 
                shadow-inner 
                bg-slate-100
                text-slate-800
                dark:bg-slate-800
                dark:text-slate-200
            ">
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