import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

import AddMoodForm from '../components/AddMoodForm'
import MyMoodList from '../components/MyMoodList'
import { useMood } from "../context/MoodContext"

const Dashboard = () => {

    const { signOut, isAuthenticated } = useAuth()

    const navigate = useNavigate()

    const handleLogout = () => {
        signOut()
        navigate('/');
    };

    const { moods } = useMood();


    console.log(moods)
    return (

        <div className="bg-white/80 p-6 rounded-lg shadow-lg text-blue-800 w-full">
            <h2 className="text-3xl font-bold mb-4 ml-1">Welcome back 👋</h2>
            <p className="text-md mb-6 ml-1">Track your mood or journal your thoughts below.</p>


            <button
                onClick={() => navigate('/dashboard/addmood')}
                className="bg-blue-600 text-white font-semibold cursor-pointer px-6 py-3 rounded shadow hover:bg-blue-700 transition mb-6"
            >
                Add New Mood
            </button>
            <button
                onClick={() => navigate('/dashboard/stats')}
                className="bg-blue-600 text-white font-semibold px-6 py-3 cursor-pointer  rounded shadow hover:bg-blue-700 transition ml-3 mb-6"
            >
                Statistics
            </button>
            {/* <button
                onClick={handleLogout}
                className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition cursor-pointer"
            >
                Sign Out
            </button> */}
            <MyMoodList moods={moods} />
        </div>

    )
}

export default Dashboard