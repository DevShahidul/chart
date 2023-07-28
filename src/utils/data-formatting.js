import requiredTags from './required-tags';

export const formatTagData = (jsonData) => {
    // console.log('jsonData: ', jsonData)
    let data; 
    let tagData = {}; 
    let resources;

    //see if the data can be parsed as JSON, otherwise throw an error
    try {
        data = JSON.parse(JSON.stringify(jsonData));
    } catch (e) {
        console.error("Error parsing JSON data: ", e);
    }

    // console.log('requiredTags: ', requiredTags);

    data.map((d) => {
        const [first] = Object.keys(d);
        if(resources && !resources.includes(first)) {
            const newResources = [
                ...resources,
                first
            ]
            resources = newResources;
        }
    })

    // console.log('resources: ', resources);

    data.map(d => {
        // console.log('d: ', d);
        // const [first] = Object.keys(d);
        // console.log('first: ', first);
        const resourceType = d.resource_type
        // console.log('resourceType: ', resourceType);
        const resource = d[resourceType].common
        // console.log('resource: ', resource);
        // const resource = d[first].common
        const accountName = resource.account
        const accountId = resource.account_id
        const resourceId = resource.resource_id
        const resourceName = resource.resource_name
        // const resourceType = resource.resource_type
        // console.log('resource.tags: ', resource.tags);
        const tagNames = resource.tags ? Object.keys(resource.tags) : []

        // console.log('tagNames: ', tagNames);
        const missingTags = requiredTags.filter(tag => !tagNames.includes(tag))

        // console.log('missingTags for ', resourceType, ': ', missingTags);
        const newTagData = {
            accountName: accountName,
            accountId: accountId,
            resourceId: resourceId,
            resourceName: resourceName, 
            resourceType: resourceType,
            currentTags: tagNames,
            missingTags: missingTags,
            numMissingTags: missingTags.length,
        }

        // console.log('newTagData: ', newTagData);

        if(tagData[accountName]) {
            tagData = {
                ...tagData,
                [accountName]: [
                    ...tagData[accountName],
                    newTagData
                ] 
            }
        } else {
            tagData = {
                ...tagData,
                [accountName]: [
                    newTagData
                ]
            }
        }
        // if(tagData[first]) {
        //     tagData = {
        //         ...tagData,
        //         [first]: [
        //             ...tagData[first],
        //             newTagData
        //         ] 
        //     }
        // } else {
        //     tagData = {
        //         ...tagData,
        //         [first]: [
        //             newTagData
        //         ]
        //     }
        // }
        // console.log('tagData inside map: ', tagData);
    })
    // console.log('tagData: ', tagData)
    return tagData;
}