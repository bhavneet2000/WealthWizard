import React from 'react';

type NavbarProps = {
  toggleDarkMode: () => void;
  darkMode: boolean;
  setSearch: (search: string) => void;
};

const Navbar = ({ toggleDarkMode, darkMode, setSearch }: NavbarProps) => {
  return (
    <nav className={`bg-white ${darkMode ? 'dark:bg-gray-800' : ''} shadow w-full transition-colors duration-300`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                WealthTalks
              </h1>
            </div>
            <div className="hidden sm:flex sm:ml-6 space-x-4">
              <a
                href="/dashboard"
                className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-gray-900 dark:hover:text-white transition-colors duration-300`}
              >
                Home
              </a>
              <a
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-gray-900 dark:hover:text-white transition-colors duration-300`}
              >
                Logout
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className={`px-3 py-2 border border-gray-300 ${darkMode ? 'dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700' : 'text-gray-700 bg-gray-100'} rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 w-80 transition-colors duration-300`}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* <button
              onClick={toggleDarkMode}
              className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? 'text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600' : 'text-gray-700 bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'} focus:outline-none transition-colors duration-300`}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
