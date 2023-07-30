import { DarkModeButton } from "@theme/dark-button"
import { DarkModeSwitch } from "@theme/dark-switch"
export const DarkModeTest = () => {
    return (
        <div className="
            py-4 
            px-2
            bg-slate-100
            text-slate-800
            dark:bg-slate-800
            dark:text-slate-200
        ">
            <DarkModeSwitch />
            <DarkModeButton />
            <p className="text-2xl font-bold">This is a test heading.</p>
            <p className="text-lg font-light">This is a test body.</p>
            <p className="text-sm font-light">This is a test footer.</p>
        </div>
    )
}