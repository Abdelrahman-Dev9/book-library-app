import { Router } from "express";
import { createBook } from "../controllers/CreateBook.controllers";
import { getAllBooks } from "../controllers/GetAllBooks.controllers.";
import { getOneBook } from "../controllers/CreateBookById.controllers";
import { deleteBook } from "../controllers/DeleteBook.controllers";

const router = Router();

router.post("/createBook", createBook);
router.get("/getAllBooks", getAllBooks);
router.get("/getOneBook/:id", getOneBook);
router.delete("/deleteBook/:id", deleteBook);

export default router;
