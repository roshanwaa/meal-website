import express from 'express';
import axios from 'axios';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/getRandomMeal', async (req, res) => {
  try {
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    const meal = response.data.meals[0];
    res.json(meal);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
