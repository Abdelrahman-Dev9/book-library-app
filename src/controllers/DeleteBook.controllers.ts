import { Request, Response } from "express";
import { BookModel } from "../models/Book";

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await BookModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
