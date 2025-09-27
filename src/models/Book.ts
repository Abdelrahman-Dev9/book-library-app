import mongoose, { Document, model } from "mongoose";

interface IBook extends Document {
  title: string;
  description: string;
  price: number;
}

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    title: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
export const BookModel = model<IBook>("Note", BookSchema);
