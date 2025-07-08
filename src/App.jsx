import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import RouteConfig from './routes/RouteConfig';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-white to-blue-600 text-white flex flex-col">

        {/* Header */}
        <header className="p-4 shadow-md bg-white/10 backdrop-blur-sm flex flex-col items-center">
          <h1 className="text-2xl font-bold tracking-wide text-blue-600 drop-shadow-md mb-2">
            <span className="font-normal">mind</span>
            <span className="font-bold">Tracker</span>
          </h1>
          <Navbar />
        </header>

        {/* Ana içerik (route'lar burada değişecek) */}
        <main className="flex-1 p-6 flex justify-center items-start w-full max-w-4xl mx-auto">
          <RouteConfig />
        </main>

        {/* Footer */}
        <footer className="p-4 text-sm text-center text-blue/70">
          © {new Date().getFullYear()} mindTracker — All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;
