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

const addComments = () => {
  const bttns = document.querySelectorAll('.add-comment');
  bttns.forEach((btn) => {
    btn.addEventListener(('click'), (e) => {
      const username = document.getElementById('username');
      const comment = document.getElementById('comment');
      const id = Number(e.target.id.slice(10))
      if (username.value.length > 1 && comment.value.length > 4 ) {
        addComment({ item_id:id, username: username.value, comment: comment.value})
        username.value = '';
        comment.value = '';
        return
      }

        let span;
      if(document.querySelector('.formcomment #errorComment')) {
        span = document.querySelector('.formcomment #errorComment');
      } else {
        span = document.createElement('span');
        span.setAttribute('id', 'errorComment');
      }
      span.innerHTML = ''
      if (username.value.length < 2) {
        span.innerHTML = 'user name  cannot be empty'
        document.querySelector('.formcomment').appendChild(span)
      }

      if (comment.value.length <= 4) {
        span.innerHTML = 'comment cannot be empty'
        document.querySelector('.formcomment').appendChild(span)
      }

    })
  })
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
  <form class='formcomment'>
  <input type='text' name='username' id='username' placeholder= 'Your Name' /> <br/>
  <textarea placeholder='your insights' name='comment' id='comment'></textarea><br/>
  <button type='button' id='addcomment${food.idCategory}' class='add-comment' >Comment</button>
  </form>
  `;
  ul.appendChild(li)
  addComments();
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