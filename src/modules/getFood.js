const getFood = ({ idCategory, strCategoryThumb, strCategory }, likes = 0) => {
  return `
  <img src='${strCategoryThumb}' alt='${strCategory}'/>
  <div class="description">
    <h4>${strCategory}</h4>
      <div class="likes">
        <p class="like">&#128154;</p>
        <p class="n-likes">${likes<2?likes+' like':likes+' likes'}</p>
      </div>
  </div>
  <button class="comments">Comments</button>
  <button class="reservations">Reservations</button>
  `;
};

export default getFood;