import React, { useMemo, useState } from 'react';
import { useMood } from '../context/MoodContext';

const moodOptions = [
    { label: 'Very Angry', value: 'Very Angry', borderColor: 'border-red-500' },
    { label: 'Angry', value: 'Angry', borderColor: 'border-red-400' },
    { label: 'Frustrated', value: 'Frustrated', borderColor: 'border-purple-400' },
    { label: 'Disappointed', value: 'Disappointed', borderColor: 'border-purple-500' },
    { label: 'Neutral', value: 'Neutral', borderColor: 'border-yellow-500' },
    { label: 'Content', value: 'Content', borderColor: 'border-lime-500' },
    { label: 'Happy', value: 'Happy', borderColor: 'border-green-500' },
    { label: 'Excited', value: 'Excited', borderColor: 'border-teal-500' },
];

const Statistics = () => {
    const { moods } = useMood();
    const [selectedMood, setSelectedMood] = useState('Neutral');

    const sortedMoods = useMemo(() => {
        return [...moods].sort((a, b) => new Date(b.date) - new Date(a.date));
    }, [moods]);

    const moodSummary = useMemo(() => {
        const summary = {};
        moods.forEach(({ mood }) => {
            if (mood) {
                summary[mood] = (summary[mood] || 0) + 1;
            }
        });
        return summary;
    }, [moods]);

    const filteredMoods = useMemo(() => {
        return moods.filter(m => m.mood === selectedMood);
    }, [selectedMood, moods]);

    const getMoodStyle = (mood) => {
        return moodOptions.find(m => m.value === mood) || {};
    };

    return (
        <div className="bg-white/80 p-6 rounded-lg shadow-lg text-blue-800 w-full  mx-auto text-left">
            <h2 className="text-3xl font-bold mb-4">Statistics</h2>
            <p className="mb-8">Here’s a breakdown of your mood activity.</p>


            <section className="mb-10">
                <h3 className="text-xl font-semibold mb-3">Mood Frequency</h3>
                {Object.keys(moodSummary).length === 0 ? (
                    <p>No mood data available.</p>
                ) : (
                    <ul className="space-y-3">
                        {Object.entries(moodSummary).map(([mood, count]) => {
                            const { borderColor } = getMoodStyle(mood);
                            return (
                                <li
                                    key={mood}
                                    className={`border-l-6 ${borderColor} bg-white text-blue-800 p-4 rounded shadow`}
                                >
                                    <div className="flex justify-between">
                                        <span className="capitalize font-medium">{mood}</span>
                                        <span className="font-semibold">{count} time{count > 1 ? 's' : ''}</span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </section>


            <section className="mb-10">
                <h3 className="text-xl font-semibold mb-3">All Moods Archive</h3>
                <select
                    value={selectedMood}
                    onChange={(e) => setSelectedMood(e.target.value)}
                    className="mb-4 border border-blue-200 rounded px-3 py-2 bg-white shadow-sm"
                >
                    {moodOptions.map(({ label, value }) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>

                {filteredMoods.length === 0 ? (
                    <p>No entries for this mood yet.</p>
                ) : (
                    <ul className="space-y-3">
                        {filteredMoods.map(({ id, mood, note, date }) => {
                            const { borderColor } = getMoodStyle(mood);
                            return (
                                <li
                                    key={id}
                                    className={`border-l-6 ${borderColor} bg-white text-blue-800 p-4 rounded shadow`}
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="capitalize font-semibold text-lg">{mood}</span>
                                        <span className="text-sm">
                                            {new Date(date).toLocaleDateString('tr-TR')} /{' '}
                                            {new Date(date).toLocaleTimeString('tr-TR', {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </span>
                                    </div>
                                    {note && <p className="text-sm mt-2 italic">"{note}"</p>}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </section>


            <section>
                <h3 className="text-xl font-semibold mb-3">All Moods by Date</h3>
                {sortedMoods.length === 0 ? (
                    <p>No moods recorded yet.</p>
                ) : (
                    <ul className="space-y-3">
                        {sortedMoods.map(({ id, mood, note, date }) => {
                            const { borderColor } = getMoodStyle(mood);
                            return (
                                <li
                                    key={id}
                                    className={`border-l-6 ${borderColor} bg-white text-blue-800 p-4 rounded shadow`}
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="capitalize font-semibold text-lg">{mood}</span>
                                        <span className="text-sm">
                                            {new Date(date).toLocaleDateString('tr-TR')} /{' '}
                                            {new Date(date).toLocaleTimeString('tr-TR', {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </span>
                                    </div>
                                    {note && <p className="text-sm mt-2 italic">"{note}"</p>}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default Statistics;
