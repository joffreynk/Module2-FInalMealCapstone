import getFood from './getFood.js'
import { addLikes, popUpComment} from './addLikes';

const getOject = (arr) => {
  const ob = {};
  arr.forEach(v=>{
    ob[Number(v.item_id)] = v.likes;
  });
  return ob;
};

const listFood = (baseList, involvementValue) => {
  const list = document.getElementById('food-list');
  list.innerHTML = '';
  const objectkey = getOject(involvementValue);
  baseList.forEach(food => {
    const foodId = Number(food.idCategory);
    const newLi = document.createElement('li');
    newLi.setAttribute('id', `food${food.idCategory}`);
    const likes = objectkey[foodId];
    foodId in objectkey?newLi.innerHTML = getFood(food, likes):newLi.innerHTML = getFood(food);
    list.appendChild(newLi);
  });
  addLikes();
  popUpComment();
}

export default listFood;