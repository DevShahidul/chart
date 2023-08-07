import PropTypes from 'prop-types';
import { 
    CarryOutOutlined, 
    // CheckOutlined, 
    // FormOutlined 
} from '@ant-design/icons';
import { Tree , Input } from 'antd';
import { useState, useEffect } from 'react';
import { debounce } from '@utils/debounce';
import { ComponentSpinner } from '@components/spinners';

export const ResourceTree = ({ 
    resources,
    // onHandleSelectedResources,
    onHandleResourceDetails
}) => {
    // console.log('resources: ', resources);
    const [loading, setLoading] = useState(true);
    // const defaultTreeData = formatTreeData(resources);
    // console.log('defaultTreeData: ', defaultTreeData);
    const [searchValue, setSearchValue] = useState('');
    const [treeData, setTreeData] = useState([]);
    // console.log('treeData', treeData);

    const { Search } = Input;

    // console.log('rendered ResourceTree:resources: ', resources);

    useEffect(() => {
        if(searchValue==='') {
            const formattedTreeData = formatTreeData(resources)
            setTreeData(formattedTreeData);
        } else {
            console.log('searchValue: ', searchValue);
            console.log('treeData: ', treeData);
            // const newTreeData = updateResourceTree(searchValue)
            const newTreeData = [{
                title: treeData[0].title,
                children: treeData[0].children.filter(r => r.title.includes(searchValue))
            }]
            console.log('newTreeData: ', newTreeData);
            setTreeData(newTreeData);
        }
        setLoading(false)
    }, [searchValue, resources])

    const handleSearchValueChange = (e) => {
        const { value } = e.target;
        console.log('typed: ', value);
        setSearchValue(value);
        // const
    }

    const debouncedHandleSearchValueChange = 
        debounce(handleSearchValueChange, 500);

    // const debouncedHandleSearchValueChange = useCallback(() => {
    //     console.log('debounced search value...');
    //     return debounce(handleSearchValueChange)
    // }, [])

    // const updateResourceTree = (searchTerm) => {
    //     console.log('updateResourceTree:searchTerm: ', searchTerm);
    //     console.log('updateResourceTree:treeData: ', treeData);
    //     if(!searchTerm) return treeData
    //     // const { parentName, icon, children } = treeData
    //     console.log('updateResourceTree: ', treeData);
    //     const newTreeData = {
    //         ...treeData,
    //         children: treeData.title.children.map(r => {
    //             return {
    //                 title: `${r.resourceName} (${r.resourceType})`,
    //                 key: r.resourceId,
    //                 icon: <CarryOutOutlined />,
    //             }
    //         })
    //     }
    //     return newTreeData;
    // }

    if(!loading && (treeData.length === 0)) {
        console.log('inside !loading && (treeData.length === 0)')
        return <div>Select a cell to view resource data.</div>
    }

    // if(Object.keys(resources).length === 0) {
    //     return <div>Select a cell to view resource data.</div>
    // }

    // const parentName = Object.keys(resources)[0]
    console.log('treeData: ', treeData);
    // console.log('treeData:title: ', treeData.title)
    // console.log('treeData:children: ', treeData.children)

    if(!loading && (treeData.length > 0) && treeData[0].children.length === 0) {
        return (
            <>
                <div>{treeData[0].title}</div>
                <div className='font-light'>(No Missing Tags)</div>
            </>
        )
    }

    // const defaultTreeData = [
    //     {
    //         title: parentName,
    //         key: parentName,
    //         icon: <CarryOutOutlined />,
    //         children: resources[parentName].map(r => {
    //             return {
    //                 title: `${r.resourceName} (${r.resourceType})`,
    //                 key: r.resourceId,
    //                 icon: <CarryOutOutlined />,
    //             }
    //         })
    //     }
    // ]

    // const searchTreeData = [
    //         {
    //             title: parentName,
    //             key: parentName,
    //             icon: <CarryOutOutlined />,
    //             children: resources[parentName].map(r => {
    //                 if(r.resourceName.includes(searchValue)) {
    //                     console.log('match: ', r.resourceName, '=', searchValue)
    //                     return {
    //                         title: `${r.resourceName} (${r.resourceType})`,
    //                         key: r.resourceId,
    //                         icon: <CarryOutOutlined />,
    //                     }
    //                 } else {
    //                     console.log('not match: ', r.resourceName, '!=', searchValue)
    //                 }
    //             })
    //         }
    //     ]

    // console.log('searchTreeData: ', searchTreeData);

    // const treeData1 = [
    //     {
    //         title: parentName,
    //         key: parentName,
    //         icon: <CarryOutOutlined />,
    //         children: resources[parentName].map(r => {
    //             return {
    //                 title: `${r.resourceName} (${r.resourceType})`,
    //                 key: r.resourceId,
    //                 icon: <CarryOutOutlined />,
    //             }
    //         })
    //     }
    // ]

    if(loading) {
        return <ComponentSpinner />
    }

    return (
        <div>
            <p className='font-semibold'>Selected Resources</p>
            <Search 
                className='mb-1'
                placeholder='Search'
                onChange={debouncedHandleSearchValueChange}
                // onChange={handleSearchValueChange}
            />
            <Tree
                className='bg-inherit text-inherit'
                showLine={true}
                showIcon={false}
                onSelect={(resourceId) => onHandleResourceDetails(treeData[0].title, resourceId[0])}
                defaultExpandAll={true}
                autoExpandParent={true}
                treeData={treeData}
                multiple={false}
            />
        </div>
    )
}
ResourceTree.propTypes = {
    resources: PropTypes.object,
    onHandleResourceDetails: PropTypes.func
}

const formatTreeData = (resources) => {
    if(Object.keys(resources).length === 0) {
        return [{
            title: '',
            key: 'EMPTY',
            children: []
        }]
    }
    
    const parentName = Object.keys(resources)[0]

    if(resources[parentName].length === 0) {
        return [{
            title: parentName,
            key: parentName,
            icon: <CarryOutOutlined />,
            children: []
        }]
    }

    return [{
        title: parentName,
        key: parentName,
        children: resources[parentName].map(r => {
            return {
                title: `${r.resourceName} (${r.resourceType})`,
                key: r.resourceId,
                icon: <CarryOutOutlined />,
                type: r.resourceType
                // children: resources[parentName].map(r => {
                //     return {
                //         title: `${r.resourceName} (${r.resourceType})`,
                //         key: r.resourceId,
                //         icon: <CarryOutOutlined />,
                //     }
                // })
            }
        })
    }]
}