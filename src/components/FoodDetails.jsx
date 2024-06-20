import React from 'react';
import { useParams } from 'react-router-dom';
import img1 from '../assets/images/breakfast.png';
import img2 from '../assets/images/cake.png';
import img3 from '../assets/images/drink.png';
import img4 from '../assets/images/sandwich_bread_bikini_snack_food_icon_208027.png';
import img5 from '../assets/images/main-dish.png';
import img6 from '../assets/images/salad.png';

const FoodDetails = () => {
  const { id } = useParams();
  const foodTypes = [
    { id: 1, name: 'Breakfast', image: img1, description: 'A delicious breakfast dish.' },
    { id: 2, name: 'Cake', image: img2, description: 'A variety of cakes to enjoy.' },
    { id: 3, name: 'Drink', image: img3, description: 'Refreshing drinks for any occasion.' },
    { id: 4, name: 'Sandwich', image: img4, description: 'Tasty sandwiches with various fillings.' },
    { id: 5, name: 'Main Dish', image: img5, description: 'Hearty main dishes to satisfy your hunger.' },
    { id: 6, name: 'Salad', image: img6, description: 'Healthy and fresh salads.' },
  ];
  const foodItem = foodTypes.find(item => item.id === parseInt(id));

  if (!foodItem) {
    return <p>Food type not found.</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <img src={foodItem.image} alt={foodItem.name} className="w-1/4 h-1/4" />
      <h2 className="text-4xl text-black dark:text-white mt-4">{foodItem.name}</h2>
      <p className="text-lg text-black dark:text-white mt-2">{foodItem.description}</p>
    </div>
  );
};

export default FoodDetails;
