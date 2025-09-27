import { Request, Response } from "express";
import { BookModel } from "../models/Book";

export const getOneBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await BookModel.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
