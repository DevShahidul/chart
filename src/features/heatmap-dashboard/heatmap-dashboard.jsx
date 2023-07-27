import { HeatmapChart } from "./heatmap-chart"
import testJSONData from "@utils/test-data"

export const HeatmapDashboard = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="col-span-2 h-40">
                <HeatmapChart />
            </div>
            <div>
                LEFT DETAILS COL
            </div>
            <div className="">
                <p>TEST DATA:</p>
                <div className="whitespace-pre-wrap text-sm">{JSON.stringify(testJSONData, null, 3)}</div>
            </div>
        </div>
    )
}