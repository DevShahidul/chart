import PropTypes from 'prop-types';
import { 
    CarryOutOutlined, 
    // CheckOutlined, 
    // FormOutlined 
} from '@ant-design/icons';
import { Tree } from 'antd';

export const ResourceTree = ({ 
    resources,
    // onHandleSelectedResources,
    onHandleResourceDetails
}) => {

    // console.log('rendered ResourceTree:resources: ', resources);

    if(Object.keys(resources).length === 0) {
        return <div>Select a cell to view resource data.</div>
    }

    const parentName = Object.keys(resources)[0]

    if(resources[parentName].length === 0) {
        return (
            <>
                <div>{parentName}</div>
                <div className='font-light'>(No Missing Tags)</div>
            </>
        )
    }

    const treeData = [
        {
            title: parentName,
            key: parentName,
            icon: <CarryOutOutlined />,
            children: resources[parentName].map(r => {
                return {
                    title: `${r.resourceName} (${r.resourceType})`,
                    key: r.resourceId,
                    icon: <CarryOutOutlined />,
                }
            })
        }
    ]

    return (
        <div>
            <p className='font-semibold'>Selected Resources</p>
            <Tree
                className='bg-inherit text-inherit'
                showLine={true}
                showIcon={false}
                onSelect={(resourceId) => onHandleResourceDetails(parentName, resourceId[0])}
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