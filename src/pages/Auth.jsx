import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FcGoogle } from 'react-icons/fc';

const Auth = () => {
    const navigate = useNavigate();
    const { signIn, isAuthenticated } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Normal giriş simülasyonu
        signIn(); // ← burada gerçek auth fonksiyonunla değiştir
        navigate('/dashboard');
    };

    const handleGoogleLogin = () => {
        console.log('Google login'); // Firebase gibi bir yapı entegre edilecekse buraya
    };

    return (
        <div className="min-h-screen flex items-center justify-center text-center p-6">
            <div className="bg-white/90 text-blue-800 p-8 rounded-lg shadow-lg w-full max-w-md -translate-y-10">
                <h1 className="text-4xl font-bold mb-2 text-blue-600 drop-shadow-sm">
                    <span className="font-normal">mind</span><span className="font-bold">Tracker</span>
                </h1>
                <p className="text-sm mb-6 text-blue-700">
                    Track your mind, record your daily mood, and monitor your progress.
                </p>

                {/* Inputs */}
                <div className="space-y-4 mb-6 text-left">
                    <div>
                        <label className="block text-sm mb-1 font-medium" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1 font-medium" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="space-x-4 mb-6">
                    {!isAuthenticated ? (
                        <button
                            onClick={handleLogin}
                            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Sign In
                        </button>
                    ) : (
                        <p>You already signed in</p>
                    )}

                    <button className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500 transition">
                        Sign Up
                    </button>
                </div>

                {/* Divider */}
                <div className="text-center text-sm text-blue-700 mb-2">or</div>

                {/* Google Sign-In */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center border border-gray-300 rounded py-2 hover:bg-gray-100 transition"
                >
                    <FcGoogle className="text-xl mr-2" />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Auth;
