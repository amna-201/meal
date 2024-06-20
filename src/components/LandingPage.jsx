import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ToggleSwitchButton from './ToggleSwitchButton';
import ToggleDarkModeButton from './ToggleDarkModeButton';
import search from '../assets/images/search.png';
import logo from '../assets/images/dinner.png';
import { useTranslation } from 'react-i18next';
import { fetchMealsByName, fetchMealCategories } from '../api/mealApi';

const LandingPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchMealCategories();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching meal categories:', error);
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await fetchMealsByName(searchTerm);
      setMeals(data || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching meals:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-black min-h-screen">
      <div className='flex w-full'>
        <div className='w-1/4 h-screen flex justify-center items-center'>
          <img src={logo} alt="Logo" className='w-1/2 h-1/4'/>
        </div>
        <div className='bg-yellow-400 w-3/4 rounded-full rounded-tr-none rounded-bl-none'>
          <div className='bg-yellow-400 w-full flex flex-col justify-center items-center h-screen rounded-tl-full ps-12 rounded-full relative'>
            <div className="absolute top-4 right-4 flex space-x-2">
              <ToggleDarkModeButton />
              <ToggleSwitchButton />
            </div>
            <div className="flex flex-col items-center mb-10 justify-center">
              <h1 className="text-8xl text-center w-3/4 font-mono mb-4 text-black dark:text-white">{t('title')}</h1>
              <form onSubmit={handleSearch} className='flex bg-white w-1/2 h-1/3 rounded-full border border-cyan-50'>
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
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full mt-36 bg-white dark:bg-black p-8 rounded-lg shadow-lg flex flex-col justify-center items-center border-spacing-8">
        <h2 className="text-7xl font-serif text-red-800 shadow-rose-300  dark:text-white mb-16">Types of Food</h2>
        <div className=" grid grid-cols-4  justify-center items-center w-4/4">
          {meals.length > 0 ? meals.map(meal => (
            <Link to={`/type/${meal.idMeal}`} key={meal.idMeal} className="flex flex-col items-center">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-3/4 h-3/4 border-4 border-black rounded-3xl" />
              <p className="text-red-950 font-mono text-5xl dark:text-white">{meal.strMeal}</p>
            </Link>
          )) : categories.map(category => (
            <div key={category.idCategory} className="flex flex-col items-center">
              <img src={category.strCategoryThumb} alt={category.strCategory} className="w-3/4 h-3/4 border-4 border-black rounded-3xl" />
              <p className="text-red-950 font-mono text-5xl dark:text-white">{category.strCategory}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
