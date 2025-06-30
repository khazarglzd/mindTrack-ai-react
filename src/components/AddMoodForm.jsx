import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMood } from '../context/MoodContext';

const AddMoodForm = () => {
    const [emoji, setEmoji] = useState('');
    const [note, setNote] = useState('');

    const { addMood } = useMood();  // Burada addMood'u context'ten alıyoruz
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!emoji || !note.trim()) {
            alert('Please select a mood and write a note.');
            return;
        }

        const newMood = {
            id: Date.now(),
            emoji,
            note,
            date: `${new Date().toLocaleDateString('tr-TR')}  /  ${new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}`
        };

        addMood(newMood);

        navigate('/dashboard');
    };


    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white/80 text-blue-800 rounded-lg shadow-lg p-6 space-y-4 mb-4"
        >
            <h2 className="text-xl font-bold">Add New Mood</h2>

            <div className="flex flex-col">
                <label htmlFor="emoji" className="mb-1 font-medium">Mood Emoji</label>
                <select
                    id="emoji"
                    value={emoji}
                    onChange={(e) => setEmoji(e.target.value)}
                    className="border rounded px-3 py-2"
                >
                    <option value="" disabled>Choose your mood</option>
                    <option value="😊">😊 Happy</option>
                    <option value="😔">😔 Sad</option>
                    <option value="😠">😠 Angry</option>
                    <option value="😐">😐 Neutral</option>
                </select>
            </div>

            <div className="flex flex-col">
                <label htmlFor="note" className="mb-1 font-medium">Note</label>
                <textarea
                    id="note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="border rounded px-3 py-2"
                    placeholder="How are you feeling?"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
                Save Mood
            </button>
        </form>
    );
};

export default AddMoodForm;