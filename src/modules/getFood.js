/* eslint-disable */
const getFood = ({ idCategory, strCategoryThumb, strCategory }, likes = 0) =>{
  return `
  <img src='${strCategoryThumb}' alt='${strCategory}'/>
  <div class="description">
    <h4>${strCategory}</h4>
      <div class="likes">
        <button id='like${idCategory}'class="like like${idCategory}">&#128154;</button>
        <p class="n-likes">${likes < 2 ? likes + ' like' : likes + ' likes'}</p>
      </div>
  </div>
  <button class="comments" id='comment${idCategory}'>Comments</button>
  <button class="reservations" id='reservation${idCategory}'>Reservations</button>
  `;
};

export default getFood;
