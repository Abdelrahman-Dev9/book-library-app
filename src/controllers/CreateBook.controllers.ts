import { Request, Response } from "express";
import { BookModel } from "../models/Book";

export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, description, price } = req.body;
    const book = new BookModel({ title, description, price });
    await book.save();
    res.status(201).json({ message: "Book created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
