import React, { useState } from 'react';

const SelectLanguage = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    return (
        <div>
            <label htmlFor="languageSelect">Select Language:</label>
            <select id="languageSelect" value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="">-- Select --</option>
                <option value="en">English</option>
                <option value="pl">Polish</option>
                {/* Add more language options here */}
            </select>
            {selectedLanguage && <p>Selected Language: {selectedLanguage}</p>}
        </div>
    );
};

export default SelectLanguage;