import React from 'react';
import AddMoodForm from '../components/AddMoodForm';

const NewMood = () => {
    return (
        <div className="bg-white/80 p-6 rounded-lg shadow-lg text-blue-800 w-full">
            < AddMoodForm />
        </div >
    );
};

export default NewMood;