import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Auth from "../pages/Auth"
import Dashboard from '../pages/Dashboard';
import Statistics from '../pages/Statistics';
import { useAuth } from '../context/AuthContext';
import LoadingScreen from '../components/LoadingScreen';
import AboutUs from '../pages/AboutUs';
import NewMood from '../pages/NewMood';
import MoodList from "../pages/MoodList"
import SignUp from '../components/SignUp';

function RouteConfig() {
    const { isAuthenticated } = useAuth();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1200);

        return () => clearTimeout(timeout);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/moodlist" element={<MoodList />} />
            <Route path="/dashboard/addmood" element={<NewMood />} />
            <Route path="/dashboard/stats" element={<Statistics />} />
            <Route path="/dashboard/aboutus" element={<AboutUs />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
}

export default RouteConfig;