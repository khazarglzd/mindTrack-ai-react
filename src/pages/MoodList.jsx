import React from 'react';
import MyMoodList from '../components/MyMoodList';
import { useMood } from '../context/MoodContext';

const MoodList = () => {
    const { moods } = useMood();

    return (
        <div className="bg-white/80 p-6 rounded-lg shadow-lg text-blue-800 w-full">
            <h2 className="text-3xl font-bold mb-3 ml-1">Your Mood History 📋</h2>
            <p className="text-md mb-10 ml-1">All your recorded moods are listed below.</p>
            <MyMoodList moods={moods} defaultOpen={true} showToggle={false} />
        </div>
    );
};

export default MoodList;