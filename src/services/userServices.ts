import { UserDocument } from "../model/userModel";
import Users from "../model/userModel";
import { NotFoundError } from "../helpers/errorHelpers";

//POST
const createUser = async (userDocument: UserDocument) => {
  const createdUser = await userDocument.save();
  return createdUser;
};
const loginByEmail = async ({ email, password }: UserDocument) => {
  const foundUser = await Users.findOne({ email }, { password });
  // const userPassword = await Users.findOne();

  if (!foundUser) {
    throw new NotFoundError(`User ${email} or ${password} not found`);
  } else {
    console.log("please create an account");
  }
  return foundUser;
};

//PUT to update
const updateUser = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> => {
  const foundUser = await Users.findByIdAndUpdate(userId, update, {
    new: true,
  });

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`);
  }

  return foundUser;
};

//for Admin
const adminCheck = async ({ role }: UserDocument) => {
  const adminRole = await Users.findOne({ role });

  if (!adminRole) {
    throw new NotFoundError(`User is not an admin`);
  }
};

//GET
const findAllUser = async (): Promise<UserDocument[]> => {
  return Users.find();
};

//GET a user byId
const findUserById = async (userId: string): Promise<UserDocument> => {
  const foundUser = await Users.findById(userId);

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`);
  }

  return foundUser;
};

const deleteById = async (userId: string): Promise<UserDocument> => {
  const foundUser = await Users.findById(userId);

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`);
  }

  return foundUser;
};

export default {
  createUser,
  loginByEmail,
  updateUser,
  deleteById,
  adminCheck,
  findUserById,
  findAllUser,
};
