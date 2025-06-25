import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-white to-blue-600 text-white flex flex-col">
            <header className="p-4 shadow-md bg-white/10 backdrop-blur-sm">
                <h1 className="text-2xl font-bold tracking-wide  text-blue-600 drop-shadow-md"><span className="font-normal">mind</span>
                    <span className="font-bold">Tracker</span></h1>
            </header>

            <main className="flex-1 p-6 flex justify-center items-start">
                <div className="w-full max-w-4xl">{children}</div>
            </main>

            <footer className="p-4 text-sm text-center text-blue/70">
                © {new Date().getFullYear()} mindTracker — All rights reserved.
            </footer>
        </div>
    );
};

export default Layout;