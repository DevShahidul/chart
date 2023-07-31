import PropTypes from 'prop-types';
import { Space, Switch } from 'antd';

export const PercentSwitcher = ({showPercentages, onTogglePercentages}) => {
    return (
        <>
            <Space direction="verticle">
                Show Percentages
                <Switch 
                    size="small"
                    className="
                        bg-slate-400
                        dark:bg-slate-500
                    "
                    onClick={onTogglePercentages}
                    checked={showPercentages}
                />
            </Space>
        </>
    )
}

PercentSwitcher.propTypes = {
    showPercentages: PropTypes.bool.isRequired,
    onTogglePercentages: PropTypes.func.isRequired
}