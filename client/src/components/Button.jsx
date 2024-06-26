import React from 'react'
import useTheme from '../context/ThemeContext';

export default function Button() {
    const { thememode, lightmode, darkmode } = useTheme()
    const theme = thememode;

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={(e) => {
                    const darkmodeStatus = e.currentTarget.checked
                    if (darkmodeStatus) {
                        darkmode()
                    } else {
                        lightmode()
                    }
                }}
                checked={thememode === "dark"}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-md font-medium text-slate-900 dark:text-slate-100 hidden sm:block">{theme[0].toUpperCase() + theme.slice(1)} Theme</span>
        </label>
    );
}