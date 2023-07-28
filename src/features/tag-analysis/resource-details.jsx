import PropTypes from 'prop-types';
import { Button } from 'antd';

export const ResourceDetails = ({ details }) => {
    
    console.log('resource details: ', details);

    return (
        <div className='flex flex-col h-full bg-slate-100'>
            <p>
                Resource Details
            </p>
            <div className="
                whitespace-pre-wrap 
                text-sm
            ">
                {JSON.stringify(details, null, 3)}
            </div>
            {/* <Button 
                className='bg-[#1677ff]'
                type="primary"
            >
                TEST ANTD BUTTON
            </Button> */}
        </div>
    )
}

ResourceDetails.propTypes = {
    details: PropTypes.object
}