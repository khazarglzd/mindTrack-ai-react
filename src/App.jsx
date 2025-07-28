import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import RouteConfig from './routes/RouteConfig';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-white to-blue-600 text-white flex flex-col">

        <header className="p-4 shadow-md bg-white/10 backdrop-blur-sm flex items-center justify-between  mx-auto w-full">

          <Link to="/dashboard">
            <h1 className="text-2xl font-bold tracking-wide cursor-pointer text-blue-600 drop-shadow-md cursor-default select-none">
              <span className="font-normal">mind</span>
              <span className="font-bold">Tracker</span>
            </h1>
          </Link>



          <Navbar />
        </header>


        <main className="flex-1 p-6 flex justify-center items-start w-full max-w-4xl mx-auto">
          <RouteConfig />
        </main>


        <footer className="p-4 text-sm text-center text-blue/70">
          © {new Date().getFullYear()} mindTracker — All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;
