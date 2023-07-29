import PropTypes from 'prop-types';

export const ResourceDetails = ({ details }) => {
    if(details && (details.length === 0 || Object.keys(details).length === 0)) {
        return <div>Select a resource to view details.</div>
    }

    return (
        <div>
            <p className='font-semibold'>Resource Details</p>
            <div className="
                whitespace-pre-wrap 
                text-sm
                
            ">
                {JSON.stringify(details, null, 3)}
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