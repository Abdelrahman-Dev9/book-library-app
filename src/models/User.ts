import mongoose, { Document } from "mongoose";

interface IUser extends Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserModel = mongoose.model<IUser>("User", userSchema);
