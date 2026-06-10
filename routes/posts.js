import express from "express";
import {getPost, getPostByID, addNewPost, update,deletePost} from '../controllers/postController.js'
const router = express.Router();


//get all posts
router.get("/",getPost);

//get single post by id
router.get("/:id",getPostByID);


//post New Posts
router.post("/",addNewPost );


//update post by ID
router.put("/:id",update );

//delete post by ID
router.delete("/:id", deletePost);

export default router;
