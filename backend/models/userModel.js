import mongoose, { Model } from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }

}, { minimize: false }) // by minimise = false it will create new cartData using empty object.

const userModel = mongoose.models.name || mongoose.model("user",userSchema);

export default userModel;