import React from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

const Dashboard = () => {

    const { signOut, isAuthenticated } = useAuth()

    const navigate = useNavigate()

    const handleLogout = () => {
        signOut()
        navigate('/');
    };

    return (
        <Layout>
            <div className="bg-white/80 p-6 rounded-lg shadow-lg text-blue-800 w-full">
                <h2 className="text-3xl font-bold mb-4">Welcome back 👋</h2>
                <p className="text-md mb-6">Track your mood or journal your thoughts below.</p>

                <div className="space-y-4">
                    <textarea
                        rows="4"
                        className="w-full p-3 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="How are you feeling today?"
                    ></textarea>

                    <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                        Save Entry
                    </button>
                </div>
            </div>
            {/* <button
                onClick={handleLogout}
                className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition cursor-pointer"
            >
                Sign Out
            </button> */}
        </Layout>
    )
}

export default Dashboard