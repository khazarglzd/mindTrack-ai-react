import React, { useState } from 'react';
import { useMood } from '../context/MoodContext';
import { Editor, EditorState, convertFromRaw } from 'draft-js';

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

const getMoodTagStyle = (mood) => {
    const match = moodOptions.find(option => option.value === mood);
    return match ? `${match.bgColor} ${match.textColor}` : 'bg-gray-200 text-gray-800';
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return 'Invalid Date';

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
};


const renderNote = (note) => {
    try {
        const raw = JSON.parse(note);
        const contentState = convertFromRaw(raw);
        const editorState = EditorState.createWithContent(contentState);

        return (
            <div className="mt-2 text-sm text-blue-900">
                <Editor editorState={editorState} readOnly={true} />
            </div>
        );
    } catch {
        return <p className="text-sm mt-2 italic">{note}</p>;
    }
};

const MyMoodList = ({ moods = [], defaultOpen = false, showToggle = true }) => {
    const { deleteMood, editMood } = useMood();
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const [editingId, setEditingId] = useState(null);
    const [editedMood, setEditedMood] = useState('');
    const [editedNote, setEditedNote] = useState('');

    if (!moods.length) {
        return <p className="text-gray-600">No moods recorded yet.</p>;
    }

    const handleEditClick = (mood) => {
        setEditingId(mood.id);
        setEditedMood(mood.mood);
        setEditedNote(mood.note);
    };

    const handleCancel = () => {
        setEditingId(null);
    };

    const handleSave = (id) => {
        editMood({
            id,
            mood: editedMood,
            note: editedNote,
            date: new Date().toISOString(),
        });
        setEditingId(null);
    };

    return (
        <div className="space-y-4">
            {showToggle && (
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex justify-between items-center cursor-pointer bg-white/90 px-4 py-2 rounded shadow"
                >
                    <h2 className="text-xl font-semibold text-blue-800">My Mood List</h2>
                    <button className="text-2xl text-blue-600 hover:text-blue-900 transition">
                        {isOpen ? '▲' : '▼'}
                    </button>
                </div>
            )}

            {(isOpen || !showToggle) &&
                moods
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map(({ id, mood, note, date }) => {
                        const isEditing = editingId === id;

                        return (
                            <div
                                key={id}
                                className="bg-white rounded-lg shadow p-6 relative text-blue-800"
                            >
                                {isEditing ? (
                                    <div className="space-y-4">
                                        <p className="text-xl text-blue-400">Editing Entry from: {formatDate(date)}</p>

                                        <select
                                            className="w-full p-2 border rounded"
                                            value={editedMood}
                                            onChange={(e) => setEditedMood(e.target.value)}
                                        >
                                            {moodOptions.map(({ value, label }) => (
                                                <option key={value} value={value}>
                                                    {label}
                                                </option>
                                            ))}
                                        </select>

                                        <textarea
                                            className="w-full p-2 border rounded"
                                            value={editedNote}
                                            onChange={(e) => setEditedNote(e.target.value)}
                                            rows={3}
                                        />

                                        <div className="flex justify-end gap-2 pt-2">
                                            <button
                                                onClick={() => handleSave(id)}
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
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-blue-800">Mood:</span>
                                                <span
                                                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getMoodTagStyle(mood)}`}
                                                >
                                                    {mood}
                                                </span>
                                            </div>
                                            <span className="text-sm text-gray-500">{formatDate(date)}</span>
                                        </div>

                                        {/* Burada artık Statistics ile aynı gösterim */}
                                        {note && renderNote(note)}

                                        <div className="absolute bottom-4 right-4 flex gap-2">
                                            <button
                                                onClick={() => handleEditClick({ id, mood, note, date })}
                                                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800 transition"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => deleteMood(id)}
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

export default MyMoodList;
