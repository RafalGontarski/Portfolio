import React, { useState } from 'react';
import { LanguageContext } from '../context/LanguageContext'; // Właściwa ścieżka do pliku

export const LanguageProvider = ({ children }) => {
    const [isPolish, setIsPolish] = useState(false);

    const toggleLanguage = () => {
        setIsPolish(!isPolish);
    };

    return (
        <LanguageContext.Provider value={{ isPolish, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};