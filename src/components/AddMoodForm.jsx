import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMood } from '../context/MoodContext';

const moodOptions = [
    { label: 'Very Angry', value: 'Very Angry', bgColor: 'bg-red-200', textColor: 'text-red-800' },
    { label: 'Angry', value: 'Angry', bgColor: 'bg-red-300', textColor: 'text-red-900' },
    { label: 'Frustrated', value: 'Frustrated', bgColor: 'bg-purple-200', textColor: 'text-purple-800' },
    { label: 'Disappointed', value: 'Disappointed', bgColor: 'bg-purple-300', textColor: 'text-purple-900' },
    { label: 'Neutral', value: 'Neutral', bgColor: 'bg-yellow-200', textColor: 'text-yellow-800' },
    { label: 'Content', value: 'Content', bgColor: 'bg-lime-200', textColor: 'text-lime-800' },
    { label: 'Happy', value: 'Happy', bgColor: 'bg-green-200', textColor: 'text-green-800' },
    { label: 'Excited', value: 'Excited', bgColor: 'bg-teal-200', textColor: 'text-teal-800' },
];

const AddMoodForm = () => {
    const [selectedMood, setSelectedMood] = useState('');
    const [note, setNote] = useState('');

    const { addMood } = useMood();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedMood || !note.trim()) {
            alert('Please select a mood and write a note.');
            return;
        }

        const newMood = {
            id: Date.now(),
            mood: selectedMood,
            tag: selectedMood,
            note,
            date: new Date().toISOString(),
        };

        addMood(newMood);

        navigate('/dashboard');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white/80 text-blue-800 rounded-lg shadow-lg p-6 space-y-6 mb-4 max-w-lg mx-auto"
        >
            <h2 className="text-3xl font-bold text-center mb-6">Add New Mood</h2>

            <div>
                <label className="block mb-3 font-medium">Select Your Mood:</label>
                <div className="flex flex-wrap gap-2 justify-center">
                    {moodOptions.map(({ label, value, bgColor, textColor }) => (
                        <button
                            key={value}
                            type="button"
                            onClick={() => setSelectedMood(value)}
                            className={`px-3 py-1 rounded-full font-semibold cursor-pointer text-sm
                ${bgColor} ${textColor}
                ${selectedMood === value ? 'ring-2 ring-offset-1 ring-indigo-400' : 'ring-0'}
                transition`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <label htmlFor="note" className="block mb-2 font-medium">Note:</label>
                <textarea
                    id="note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="border rounded px-3 py-2 w-full resize-y"
                    placeholder="How are you feeling?"
                    rows={4}
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white w-full py-3 rounded hover:bg-blue-800 transition"
            >
                Save Mood
            </button>
        </form>
    );
};

export default AddMoodForm;
