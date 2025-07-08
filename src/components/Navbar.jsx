import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeClass = "underline font-semibold";

    return (
        <nav className="px-6 py-3 flex justify-center gap-8 text-white">
            <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? activeClass : "hover:underline")}
            >
                Dashboard
            </NavLink>
            <NavLink
                to="/dashboard/addmood"
                className={({ isActive }) => (isActive ? activeClass : "hover:underline")}
            >
                New Mood
            </NavLink>
            <NavLink
                to="/dashboard/moodlist"
                className={({ isActive }) => (isActive ? activeClass : "hover:underline")}
            >
                Mood List
            </NavLink>
            <NavLink
                to="/dashboard/stats"
                className={({ isActive }) => (isActive ? activeClass : "hover:underline")}
            >
                Statistics
            </NavLink>
            <NavLink
                to="/dashboard/aboutus"
                className={({ isActive }) => (isActive ? activeClass : "hover:underline")}
            >
                About Me
            </NavLink>

        </nav>
    );
};

export default Navbar;
