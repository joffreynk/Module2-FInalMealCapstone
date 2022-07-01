import getFood from './getFood.js';
import counter from './counter.js';
import { addLike, homePage, fetchComments } from './fetchData.js';
import { loadPopUpComment,  closepopup } from './comments.js';

const getOject = (arr) => {
  const ob = {};
  arr.forEach((v) => {
    ob[Number(v.item_id)] = v.likes;
  });
  return ob;
};

const popUpComment = () => {
  const comments = document.querySelectorAll('.comments');
  comments.forEach((comment) => {
    comment.addEventListener('click', (e) => {
      const id = e.target.id.slice(7);
      fetchComments(id).then((data) => {
        loadPopUpComment(data);
      });
    });
  });
  closepopup();
};

const listFood = () => {
  homePage().then(({ foodlist, likesArr }) => {
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
        newLi.innerHTML = getFood(food, likes);
      } else {
        newLi.innerHTML = getFood(food);
      }
      list.appendChild(newLi);
    });
    addLikes();
    popUpComment();
  });
};

const addLikes = () => {
  const likes = document.querySelectorAll('.like');
  likes.forEach((like) => {
    like.addEventListener('click', (e) => {
      const id = e.target.id.slice(4);
      addLike({ item_id: id });
      listFood();
    });
  });
};


export default listFood;
