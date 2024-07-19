document.addEventListener('DOMContentLoaded', () => {
  const mealImage = document.getElementById('meal-image');
  const mealName = document.getElementById('meal-name');
  const mealCategory = document.getElementById('meal-category');
  const mealInstructions = document.getElementById('meal-instructions');
  const loadingSpinner = document.getElementById('loading-spinner');
  const loadMealButton = document.getElementById('load-meal');

  async function fetchRandomMeal() {
    try {
      // Show loading spinner and hide the card
      loadingSpinner.style.display = 'block';
      mealImage.style.display = 'none';
      mealName.textContent = '';
      mealCategory.textContent = '';
      mealInstructions.textContent = '';

      const response = await axios.get('/getRandomMeal');
      const meal = response.data;

      // Hide the loading spinner and show the card
      loadingSpinner.style.display = 'none';
      mealImage.style.display = 'block';

      // Update the card with meal details
      mealImage.src = meal.strMealThumb;
      mealImage.alt = meal.strMeal;
      mealName.textContent = meal.strMeal;
      mealCategory.textContent = `Category: ${meal.strCategory}`;
      mealInstructions.textContent = `Instructions: ${meal.strInstructions}`;
    } catch (error) {
      console.error(error);
      loadingSpinner.style.display = 'none';
      mealImage.style.display = 'none';
      mealName.textContent = 'An error occurred while fetching meal data.';
    }
  }

  loadMealButton.addEventListener('click', fetchRandomMeal);

  // Load a meal when the page loads
  fetchRandomMeal();
});
