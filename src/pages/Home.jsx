import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const Home = ({ props }) => {
    const navigate = useNavigate();

    const { signIn, isAuthenticated } = useAuth()


    const handleLogin = () => {
        signIn()
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-white to-blue-600 p-6">
            <h1 className="text-5xl font-sans mb-4 text-white drop-shadow-lg">
                <span className="font-normal">mind</span>
                <span className="font-bold">Tracker</span>
            </h1>
            <p className="text-lg mb-8 max-w-md text-center text-white drop-shadow-md">
                Track your mind, record your daily mood, and monitor your progress.
            </p>

            <div className="space-x-4">
                {
                    !isAuthenticated && (
                        <button
                            onClick={handleLogin}
                            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition cursor-pointer"
                        >
                            Sign In
                        </button>
                    )
                } {isAuthenticated && <p>You alreay signed in</p>}

                <button className="bg-transparent border border-white px-6 py-3 rounded text-white hover:bg-white hover:text-blue-600 transition">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Home;