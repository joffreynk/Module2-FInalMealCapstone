import listFood from './ListFood.js'

const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const homePage = async () => {
  const result = await fetch(url);
  const res = await result.json();
  let data = res.categories;
  listFood(data, {})
}

export {homePage}