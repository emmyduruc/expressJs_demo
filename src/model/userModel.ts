import mongoose, { Document } from 'mongoose'


export type UserDocument = Document & {
       _Id: string //do not specify it
       username: string 
       firstName: string
       lastName: string
       country: string
       state: string
       houseNumber: string
       phoneNumber?: string
       postcode?: string
       address: string
       email: string
       sex: string
       isAdmin: boolean
       password: string
       picture: string
       product: string[]
       cart: string[]
       role: string
       profilePic: string
       followings: string[]
       followers: string[]
       coverPic: string
     }

     const UserSchema = new mongoose.Schema(
       {
         username: {
           type: String,
           require: true,
           unique: true,
         },
         email: {
           type: String,
           required: true,
           max: 40,
           unique: true,
         },
         password: {
           type: String,
           min: 7,
           max: 15,
           unique: true,
         },
         profilePic: {
           type: String,
           default: "",
         },
         coverPic: {
           type: String,
           default: "",
         },
         followers: {
           type: Array,
           default: [],
         },
         followings: {
           type: Array,
           default: [],
         },
         isAdmin: {
           type: Boolean,
           default: false,
         },
       },
       { timestamps: true }
     );
     
    export default mongoose.model<UserDocument>("Users", UserSchema);
     