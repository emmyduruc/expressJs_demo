import { UserDocument } from "../model/userModel";
import Users from "../model/userModel";
import { NotFoundError } from "../helpers/errorHelpers";

//POST
const createUser = async (userDocument: UserDocument) => {
  const createdUser = await userDocument.save();
  return createdUser;
};
const loginByEmail = async ({ email, password }: UserDocument) => {
  const foundUser = await Users.findOne({ email });
  const userPassword = await Users.findOne({ password });

  if (foundUser !== userPassword) {
    throw new NotFoundError(`User ${email} or ${password} not found`);
  } else {
    console.log("please create an account");
  }
  return foundUser;
};

export default {
  createUser,
  loginByEmail,
};

// const loginByEmail = async ({ email }: UserDocument) => {
//        const foundUser = await Users.findOne({ email });

//        if (!foundUser) {
//          throw new NotFoundError(`User ${email} not found`);
//        }
//        return foundUser;
//      };
