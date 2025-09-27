import { Request, Response } from "express";
import { BookModel } from "../models/Book";

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await BookModel.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
