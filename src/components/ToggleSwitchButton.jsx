import React from 'react';
import { useTranslation } from 'react-i18next';

function ToggleSwitchButton() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div
      className={`relative inline-flex items-center h-10 w-20 rounded-full cursor-pointer transition-colors 
      ${isEnglish ? 'bg-black' : 'bg-black'}`}
      onClick={toggleLanguage}
    >
      <span
        className={`inline-block w-8 h-8 transform bg-white rounded-full shadow-md transition-transform
         ${isEnglish ? 'translate-x-0' : 'translate-x-12'}`}
      />
      <span className={`absolute left-2 text-xs font-medium ${isEnglish ? 'text-black' : 'text-transparent'}`}>EN</span>
      <span className={`absolute right-2 text-xs font-medium ${isEnglish ? 'text-transparent' : 'text-black'}`}>AR</span>
    </div>
  );
}

export default ToggleSwitchButton;
