import React from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const { signOut, isAuthenticated } = useAuth()

    const navigate = useNavigate()

    const handleLogout = () => {
        signOut()
        navigate('/');
    };

    return (
        <div>
            <button
                onClick={handleLogout}
                className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition cursor-pointer"
            >
                Sign Out
            </button>
        </div>
    )
}

export default Dashboard