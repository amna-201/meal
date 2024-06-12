import React from 'react';
import ToggleSwitchButton from './ToggleSwitchButton';
import ToggleDarkModeButton from './ToggleDarkModeButton';
import img1 from '../assets/images/breakfast.png';
import img2 from '../assets/images/cake.png';
import img3 from '../assets/images/drink.png';
import img4 from '../assets/images/sandwich_bread_bikini_snack_food_icon_208027.png'
import img5 from '../assets/images/main-dish.png'
import img6 from '../assets/images/salad.png'
import { useTranslation } from 'react-i18next';
const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-400 dark:bg-gray-800">
      <div className="absolute top-4 right-4 flex space-x-2">
        <ToggleDarkModeButton />
        <ToggleSwitchButton />
      </div>
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">{t('title')}</h1>
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border border-gray-400 rounded-full w-64"
        />
      </div>
      <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Types of Food</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
          <img src={img1} alt="Food Type 1" className="w-20 h-20" />
          <p className="text-black dark:text-white">Type 1</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img2} alt="Food Type 2" className="w-20 h-20" />
            <p className="text-black dark:text-white">Type 2</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img3} alt="Food Type 3" className="w-20 h-20" />
            <p className="text-black dark:text-white">Type 3</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img4} alt="Food Type 4" className="w-20 h-20" />
            <p className="text-black dark:text-white">Type 4</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img5} alt="Food Type 5" className="w-20 h-20" />
            <p className="text-black dark:text-white">Type 5</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img6} alt="Food Type 6" className="w-20 h-20" />
            <p className="text-black dark:text-white">Type 6</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
