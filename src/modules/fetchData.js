const url = 'https://www.themealdb.com/api/json/v1/1/categories.php/';

const involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4UvdTn5NAXeyK3iSlBaQ/';

const homePage = async () => {
  const foodResponse = await fetch(url);
  const foodData = await foodResponse.json();

  const likesREsponse = await fetch(`${involvementURL}likes/`);
  const likesData = await likesREsponse.json();

  const likesArr = JSON.parse(JSON.stringify(likesData));
  const foodlist = JSON.parse(JSON.stringify(foodData.categories));
  return { foodlist, likesArr };
};

const fetchComments = async (id) => {
  const foodResponse = await fetch(url);
  const foodData = await foodResponse.json();
  const food = foodData.categories.filter((f) => Number(f.idCategory) === Number(id))[0];
  let commentData = [];
  const commentResponse = await fetch(`${involvementURL}comments?item_id=${id}`);
  if (commentResponse.ok) commentData = await commentResponse.json();
  return { commentData, food };
};

const addLike = async (like) => {
  const optionsData = {
    method: 'POST',
    body: JSON.stringify(like),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  };
  const results = await fetch(`${involvementURL}likes/`, optionsData);
  const data = await results.text();
  return data;
};

const addComment = async (comment) => {
  const optionsData = {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  };
  const results = await fetch(`${involvementURL}comments/`, optionsData);
  const data = await results.text();
  return data;
};

export {
  homePage,
  addLike,
  addComment,
  fetchComments,
};
