import { PercentSwitcher } from "./percent-switcher"
import PropTypes from 'prop-types';

export const TagDashboardOptions = ({ showPercentages, togglePercentages }) => {
    return (
        <div className="
            flex
            px-4 py-2
            justify-end
        ">
            <span />
            <span className="font-light text-xs text-inherit">
                <PercentSwitcher 
                    showPercentages={showPercentages} 
                    onTogglePercentages={togglePercentages}
                />
            </span>
        </div>
    )    
}
TagDashboardOptions.propTypes = {
    showPercentages: PropTypes.bool.isRequired,
    togglePercentages: PropTypes.func.isRequired
}