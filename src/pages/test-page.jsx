import { DarkModeTest, TestMap, TestSwitch } from "@features/test"

export const TestPage = () => {
    return (
        <div className="flex flex-col divide-y-4">
            <DarkModeTest />
            <TestMap />
            <TestSwitch />
        </div>
    )
}