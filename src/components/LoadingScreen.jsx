import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-white to-blue-600 text-white">
            <h1 className="text-5xl font-bold drop-shadow-lg animate-pulse">
                <span className="font-normal">mind</span>
                <span className="font-bold">Tracker</span>
            </h1>
        </div>
    );
};

export default LoadingScreen;
