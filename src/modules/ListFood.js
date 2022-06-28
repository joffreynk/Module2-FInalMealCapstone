import getFood from './getFood.js'

const listFood = (baseList, involvementValue) => {
  const list = document.getElementById('food-list');
  list.innerHTML = '';
  baseList.forEach(food => {
    const newLi = document.createElement('li');
    newLi.setAttribute('id', `food${food.idCategory}`)
    newLi.innerHTML = getFood(food);
   // involvementValue[food.idCategory].likes?newLi = getFood(food, involvementValue[food.idCategory].likes):newLi = getFood(food);
    list.appendChild(newLi);
  });
}

export default listFood