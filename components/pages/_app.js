import { useState } from 'react';

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <header className="p-4 border-b">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded">
            Toggle Dark Mode
          </button>
        </header>
        <main className="p-4">{children}</main>
        <footer className="p-4 border-t text-center">
          Multi-Step Form with Real-Time Collaboration
        </footer>
      </div>
    </div>
  );
}
