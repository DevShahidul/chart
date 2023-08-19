import PropTypes from "prop-types";
import { HeatmapPercentSwitch } from "./heatmap-percent-switch";

export const TagAnalysisOptions = ({ options, onUpdateOptions }) => {

    const toggleShowPercentages = () => {
        onUpdateOptions('showPercentages', !options.showPercentages)
    }

    return (
        <div className="flex py-2 justify-start dark:bg-slate-600 -mb-[4.5rem] z-10 relative font-inter font-semibold px-3">
            <HeatmapPercentSwitch 
                showPercentages={options.showPercentages}
                onTogglePercentages={toggleShowPercentages}
            />
        </div>
    )    
}

TagAnalysisOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onUpdateOptions: PropTypes.func.isRequired
}