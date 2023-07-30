import { useState } from "react";
import { useDarkMode } from "./use-dark-mode";
import { Space, Switch } from "antd";
import { BulbOutlined, BulbFilled } from '@ant-design/icons'

export const DarkModeSwitch = () => {
    const [colorTheme, setTheme] = useDarkMode();
    const [darkMode, setDarkMode] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkMode(checked);
    }

    return (
        <>
        <Space direction="verticle">
            <Switch 
                // className="
                //     bg-gray-300
                //     dark:bg-slate-700
                //     dark:text-gray-200
                //     rounded-lg
                //     p-2
                //     hover:shadow-md
                //     hover:bg-gray-400
                //     dark:hover:bg-slate-600
                // "
                size="large"
                className="
                    bg-slate-400
                    dark:bg-slate-500
                "
                checkedChildren={<BulbOutlined />}
                // checkedChildren="light"
                unCheckedChildren={<BulbFilled />}
                // unCheckedChildren="dark"
                onClick={() => toggleDarkMode(prevDarkMode => !prevDarkMode)}
                checked={darkMode}
            />
            </Space>
            {/* <button
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
            </button> */}
        </>
    )
}