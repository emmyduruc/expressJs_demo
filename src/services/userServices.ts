import { UserDocument } from "../model/userModel";
import Users from "../model/userModel";
import { NotFoundError } from "../helpers/errorHelpers";

//POST
const createUser = async (userDocument: UserDocument) => {
  const createdUser = await userDocument.save();
  return createdUser;
};




const findUserByEmail = async (email: string) => {
       const foundUser = await Users.findOne({email})
     
       if (!foundUser) {
         throw new NotFoundError(`User ${email} not found`)
       }
     
      
     }
// const userLogin = async (userId: string): Promise<UserDocument> => {
//   const existingUser = await Users.findOne(userId);

//   if (!existingUser) {
//     throw new NotFoundError(`User ${email} not found`);
//   }
//   return existingUser;
// };
export default {
       createUser,
       findUserByEmail,
     };