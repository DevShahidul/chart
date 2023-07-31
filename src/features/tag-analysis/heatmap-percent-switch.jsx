import PropTypes from "prop-types";
import { Space, Switch } from 'antd';

export const HeatmapPercentSwitch = ({ showPercentages, onTogglePercentages }) => {
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

HeatmapPercentSwitch.propTypes = {
    showPercentages: PropTypes.bool,
    onTogglePercentages: PropTypes.func
}