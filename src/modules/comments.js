import { addComment, fetchComments } from './fetchData.js';
import counter from './counter.js';


const listComments = (comments) => {
  let div = '';
  comments.forEach((comment) => {
    div += `<p class='popup-single-comment' > ${comment.creation_date} ${comment.username}:  ${comment.comment.slice(0, 201)}</p>`;
  });
  return div;
};

const closepopup = () => {
  const close = document.querySelector('.close-button');
  close.addEventListener('click', () => {
    document
      .querySelector('#pop')
      .removeChild(document.querySelector('#pop li'));
    document.getElementById('pop').style.display = 'none';
  });
};

const addComments = () => {
  const bttns = document.querySelectorAll('.add-comment');
  bttns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const username = document.getElementById('username');
      const comment = document.getElementById('comment');
      const id = Number(e.target.id.slice(10));
      if (username.value.length > 1 && comment.value.length > 4) {
        addComment({
          item_id: id,
          username: username.value,
          comment: comment.value,
        });
        username.value = '';
        comment.value = '';
        fetchComments(id).then((data) => {
          loadPopUpComment(data);
        });
        return;
      }
      let span;
      if (document.querySelector('.formcomment #errorComment')) {
        span = document.querySelector('.formcomment #errorComment');
      } else {
        span = document.createElement('span');
        span.setAttribute('id', 'errorComment');
      }
      span.innerHTML = '';
      if (username.value.length < 2) {
        span.innerHTML = 'user name  cannot be empty';
        document.querySelector('.formcomment').appendChild(span);
      }

      if (comment.value.length <= 4) {
        span.innerHTML = 'comment cannot be empty';
        document.querySelector('.formcomment').appendChild(span);
      }
    });
  });
};

const loadPopUpComment = ({ commentData, food }) => {
  const ul = document.getElementById('pop');
  ul.innerHTML = '';
  const li = document.createElement('li');
  li.innerHTML = `
  <span class='close-button'> &#10006; </span>
  <div class='comment-pop-image'> <img src='${food.strCategoryThumb}' alt='${food.strCategory}'/> 
  <h4>${food.strCategory} </h4>
  <p class='foodDes'>${food.strCategoryDescription} </p>
  <p class='comments-title'>${commentData.length > 1 ? `comments ( ${counter(commentData)} )` : `comment ( ${counter(commentData)} )`
  } </p>
  <div class='popup-comments'>${listComments(commentData)}</div>
  <h5 class='add-h5'>add a comment</h5>
  <form class='formcomment'>
  <input type='text' name='username' id='username' placeholder= 'Your Name' /> <br/>
  <textarea placeholder='your insights' rows='4' name='comment' id='comment'></textarea><br/>
  <button type='button' id='addcomment${
    food.idCategory
  }' class='add-comment' >Comment</button>
  </form>`;
  document.getElementById('pop').style.display = 'block';
  ul.appendChild(li);
  addComments();
  closepopup();
};



export default loadPopUpComment;
