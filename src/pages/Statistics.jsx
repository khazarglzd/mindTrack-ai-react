import React, { useMemo } from 'react';
import { useMood } from '../context/MoodContext';

const Statistics = () => {
    const { moods } = useMood();

    // Tarihe göre azalan sıralama
    const sortedMoods = useMemo(() => {
        return [...moods].sort((a, b) => new Date(b.date) - new Date(a.date));
    }, [moods]);

    // Mood frekanslarını hesapla
    const moodSummary = useMemo(() => {
        const summary = {};
        moods.forEach(({ mood }) => {
            if (mood) {
                summary[mood] = (summary[mood] || 0) + 1;
            }
        });
        return summary;
    }, [moods]);

    return (
        <div className="bg-white/80 p-6 rounded-lg shadow-lg text-blue-800 w-full max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Statistics</h2>
            <p className="mb-8">Here’s a breakdown of your mood activity.</p>

            <section className="mb-10">
                <h3 className="text-xl font-semibold mb-3">Mood Frequency</h3>
                {Object.keys(moodSummary).length === 0 ? (
                    <p>No mood data available.</p>
                ) : (
                    <ul className="space-y-2">
                        {Object.entries(moodSummary).map(([mood, count]) => (
                            <li
                                key={mood}
                                className="flex justify-between bg-blue-50 px-4 py-2 rounded shadow-sm"
                            >
                                <span className="capitalize font-medium">{mood}</span>
                                <span className="font-semibold">{count} time{count > 1 ? 's' : ''}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            <section>
                <h3 className="text-xl font-semibold mb-3">All Moods by Date</h3>
                {sortedMoods.length === 0 ? (
                    <p>No moods recorded yet.</p>
                ) : (
                    <ul className="space-y-3">
                        {sortedMoods.map(({ id, mood, note, date }) => (
                            <li
                                key={id}
                                className="bg-blue-100 px-4 py-3 rounded-lg shadow-sm text-left"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="capitalize font-semibold text-lg">{mood}</span>
                                    <span className="text-sm text-blue-700">
                                        {new Date(date).toLocaleDateString('tr-TR')} /{' '}
                                        {new Date(date).toLocaleTimeString('tr-TR', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </span>
                                </div>
                                {note && <p className="text-sm text-blue-800 mt-1">{note}</p>}
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default Statistics;
