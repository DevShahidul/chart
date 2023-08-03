import { useEffect, useState } from "react";
import { TagAnalysisOptions } from "./tag-analysis-options";
import { TagHeatmap } from "./tag-heatmap"
import { ResourceTree } from "./resource-tree";
import { ComponentSpinner } from "@components/spinners";
import { formatTagData } from "@utils/data-formatting";
import { ResourceDetails } from "./resource-details";
import alkTestData from '@utils/test-data';
import { useConfigOptions } from "@hooks";

export const TagAnalysisDashboard = () => {
    const [loading, setLoading] = useState(true);
    const [tagData, setTagData] = useState({});
    const [selectedResources, setSelectedResources] = useState({})
    const [resourceDetails, setResourceDetails] = useState({})
    const [options, updateOptions] = useConfigOptions();
    
    useEffect(() => {
        const tagDataURL = "";
        const data = fetch(tagDataURL)
            .then(response => response.json())
            .catch(e => console.error("Error fetching data: ", e));
        const formattedData = formatTagData(data);
        // const formattedData = formatTagData(alkTestData);
        // setTagData(data);
        setTagData(formattedData)
        setLoading(false);
    }, [])

    const handleSetSelectedResources = (account, resourceType) => {
        // console.log('set tree loading')
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
        // if(!details) {
        //     return {
        //         error: `Resource ID (${resourceId}) not found!`
        //     }
        // }
        return details;
    }

    
    if(loading) {
        return (
            <ComponentSpinner />
        )
    }

    return (
        <>
            <TagAnalysisOptions 
                options={options}
                onUpdateOptions={updateOptions}
            />
            <div className="grid grid-cols-2 gap-x-2 grow content-start">
                <div className="col-span-2">
                    <TagHeatmap
                        data={tagData}
                        onHandleSelectedResources={handleSetSelectedResources}
                        showPercentages={options.showPercentages}
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
                </div>
            </div>
        </>
    )
}