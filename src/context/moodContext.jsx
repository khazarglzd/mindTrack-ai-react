import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const MoodContext = createContext();

export const useMood = () => useContext(MoodContext);

export const MoodProvider = ({ children }) => {
    const [moods, setMoods] = useLocalStorage("moods", []);

    const addMood = (newMood) => {
        setMoods((prev) => [newMood, ...prev]);
    };

    return (
        <MoodContext.Provider value={{ moods, addMood }}>
            {children}
        </MoodContext.Provider>
    );
};