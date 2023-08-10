import { Table, Space, Tag } from 'antd';
import PropTypes from 'prop-types';

export const ResourceDetails = ({ details }) => {
    if(!details || (details.length === 0 || Object.keys(details).length === 0)) {
        return <div>Select a resource to view details.</div>
    }

    return (
        <div className='flex flex-col'>
            {/* <p className='text-sm font-semibold'>Resource Details</p> */}
            {Array.isArray(details) ? (
                <Space 
                    direction="vertical"
                    size="middle"
                >
                {details.map((resource, i) => (
                    <ResourceTable 
                        key={i}
                        resource={resource}
                    />  
                ))}
                </Space>
            ) : (
                <ResourceTable 
                    resource={details}
                />
            )}
            {/* <div className="
                whitespace-pre-wrap 
                text-sm
            ">
                {JSON.stringify(details, null, 3)}
            </div> */}
            <div>
                
            </div>
        </div>
    )
}
ResourceDetails.propTypes = {
    details: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
}

const ResourceTable = ({ resource }) => {
    const keys = Object.keys(resource);
    
    const tableData = keys.map(key => {
        const value = Array.isArray(resource[key])
            ? (
                <Space direction='vertical'>
                    {resource[key].map(tag => (
                        <Tag 
                            key={tag}
                            bordered={false}
                        >
                            <span className='font-mono'>{tag}</span>
                        </Tag>
                    ))}
                </Space>
              )
            : resource[key]
        return {
            key: <span className='font-semibold'>{key}</span>,
            value: value
        }
    })

    const columns = [
        {
            title: 'Name',
            dataIndex: 'key',
            key: 'key'
        },
        {
            title: "Value",
            dataIndex: 'value',
            key: 'value',
            
        }
    ]

    return (
        <Table 
            rowClassName="align-top"
            dataSource={tableData}
            columns={columns}
            pagination={false}
        />
    )
}
ResourceTable.propTypes = {
    resource: PropTypes.object
}