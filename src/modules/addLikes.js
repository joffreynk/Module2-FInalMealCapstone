import {homePage, addLike, addComment, addReservation, fetchComments} from './fetchData.js';

const addLikes = () => {
  const likes = document.querySelectorAll('.like');
  likes.forEach(like=>{
    like.addEventListener('click', (e)=>{
      const id = e.target.id.slice(4);
      addLike({ item_id: id });
    });
  });
};

const popUpComment = () => {
  const comments = document.querySelectorAll('.comments');
  comments.forEach((comment) => {
    comment.addEventListener('click', (e) =>{
      const id = e.target.id.slice(7);
      fetchComments(id);
    });
  });
};

export { addLikes, popUpComment};