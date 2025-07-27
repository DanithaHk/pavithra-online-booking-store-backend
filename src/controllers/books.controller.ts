import { Request, Response } from "express";
import * as bookService from "../service/book.service";

export const createBook  = async (req: Request, res: Response) => {
    try {
        const book = await bookService.createBook(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const getAllBooks  = async (_req: Request, res: Response) => {
    const books = await bookService.getAllBooks();
    res.json(books);
};

export const getBookById  = async (req: Request, res: Response) => {
    try {
        const book = await bookService.getBookById(req.params.id);
        res.json(book);
    } catch (error) {
        res.status(404).json({ message: (error as Error).message });
    }
};

export const updateBook  = async (req: Request, res: Response) => {
    try {
        const updated = await bookService.updateBook(req.params.id, req.body);
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const deleteBook  = async (req: Request, res: Response) => {
    try {
        await bookService.deleteBook(req.params.id);
        res.json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};
