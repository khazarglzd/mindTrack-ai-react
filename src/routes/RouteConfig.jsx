import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import AddMoodForm from '../components/AddMoodForm';
import { useAuth } from '../context/authContext';
import Layout from "../components/Layout"

function RouteConfig() {

    const { isAuthenticated } = useAuth()
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