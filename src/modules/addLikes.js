import {homePage, addLike, addComment, addReservation, fetchComments} from './fetchData.js'

const addLikes = () => {
  const likes = document.querySelectorAll('.like');
  likes.forEach(like=>{
    like.addEventListener('click', (e)=>{
      const id = e.target.id.slice(4);
      addLike({ item_id: id })
    })
  })
}

const listComments = (comments) => {
  let div = '';
  comments.forEach((comment) => {
    div += `<p class='popup-single-comment' > ${comment.creation_date} ${comment.username}:  ${comment.comment}</p>`;
  });
  return div;
}

const loadPopUpComment = ({ commentData, food}) => {
  const ul = document.getElementById('pop');
  ul.innerHTML = '';
  const li = document.createElement('li');
  li.innerHTML = `
  <div class='comment-pop-image'> <img src='${food.strCategoryThumb}' alt='${food.strCategory}' /> <span> &#10006; </span>
  <h4>${food.strCategory} </h4>
  <p>${food.strCategoryDescription} </p>
  <p>${commentData.length>1?'comments ('+commentData.length+')':'comment ('+commentData.length+')'} </p>
  <div class='popup-comments'>${listComments(commentData)}</div>
  <h5>add a comment</h5>
  <form>
  <input type='text' name='username' id='username' placeholder= 'Your Name' /> <br/>
  <textarea placeholder='your insights' name='comment' id='comment'></textarea><br/>
  <button type='submit' >Comment</button>
  </form>
  `;
  ul.appendChild(li)
}

const popUpComment = () => {
  const comments = document.querySelectorAll('.comments');
  comments.forEach((comment) => {
    comment.addEventListener('click', (e) =>{
      const id = e.target.id.slice(7);
      fetchComments(id).then(data=>{
        loadPopUpComment(data)
      });
    })
  });
}

export { addLikes, popUpComment};