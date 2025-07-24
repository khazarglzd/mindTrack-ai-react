import React, { useState } from 'react';
import {
    Editor,
    EditorState,
    RichUtils,
    convertToRaw,
    Modifier,
} from 'draft-js';
import 'draft-js/dist/Draft.css';
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

// Inline stil butonları ve gösterimleri
const INLINE_STYLES = [
    { label: 'Bold', style: 'BOLD', display: <b>B</b> },
    { label: 'Italic', style: 'ITALIC', display: <i>I</i> },
    { label: 'Underline', style: 'UNDERLINE', display: <u>U</u> },
    { label: 'Monospace', style: 'CODE', display: <code>{'{ }'}</code> },
];

// Block tipleri ve gösterimleri
const BLOCK_TYPES = [
    { label: 'H1', style: 'header-one' },
    { label: 'H2', style: 'header-two' },
    { label: 'Blockquote', style: 'blockquote' },
    { label: 'UL', style: 'unordered-list-item' },
    { label: 'OL', style: 'ordered-list-item' },
];

const AddMoodForm = () => {
    const [selectedMood, setSelectedMood] = useState('');
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const { addMood } = useMood();
    const navigate = useNavigate();

    // Mevcut inline stilleri al
    const currentStyle = editorState.getCurrentInlineStyle();

    // Mevcut block tipi al
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    const toggleInlineStyle = (inlineStyle) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    };

    const toggleBlockType = (blockType) => {
        setEditorState(RichUtils.toggleBlockType(editorState, blockType));
    };

    // Link ekleme (prompt ile)
    const promptForLink = () => {
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
            const url = window.prompt('Enter the URL for the link:');
            if (url) {
                const contentState = editorState.getCurrentContent();
                const contentStateWithEntity = contentState.createEntity(
                    'LINK',
                    'MUTABLE',
                    { url }
                );
                const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
                const newEditorState = EditorState.set(editorState, {
                    currentContent: contentStateWithEntity,
                });
                setEditorState(
                    RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey)
                );
            }
        } else {
            alert('Please select some text to add a link.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedMood) {
            alert('Please select a mood.');
            return;
        }

        const contentState = editorState.getCurrentContent();
        const plainText = contentState.getPlainText().trim();

        if (!plainText) {
            alert('Please write a note.');
            return;
        }

        const rawContent = JSON.stringify(convertToRaw(contentState));

        const newMood = {
            id: Date.now(),
            mood: selectedMood,
            note: rawContent,
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
                <label className="block mb-2 font-medium">Note:</label>
                <div className="border rounded px-3 py-2 min-h-[120px] cursor-text bg-white text-black">
                    <Editor
                        editorState={editorState}
                        onChange={setEditorState}
                        placeholder="How are you feeling?"
                    />
                </div>

                {/* Stil butonları - küçük, sade, tek satır */}
                <div className="mt-3 flex gap-1 overflow-x-auto">
                    {INLINE_STYLES.map(({ label, style, display }) => (
                        <button
                            key={style}
                            type="button"
                            onClick={() => toggleInlineStyle(style)}
                            aria-label={label}
                            title={label}
                            className={`w-7 h-7 flex items-center justify-center rounded text-sm font-normal select-none
                border
                transition
                ${currentStyle.has(style)
                                    ? 'bg-blue-100 text-blue-700 border-blue-300'
                                    : 'bg-white text-gray-700 border-gray-300'
                                }
                hover:bg-blue-50 hover:text-blue-700
              `}
                        >
                            {display}
                        </button>
                    ))}

                    {BLOCK_TYPES.map(({ label, style }) => {
                        let displayLabel = label;
                        if (label.startsWith('H')) displayLabel = label;
                        else if (label === 'UL') displayLabel = '•';
                        else if (label === 'OL') displayLabel = '1.';
                        else if (label === 'Blockquote') displayLabel = '❝';
                        else if (label === 'Code Block') displayLabel = '{ }';

                        return (
                            <button
                                key={style}
                                type="button"
                                onClick={() => toggleBlockType(style)}
                                aria-label={label}
                                title={label}
                                className={`w-7 h-7 flex items-center justify-center rounded text-sm font-normal select-none
                  border
                  transition
                  ${blockType === style
                                        ? 'bg-blue-100 text-blue-700 border-blue-300'
                                        : 'bg-white text-gray-700 border-gray-300'
                                    }
                  hover:bg-blue-50 hover:text-blue-700
                `}
                            >
                                {displayLabel}
                            </button>
                        );
                    })}

                    {/* Link butonu */}
                    <button
                        type="button"
                        onClick={promptForLink}
                        aria-label="Add Link"
                        title="Add Link"
                        className="w-7 h-7 flex items-center justify-center rounded text-sm font-normal select-none
              border bg-green-100 text-green-700 border-green-300 hover:bg-green-50 hover:text-green-800 transition"
                    >
                        🔗
                    </button>
                </div>
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
