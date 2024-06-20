import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ToggleSwitchButton from './ToggleSwitchButton';
import ToggleDarkModeButton from './ToggleDarkModeButton';
import { useTranslation } from 'react-i18next';
import { fetchMealById } from '../api/mealApi';

const FoodDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMeal = async () => {
      try {
        const data = await fetchMealById(id);
        setMeal(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching meal:', error);
        setLoading(false);
      }
    };

    getMeal();
  }, [id]);

  if (loading) {
    return <p>{t('loading')}</p>;
  }

  if (!meal) {
    return <p>{t('meal_not_found')}</p>;
  }

  return (
    <div className="flex flex-col items-center bg-white dark:bg-black min-h-screen p-4">
      <div className="absolute top-4 right-4 flex space-x-2">
        <ToggleDarkModeButton />
        <ToggleSwitchButton />
      </div>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-1/4 h-1/4 border-4 border-black rounded-full" />
      <h2 className="text-5xl text-yellow-500 font-mono dark:text-white mt-4">{meal.strMeal}</h2>
      <p className="text-lg text-red-900 w-3/4 font-black bg-red-50 dark:text-white mt-2">{meal.strInstructions}</p>
    </div>
  );
};

export default FoodDetails;
