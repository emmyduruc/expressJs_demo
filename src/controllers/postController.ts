import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotFoundError } from "../helpers/errorHelpers";
import userModel, { PostDocument } from "../model/postModel";
import postService from "../services/postService";

//create a post from POST
export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, img, likes, desc } = req.body;
    const post = new userModel({
      userId,
      img,
      likes,
      desc,
    });
    const createdPost = await postService.createPost(post);
    res.json(createdPost);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

//update a post
//PUT
export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatePost = req.body;
    const postId = req.params.userId;
    const updatedPost = await postService.updatePost(postId, updatePost);
    res.json(updatedPost);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

//get a post
// GET /post (gets all existing users)
export const findAllPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await postService.findAllPost());
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
//delete a post from
export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await postService.deleteById(req.params.userId);
    res.status(204).end();
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

//like a post
export const likePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body.userId;
    const postId = req.params.postId;

    const likedPost = await postService.likePost(postId, update);
    res.json(likedPost);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

//GET a post by Id
export const findPostById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    

    const postId = req.params.postId;
    res.json(await postService.findPostById(postId));
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
//get timeline  post
export const timelinePost = async (
       req: Request,
       res: Response,
       next: NextFunction
     ) => {
       try {
              const updateUserPost = req.body.userId._id;
              const currentUserId = req.body.userId
         res.json(await postService.timelinePost(currentUserId,updateUserPost));
       } catch (error) {
         if (error instanceof Error && error.name == "ValidationError") {
           next(new BadRequestError("Invalid Request", error));
         } else {
           next(error);
         }
       }
     };
