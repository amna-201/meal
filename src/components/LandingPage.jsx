import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ToggleSwitchButton from './ToggleSwitchButton';
import ToggleDarkModeButton from './ToggleDarkModeButton';
import search from '../assets/images/search.png';
import img1 from '../assets/images/breakfast.png';
import img2 from '../assets/images/cake.png';
import img3 from '../assets/images/drink.png';
import img4 from '../assets/images/sandwich_bread_bikini_snack_food_icon_208027.png';
import img5 from '../assets/images/main-dish.png';
import img6 from '../assets/images/salad.png';
import logo from '../assets/images/dinner.png';
import { useTranslation } from 'react-i18next';

const LandingPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  
  const foodTypes = [
    { id: 1, name: 'Breakfast', image: img1, description: 'A delicious breakfast dish.' },
    { id: 2, name: 'Cake', image: img2, description: 'A variety of cakes to enjoy.' },
    { id: 3, name: 'Drink', image: img3, description: 'Refreshing drinks for any occasion.' },
    { id: 4, name: 'Sandwich', image: img4, description: 'Tasty sandwiches with various fillings.' },
    { id: 5, name: 'Main Dish', image: img5, description: 'Hearty main dishes to satisfy your hunger.' },
    { id: 6, name: 'Salad', image: img6, description: 'Healthy and fresh salads.' },
  ];

  const filteredFoodTypes = foodTypes.filter(foodType => 
    foodType.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-black min-h-screen">
      <div className='flex w-full'>
        <div className='w-1/4 h-screen '>
          <img src={logo} alt="Logo" className='w-2/4 h-1/4 mx-16'/>
        </div>
        <div className='bg-yellow-400 w-3/4 rounded-full rounded-tr-none rounded-bl-none'>
          <div className='bg-yellow-400 w-full flex flex-col justify-center items-center h-screen rounded-tl-full ps-12 rounded-full relative'>
            <div className="absolute top-4 right-4 flex space-x-2">
              <ToggleDarkModeButton />
              <ToggleSwitchButton />
            </div>
            <div className="flex flex-col items-center mb-10 justify-center">
              <h1 className="text-8xl text-center w-3/4 font-mono mb-4 text-black dark:text-white">{t('title')}</h1>
              <label className='flex bg-white w-1/2 h-1/3 rounded-full border border-cyan-50'>
                <span>
                  <img src={search} alt="Search" className='ml-20 w-20 h-full'/>
                </span>
                <input 
                  className="placeholder:italic placeholder:text-slate-400 block bg-white px-20 shadow-sm border-none sm:text-sm" 
                  placeholder="Search ..." 
                  type="text" 
                  name="search"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-white dark:bg-black p-8 rounded-lg shadow-lg flex flex-col justify-center items-center border-spacing-8">
        <h2 className="text-7xl font-extralight text-black dark:text-white mb-16">Types of Food</h2>
        <div className="grid grid-cols-3 gap-20 w-3/4">
          {filteredFoodTypes.map(foodType => (
            <Link to={`/type/${foodType.id}`} key={foodType.id} className="flex flex-col items-center">
              <img src={foodType.image} alt={foodType.name} className="w-3/4 h-3/4" />
              <p className="text-black dark:text-white">{foodType.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
