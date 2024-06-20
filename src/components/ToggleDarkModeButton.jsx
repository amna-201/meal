import React, { useState, useEffect } from 'react';

const ToggleDarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`relative inline-flex items-center h-8 w-20 rounded-full cursor-pointer transition-colors ${
        isDarkMode ? 'bg-black' : 'bg-gray-300'
      }`}
      onClick={toggleDarkMode}
    >
      <span
        className={`inline-block w-8 h-8 transform bg-white rounded-full shadow-md transition-transform ${
          isDarkMode ? 'translate-x-12' : 'translate-x-0'
        }`}
      />
      <span className={`absolute left-2 text-xs font-medium ${isDarkMode ? 'text-transparent' : 'text-black'}`}>Light</span>
      <span className={`absolute right-2 text-xs font-medium ${isDarkMode ? 'text-black' : 'text-transparent'}`}>Dark</span>
    </div>
  );
};

export default ToggleDarkModeButton;
