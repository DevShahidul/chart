import { useState } from "react";
import { useDarkMode } from "./use-dark-mode";

export const DarkModeButton = () => {
    const [colorTheme, setTheme] = useDarkMode();
    const [darkMode, setDarkMode] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkMode(checked);
    }

    return (
        <button
            className="
                bg-gray-300
                dark:bg-slate-700
                dark:text-gray-200
                rounded-lg
                p-2
                hover:shadow-md
                hover:bg-gray-400
                dark:hover:bg-slate-600

            "
            onClick={() => toggleDarkMode(prevDarkMode => !prevDarkMode)}
        >
            {darkMode? "Light Mode" : "Dark Mode"}
        </button>
    )
}