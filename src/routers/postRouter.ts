import express from "express";

import {
       createPost,
       updatePost,
       findAllPost,
       deletePost,
       findPostById,
       likePost,
       timelinePost,
     } from "../controllers/postController";
     
     const router = express.Router();
     
     // Every path we define here will get /api/v1/movies prefix
     
     router.post("/", createPost);
     router.get("/", findAllPost);
     router.get("/timeline", timelinePost);
     router.get("/:postId", findPostById);
     router.put("/:postId", updatePost);
     router.delete("/:postId", deletePost);
     router.put("/:postId/likes", likePost);
     export default router;