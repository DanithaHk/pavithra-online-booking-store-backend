import { Router } from "express";
import {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
} from "../controllers/books.controller";
import { authMiddleware, authorizeRole } from "../middleware/auth.middleware";

const bookRouter: Router = Router();


bookRouter.get("/all", getAllBooks);
bookRouter.get("/:id", getBookById);


bookRouter.post("/save", authMiddleware, authorizeRole("admin"), createBook);
bookRouter.put("/update/:id", authMiddleware, authorizeRole("admin"), updateBook);
bookRouter.delete("/delete/:id", authMiddleware, authorizeRole("admin"), deleteBook);

export default bookRouter;
