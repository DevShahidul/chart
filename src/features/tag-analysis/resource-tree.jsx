import PropTypes from 'prop-types';
import { 
    CarryOutOutlined, 
    // CheckOutlined, 
    FormOutlined 
} from '@ant-design/icons';
import { Tree } from 'antd';

export const ResourceTree = ({ 
    resources,
    onHandleSelectedResources,
    onHandleResourceDetails
}) => {

    console.log('rendered ResourceTree:resources: ', resources);

    if(Object.keys(resources).length === 0) {
        return <div>NO RESOURCE SELECTED YET</div>
    }

    const parentName = Object.keys(resources)[0]
    console.log('parentName: ', parentName)
    console.log('instances: ', resources[parentName])
    const testTreeData = [
        {
            title: parentName,
            key: parentName,
            icon: <CarryOutOutlined />,
            children: resources[parentName].map((r, i) => {
                return {
                    title: `${r.resourceName} (${r.resourceType})`,
                    key: r.resourceName,
                    icon: <CarryOutOutlined />,
                }
            })
        }
    ]

    // const treeData = [
    //     {
    //         title: 'parent 1',
    //         key: '0-0',
    //         icon: <CarryOutOutlined />,
    //         children: [
    //         {
    //             title: 'parent 1-0',
    //             key: '0-0-0',
    //             icon: <CarryOutOutlined />,
    //             children: [
    //             {
    //                 title: 'leaf',
    //                 key: '0-0-0-0',
    //                 icon: <CarryOutOutlined />,
    //             },
    //             {
    //                 title: (
    //                 <>
    //                     <div>multiple line title</div>
    //                     <div>multiple line title</div>
    //                 </>
    //                 ),
    //                 key: '0-0-0-1',
    //                 icon: <CarryOutOutlined />,
    //             },
    //             {
    //                 title: 'leaf',
    //                 key: '0-0-0-2',
    //                 icon: <CarryOutOutlined />,
    //             },
    //             ],
    //         },
    //         {
    //             title: 'parent 1-1',
    //             key: '0-0-1',
    //             icon: <CarryOutOutlined />,
    //             children: [
    //             {
    //                 title: 'leaf',
    //                 key: '0-0-1-0',
    //                 icon: <CarryOutOutlined />,
    //             },
    //             ],
    //         },
    //         {
    //             title: 'parent 1-2',
    //             key: '0-0-2',
    //             icon: <CarryOutOutlined />,
    //             children: [
    //             {
    //                 title: 'leaf',
    //                 key: '0-0-2-0',
    //                 icon: <CarryOutOutlined />,
    //             },
    //             {
    //                 title: 'leaf',
    //                 key: '0-0-2-1',
    //                 icon: <CarryOutOutlined />,
    //                 switcherIcon: <FormOutlined />,
    //             },
    //             ],
    //         },
    //         ],
    //     },
    //     {
    //         title: 'parent 2',
    //         key: '0-1',
    //         icon: <CarryOutOutlined />,
    //         children: [
    //         {
    //             title: 'parent 2-0',
    //             key: '0-1-0',
    //             icon: <CarryOutOutlined />,
    //             children: [
    //             {
    //                 title: 'leaf',
    //                 key: '0-1-0-0',
    //                 icon: <CarryOutOutlined />,
    //             },
    //             {
    //                 title: 'leaf',
    //                 key: '0-1-0-1',
    //                 icon: <CarryOutOutlined />,
    //             },
    //             ],
    //         },
    //         ],
    //     },
    // ];
    
    console.log('resources: ', resources);

    return (
        <div className=''>
            <p 
                onClick={onHandleSelectedResources}
            >
                Selected Resources
            </p>
            <Tree
                className='bg-inherit'
                showLine={true}
                showIcon={false}
                defaultExpandedKeys={['0-0-0']}
                onSelect={onHandleResourceDetails}
                defaultExpandAll={true}
                treeData={testTreeData}
            />
        </div>
    )
}

ResourceTree.propTypes = {
    resources: PropTypes.object,
    onHandleSelectedResources: PropTypes.func,
    onHandleResourceDetails: PropTypes.func
}