import React, { useMemo } from 'react';
import { useMood } from '../context/MoodContext';

const Statistics = () => {
    const { moods } = useMood();


    const sortedMoods = useMemo(() => {
        return [...moods].sort((a, b) => new Date(b.date) - new Date(a.date));
    }, [moods]);


    const moodSummary = useMemo(() => {
        const summary = {};
        moods.forEach(({ mood }) => {
            summary[mood] = (summary[mood] || 0) + 1;
        });
        return summary;
    }, [moods]);

    return (
        <div className="bg-white/80 p-6 rounded-lg shadow-lg text-blue-800 w-full">
            <h2 className="text-3xl font-bold mb-3 ml-1">Statistics</h2>
            <p className="text-md mb-8 ml-1">Here’s a breakdown of your mood activity.</p>


            <div className="mb-10">
                <h3 className="text-xl font-semibold mb-3">Mood Frequency</h3>
                <ul className="space-y-2">
                    {Object.entries(moodSummary).map(([mood, count]) => (
                        <li key={mood} className="flex justify-between bg-blue-50 px-4 py-2 rounded shadow-sm">
                            <span className="capitalize font-medium">{mood}</span>
                            <span className="font-semibold">{count} times</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-3">All Moods by Date</h3>
                <ul className="space-y-2">
                    {sortedMoods.map(({ id, mood, note, date }) => (
                        <li
                            key={id}
                            className="bg-blue-100 px-4 py-3 rounded-lg shadow-sm text-left"
                        >
                            <div className="flex justify-between">
                                <span className="capitalize font-semibold">{mood}</span>
                                <span className="text-sm text-blue-700">{new Date(date).toLocaleDateString()}</span>
                            </div>
                            {note && (
                                <p className="text-sm text-blue-800 mt-1">{note}</p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Statistics;
