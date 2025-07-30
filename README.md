# MindTracker

**A Minimal, Fast, and Private Mood Tracking App Built with React**

MindTracker is a lightweight mood tracking application designed to help users log their emotional states, reflect through notes, and observe mood patterns over time. Built with simplicity and clarity in mind, this app enables you to stay mindful of your daily mental well-being without distractions.

## Features

- Choose your mood from predefined options
- Add a note with rich text formatting using Draft.js
- View mood history with date and time
- Statistics page with filtering by mood type or date
- Responsive and accessible design
- Data persistence using `localStorage` (client-side only)
- Built with modern React features and clean component structure

## Tech Stack

- React (with hooks)
- Tailwind CSS (utility-first styling)
- Draft.js (rich text editor for mood notes)
- React Router (routing)
- Context API (state management)
- Vite (fast development and build tool)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Folder Structure
src/
├── components/       # Reusable UI components
├── context/          # React Context (MoodContext)
├── pages/            # Page-level components (Dashboard, Statistics, etc.)
├── assets/           # Static assets (images, icons)
├── App.jsx           # Main app component with routing
├── main.jsx          # App entry point

### Installation

```bash
git clone https://github.com/your-username/mindtracker.git
cd mindtracker
npm install
npm run dev

