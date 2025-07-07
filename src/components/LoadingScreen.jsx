import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-blue-100">
            <h1 className="text-4xl font-bold text-blue-700 animate-pulse">
                <span className="font-normal">mind</span>
                <span className="font-bold">Tracker</span>
            </h1>
        </div>
    );
};

export default LoadingScreen;