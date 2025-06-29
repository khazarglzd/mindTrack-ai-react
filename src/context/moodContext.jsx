import React, { createContext, useContext, useState } from 'react';

const MoodContext = createContext();

export const useMood = () => useContext(MoodContext);

export const MoodProvider = ({ children }) => {
    const [moods, setMoods] = useState([]);

    const addMood = (newMood) => {
        setMoods((prev) => [...prev, newMood]);
    };

    return (
        <MoodContext.Provider value={{ moods, addMood }}>
            {children}
        </MoodContext.Provider>
    );
};