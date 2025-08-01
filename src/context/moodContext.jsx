import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const MoodContext = createContext();

export const useMood = () => useContext(MoodContext);

export const MoodProvider = ({ children }) => {
    const [moods, setMoods] = useLocalStorage("moods", []);

    const addMood = (newMood) => {
        setMoods((prev) => [newMood, ...prev]);
    };

    const deleteMood = (id) => {
        const filteredMoods = moods.filter((mood) => mood.id !== id);
        setMoods(filteredMoods);
    };
    const editMood = (updatedMood) => {
        setMoods((prevMoods) =>
            prevMoods.map((mood) =>
                mood.id === updatedMood.id ? updatedMood : mood
            )
        );
    };

    return (
        <MoodContext.Provider value={{ moods, addMood, deleteMood, editMood }}>
            {children}
        </MoodContext.Provider>
    );
};