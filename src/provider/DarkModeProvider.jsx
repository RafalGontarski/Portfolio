import React from 'react';
import useDarkMode from "../components/darkmode/DarkMode";
import { DarkModeContext } from '../context/DarkModeContext';

export const DarkModeProvider = ({ children }) => {
    const darkMode = useDarkMode();

    return (
        <DarkModeContext.Provider value={darkMode}>
            {children}
        </DarkModeContext.Provider>
    );
};