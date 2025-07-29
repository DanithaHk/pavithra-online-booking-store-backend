import express from "express";


import {deleteBook, updateBook ,getAllBooks,createBook} from "../controllers/books.controller";

const router = express.Router();


router.get("/", getAllBooks);

router.post("/add", createBook);

router.put("/update/:name",updateBook);

router.delete("/delete/:name", deleteBook);

export default router;
