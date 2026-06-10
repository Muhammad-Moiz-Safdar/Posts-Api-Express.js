let posts = [
  {
    id: 1,
    title: "post one",
  },
  {
    id: 2,
    title: "post two",
  },
  {
    id: 3,
    title: "post three",
  },
];


// Get All Posts

export const getPost = (req, res,next) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
   return res.status(200).json(posts.slice(0, limit));
  } 
    res.status(200).json(posts);
  
}

//Get Post by ID

export const getPostByID =  (req, res,next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post)=>post.id===id)

  if (!post){
    const error = new Error('Not Found')
        error.status = 404
       return next(error)
  }
  else{
    res.status(200).json(post)
  }
  }

  //Post new Posts

  export const addNewPost = (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    return res.status(400).json("Please enter title");
  }
  posts.push(newPost);
  res.status(201).json(posts);
}

//update post by ID

export const update = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error("Not Found");
    error.status = 404;
    return next(error);
  }
  post.title = req.body.title;
  res.status(200).json(posts);
}

//delete post by ID

export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error("Not Found");
    error.status = 404;
    return next(error);
  }
  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
}