import getFood from './getFood.js';
import { addLikes, popUpComment } from './addLikes.js';
import counter from './counter.js';
import { homePage } from './fetchData.js'

const getOject = (arr) => {
  const ob = {};
  arr.forEach((v) => {
    ob[Number(v.item_id)] = v.likes;
  });
  return ob;
};

const listFood = () => {
  homePage().then(({foodlist, likesArr}) => {
    const list = document.getElementById('food-list');
    list.innerHTML = '';
    const objectkey = getOject(likesArr);
    document.getElementById('foodCounter').innerHTML = `(${counter(foodlist)})`;
    foodlist.forEach((food) => {
      const foodId = Number(food.idCategory);
      const newLi = document.createElement('li');
      newLi.setAttribute('id', `food${food.idCategory}`);
      const likes = objectkey[foodId];
      if (foodId in objectkey) {
        newLi.innerHTML = getFood(food, likes)
      }else {
        newLi.innerHTML = getFood(food);
      }
      list.appendChild(newLi);
    });
    addLikes();
    popUpComment();
  })
};
export default listFood;
