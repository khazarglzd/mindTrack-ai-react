import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Statistics from '../pages/Statistics';
import { useAuth } from '../context/AuthContext';
import LoadingScreen from '../components/LoadingScreen';
import MoodList from '../components/MoodList';
import AboutMe from '../pages/AboutMe';

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
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/moodlist" element={<MoodList />} />
            <Route path="/dashboard/stats" element={<Statistics />} />
            <Route path="/dashboard/about" element={<AboutMe />} />
        </Routes>
    );
}

export default RouteConfig;