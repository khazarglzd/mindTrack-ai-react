import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-white/80 p-6 rounded-lg shadow-lg text-blue-800 max-w-3xl mx-auto mt-10">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">About Us</h2>
            <p className="mb-4">
                <span className="font-semibold text-blue-900">mindTracker</span> is a simple and intuitive mood tracking app built to help individuals understand their emotions better over time.
            </p>
            <p className="mb-4">
                Our mission is to make self-reflection easier by letting you log how you feel every day, view patterns, and take small steps toward emotional wellbeing.
            </p>
            <p className="mb-4">
                Whether you're feeling very angry or super excited, MindTracker is your personal space to track and reflect. This app was lovingly crafted by a passionate front-end developer who believes that mental health matters.
            </p>
            <div className="mt-6 text-sm text-gray-600">
                Version 1.0.0 — Built with using React & Tailwind CSS.
            </div>
        </div>
    );
};

export default AboutUs;
