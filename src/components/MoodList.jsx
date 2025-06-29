import React from 'react';

const MoodList = ({ moods }) => {
    if (!moods || moods.length === 0) {
        return <p className="text-blue/80">No mood entries yet.</p>;
    }

    return (
        <div className="space-y-4">
            {moods.map((mood, index) => (
                <div key={index} className="bg-white text-blue-600 rounded shadow p-4">
                    <p className="text-xl">🧠 {mood.emoji}</p>
                    <p className="text-sm">📝 {mood.note}</p>
                    <p className="text-xs text-blue-400">📅 {mood.time}</p>
                </div>
            ))}
        </div>
    );
};

export default MoodList;