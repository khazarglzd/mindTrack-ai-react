import React from 'react';
import { useMood } from '../context/MoodContext';

const MoodList = ({ moods }) => {
    if (!moods || moods.length === 0) {
        return <p className="text-blue/80">No mood entries yet.</p>;
    }
    const { deleteMood } = useMood();

    return (
        <div className="space-y-4">
            {moods.map((mood, index) => (
                <div key={index} className="bg-white/80 text-blue-800 rounded-lg relative shadow-lg p-6 space-y-4">
                    <p className="text-xl text-blue-400">Date: {mood.date}</p>
                    <p className="text-m  text-blue-400"> Mood: {mood.emoji}</p>
                    <p className="text-m  text-blue-400">Note: {mood.note}</p>
                    <button
                        onClick={() => deleteMood(mood.id)}
                        type="submit"
                        className="bg-gray-600 text-white px-4 py-2 absolute bottom-6 right-6 rounded cursor-pointer hover:bg-gray-800 transition"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default MoodList;