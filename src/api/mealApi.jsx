const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchMealsByName = async (name) => {
  try {
    const response = await fetch(`${BASE_URL}/search.php?s=${name}`);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error('Error fetching meals by name:', error);
    throw error;
  }
};

export const fetchMealCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories.php`);
    const data = await response.json();
    return data.categories;
  } catch (error) {
    console.error('Error fetching meal categories:', error);
    throw error;
  }
};

export const fetchMealById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals[0];
  } catch (error) {
    console.error('Error fetching meal by ID:', error);
    throw error;
  }
};
