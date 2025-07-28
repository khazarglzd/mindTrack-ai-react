import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import quotes from "../data/quotes"

import MyMoodList from '../components/MyMoodList'
import { useMood } from "../context/MoodContext"

const Dashboard = () => {
    const [quote, setQuote] = useState(null);
    const navigate = useNavigate();
    const { signOut } = useAuth();
    const { moods } = useMood();

    useEffect(() => {

        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }, []);


    const handleLogout = () => {
        signOut();
        navigate('/');
    };

    return (
        <div className="bg-white/80 p-6 rounded-lg shadow-lg text-blue-800 w-full">
            <h2 className="text-3xl font-bold mb-4 ml-1">Welcome back </h2>
            <p className="text-md mb-6 ml-1">Track your mood or journal your thoughts below.</p>

            {quote && (
                <div className=" border-l-4 border-blue-500 text-blue-700 p-4 mb-6 rounded shadow">
                    <p className="italic">"{quote.q}"</p>
                    <p className="text-sm text-right">— {quote.a}</p>
                </div>
            )}


            <div className="flex gap-4 mb-6">
                <button
                    onClick={() => navigate('/dashboard/addmood')}
                    className="bg-blue-600 text-white font-semibold px-6 py-3 cursor-pointer rounded shadow hover:bg-blue-700 transition"
                >
                    Add New Mood
                </button>
                <button
                    onClick={() => navigate('/dashboard/stats')}
                    className="bg-blue-600 text-white font-semibold px-6 py-3 cursor-pointer rounded shadow hover:bg-blue-700 transition"
                >
                    Statistics
                </button>
            </div>

            <MyMoodList moods={moods} />
        </div>
    )
}

export default Dashboard;
