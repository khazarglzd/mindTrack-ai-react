import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log('Sign up with:', { username, email, password });
        navigate('/dashboard');
    };

    const handleGoogleSignup = () => {
        console.log('Google sign up');
    };

    return (
        <div className="min-h-screen flex items-center justify-center text-center p-6">
            <div className="bg-white/90 text-blue-800 p-8 rounded-lg shadow-lg w-full max-w-md -translate-y-10">
                <h1 className="text-4xl font-bold mb-2 text-blue-600 drop-shadow-sm">
                    <span className="font-normal">mind</span><span className="font-bold">Tracker</span>
                </h1>
                <p className="text-sm mb-6 text-blue-700">
                    Create your account to track your thoughts and moods.
                </p>

                <form onSubmit={handleSignUp} className="space-y-4 mb-6 text-left">
                    <div>
                        <label className="block text-sm mb-1 font-medium" htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1 font-medium" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
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
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Create Account
                    </button>
                </form>

                <button
                    onClick={handleGoogleSignup}
                    className="w-full flex items-center justify-center border border-gray-300 rounded py-2 hover:bg-gray-100 transition"
                >
                    <FcGoogle className="text-xl mr-2" />
                    Sign up with Google
                </button>
            </div>
        </div>
    );
};

export default SignUp;
