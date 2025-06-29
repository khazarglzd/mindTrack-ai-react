import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import AddMoodForm from '../components/AddMoodForm'
import MoodList from '../components/MoodList'
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
        <Layout>
            <div className="bg-white/80 p-6 rounded-lg shadow-lg text-blue-800 w-full">
                <h2 className="text-3xl font-bold mb-4 ml-1">Welcome back 👋</h2>
                <p className="text-md mb-6 ml-1">Track your mood or journal your thoughts below.</p>


                <AddMoodForm />
                {/* <button
                onClick={handleLogout}
                className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition cursor-pointer"
            >
                Sign Out
            </button> */}
                <MoodList moods={moods} />
            </div>
        </Layout>
    )
}

export default Dashboard