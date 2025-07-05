import React, { useState } from 'react';
import { useMood } from '../context/MoodContext';

const MoodList = ({ moods }) => {
    const { deleteMood, editMood } = useMood();
    const [editingId, setEditingId] = useState(null);
    const [editedEmoji, setEditedEmoji] = useState('');
    const [editedNote, setEditedNote] = useState('');

    const handleEditClick = (mood) => {
        setEditingId(mood.id);
        setEditedEmoji(mood.emoji);
        setEditedNote(mood.note);
    };

    const handleSave = (id) => {
        editMood({
            id,
            emoji: editedEmoji,
            note: editedNote,
            date: new Date().toLocaleString('tr-TR'), // tarihi güncelliyoruz istersen koruyabilirsin
        });
        setEditingId(null);
    };

    const handleCancel = () => {
        setEditingId(null);
    };

    if (!moods || moods.length === 0) {
        return <p className="text-blue/80">No mood entries yet.</p>;
    }

    return (
        <div className="space-y-4">
            {moods.map((mood) => (
                <div
                    key={mood.id}
                    className="bg-white/80 text-blue-800 rounded-lg relative shadow-lg p-6 space-y-4"
                >
                    <p className="text-xl text-blue-400">Date: {mood.date}</p>

                    {editingId === mood.id ? (
                        <>
                            <input
                                className="w-full p-2 border rounded"
                                value={editedEmoji}
                                onChange={(e) => setEditedEmoji(e.target.value)}
                            />
                            <textarea
                                className="w-full p-2 border rounded"
                                value={editedNote}
                                onChange={(e) => setEditedNote(e.target.value)}
                            />
                            <div className="flex justify-end space-x-2">
                                <button
                                    onClick={() => handleSave(mood.id)}
                                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={handleCancel}
                                    className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="text-m text-blue-400">Mood: {mood.emoji}</p>
                            <p className="text-m text-blue-400">Note: {mood.note}</p>
                            <button
                                onClick={() => handleEditClick(mood)}
                                className="bg-purple-600 text-white px-4 py-2 absolute bottom-6 right-6 rounded cursor-pointer hover:bg-gray-800 transition"
                            >
                                Edit
                            </button>
                        </>
                    )}

                    <button
                        onClick={() => deleteMood(mood.id)}
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