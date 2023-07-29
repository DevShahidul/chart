import { DarkModeTest, TestMap } from "@features/test"

export const TestPage = () => {
    return (
        <div className="flex flex-col divide-y-4">
            <DarkModeTest />
            <TestMap />
        </div>
    )
}