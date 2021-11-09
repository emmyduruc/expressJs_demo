import { PostDocument } from "../model/postModel";
import Post from "../model/postModel";
import { NotFoundError } from "../helpers/errorHelpers";
import Users from "../model/userModel";

const createPost = async (postDocument: PostDocument) => {
  const createdPost = await postDocument.save();
  return createdPost;
};

const updatePost = async (postId: string, updatePost: PostDocument) => {
  const foundPost = await Post.findByIdAndUpdate(postId, updatePost, {
    new: true,
  });
  if (!foundPost) {
    throw new NotFoundError(`User ${postId} not found`);
  }
  return foundPost;
};

//GET
const findAllPost = async (): Promise<PostDocument[]> => {
  return Post.find();
};

//DELETE
const deleteById = async (postId: string): Promise<PostDocument> => {
  const foundPost = await Post.findById(postId);

  if (!foundPost) {
    throw new NotFoundError(`User ${postId} not found`);
  }

  return foundPost;
};

//you can control this on the frontend
const likePost = async (
  postId: string,
  update: Partial<PostDocument>
): Promise<PostDocument | null> => {
  const foundPost = await Post.findByIdAndUpdate(
    postId,
    { $push: { likes: update } },
    {
      new: true,
    }
  );
  if (foundPost) {
    console.log("your post has been liked");
  } else {
    throw new NotFoundError(`Liked post ${postId} not found`);
  }

  return foundPost;
};

//GET a post byId
const findPostById = async (postId: string): Promise<PostDocument> => {
  const foundPost = await Post.findById(postId);

  if (!foundPost) {
    throw new NotFoundError(`Post ${postId} not found`);
  }

  return foundPost;
};

//timeline post, nested async fetch function
const timelinePost = async (
  currentUserId: string,
  updateUserPost: string
): Promise<PostDocument> => {
  const currentUser = await Users.findById(currentUserId);
  const userPost = await Post.findByIdAndUpdate(currentUser, { userId: updateUserPost });

  if (!userPost) {
    throw new NotFoundError(`User ${userPost} not found`);
  }

  return userPost;
};

export default {
  createPost,
  updatePost,
  timelinePost,
  findAllPost,
  likePost,
  findPostById,
  deleteById,
};
