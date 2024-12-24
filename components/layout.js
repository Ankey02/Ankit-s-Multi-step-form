import { useState } from 'react';

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header className="p-4 bg-gray-200 dark:bg-gray-800 flex justify-between items-center">
          <h1 className="text-xl font-bold">My Project</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
        <main className="p-4">{children}</main>
        <footer className="p-4 bg-gray-200 dark:bg-gray-800 text-center">
          Footer Content
        </footer>
      </div>
    </div>
  );
}
