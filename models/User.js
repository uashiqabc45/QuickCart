import mongoose, { mongo } from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
    _id:{ type: string, required:true },
    name: { type: string, required:true },
    email: { type: string, required:true, unique:true },
    imgURL: { type: string, required:true },
    cartItems: { type: Object, default: {} },
}, { minimize: false })


const User = mongoose.models.user || mongoose.model('user',userSchema)


export default User