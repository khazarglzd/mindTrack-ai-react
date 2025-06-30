import React from 'react';

const MoodList = ({ moods }) => {
    if (!moods || moods.length === 0) {
        return <p className="text-blue/80">No mood entries yet.</p>;
    }

    return (
        <div className="space-y-4">
            {moods.map((mood, index) => (
                <div key={index} className="bg-white/80 text-blue-800 rounded-lg shadow-lg p-6 space-y-4">
                    <p className="text-xl text-blue-400">Date: {mood.date}</p>
                    <p className="text-m  text-blue-400"> Mood: {mood.emoji}</p>
                    <p className="text-m  text-blue-400">Note: {mood.note}</p>
                </div>
            ))}
        </div>
    );
};

export default MoodList;