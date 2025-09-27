import { Router } from "express";
import { createBook } from "../controllers/CreateBook.controllers";
import { getAllBooks } from "../controllers/GetAllBookscontrollers.";

const router = Router();

router.post("/createBook", createBook);
router.get("/getAllBooks", getAllBooks);

export default router;
