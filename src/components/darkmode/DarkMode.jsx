import { useState, useEffect } from 'react';

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => JSON.parse(localStorage.getItem('darkMode')) || false);

    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    };

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
        const body = document.body;
        // const header = document.querySelector('.header-light-background');

        if (isDarkMode) {
            body.classList.add('dark-mode-body');
            // header.classList.replace('header-light-background','dark-mode-header');

        } else {
            body.classList.remove('dark-mode-body');
            // header.classList.remove('dark-mode-header');
        }
    }, [isDarkMode]);

    return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;