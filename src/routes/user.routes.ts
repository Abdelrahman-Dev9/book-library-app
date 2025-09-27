import { Router } from "express";
import { createBook } from "../controllers/CreateBook.controllers";

const router = Router();

router.post("/createBook", createBook);

export default router;
