import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeClass = "underline font-semibold";

    return (
        <nav className="bg-indigo-600 text-white px-6 py-3 flex justify-center gap-8 shadow-md">
            <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? activeClass : "hover:underline")}
            >
                Dashboard
            </NavLink>
            <NavLink
                to="/dashboard/add"
                className={({ isActive }) => (isActive ? activeClass : "hover:underline")}
            >
                Mood Ekle
            </NavLink>
            <NavLink
                to="/dashboard/stats"
                className={({ isActive }) => (isActive ? activeClass : "hover:underline")}
            >
                İstatistik
            </NavLink>
        </nav>
    );
};

export default Navbar;
