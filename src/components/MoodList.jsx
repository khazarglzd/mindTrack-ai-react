import React, { useState } from 'react';
import { useMood } from '../context/MoodContext';

const MoodList = ({ moods }) => {
    const { deleteMood, editMood } = useMood();
    const [editingId, setEditingId] = useState(null);
    const [editedEmoji, setEditedEmoji] = useState('');
    const [editedNote, setEditedNote] = useState('');
    const [isOpen, setIsOpen] = useState(false);

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
            date: `${new Date().toLocaleDateString('tr-TR')}  /  ${new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}`
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

            <div onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center cursor-pointer bg-white/90 px-4 py-2 rounded shadow">
                <h2 className="text-xl font-semibold text-blue-800">My Mood List</h2>
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-blue-600 cursor-pointer hover:text-blue-900 transition">
                    {isOpen ? '▲' : '▼'}
                </button>
            </div>


            {isOpen && moods.map((mood) => {
                const isEditing = editingId === mood.id;

                return (
                    <div
                        key={mood.id}
                        className="bg-white/80 text-blue-800 rounded-lg shadow-lg p-6 relative"
                    >
                        {isEditing ? (
                            <div className="space-y-4">
                                <p className="text-xl text-blue-400">
                                    Editing Entry from: {mood.date}
                                </p>
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
                                <div className="flex justify-end gap-2 pt-2">
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
                            </div>
                        ) : (
                            <>
                                <p className="text-xl text-blue-600">Date: {mood.date}</p>
                                <p className="text-m text-blue-600">Mood: {mood.emoji}</p>
                                <p className="text-m text-blue-600">Note: {mood.note}</p>


                                <div className="absolute bottom-4 right-4 flex gap-2">
                                    <button
                                        onClick={() => handleEditClick(mood)}
                                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800 transition"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteMood(mood.id)}
                                        className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-800 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default MoodList;
