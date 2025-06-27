import React, { useState } from 'react';

const AddMoodForm = () => {
    const [emoji, setEmoji] = useState('😊');
    const [note, setNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMood = {
            id: Date.now().toString(),
            emoji,
            note,
            date: new Date().toISOString().split('T')[0],
        };

        console.log('New Mood:', newMood);
        // İleride burada context'e dispatch edeceğiz.

        // Formu sıfırla
        setEmoji('😊');
        setNote('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white text-blue-700 rounded-lg shadow p-6 space-y-4"
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
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                Save Mood
            </button>
        </form>
    );
};

export default AddMoodForm;