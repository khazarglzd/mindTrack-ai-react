import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import AddMoodForm from '../components/AddMoodForm';
import { useAuth } from '../context/AuthContext';
import LoadingScreen from '../components/LoadingScreen';


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
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/add" element={<AddMoodForm />} />
            </Routes>
        </Router>
    );
}

export default RouteConfig;