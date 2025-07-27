import { Book } from "../model/book.model";
import { BookDto } from "../dto/book.dto";

export const createBook = async (data: BookDto) => {
    const book = await Book.create(data);
    return book;
};

export const getAllBooks = async () => {
    return await Book.find();
};

export const getBookById = async (id: string) => {
    const book = await Book.findById(id);
    if (!book) throw new Error("Book not found");
    return book;
};

export const updateBook = async (id: string, data: BookDto) => {
    const updated = await Book.findByIdAndUpdate(id, data, { new: true });
    if (!updated) throw new Error("Book not found or update failed");
    return updated;
};

export const deleteBook = async (id: string) => {
    const deleted = await Book.findByIdAndDelete(id);
    if (!deleted) throw new Error("Book not found or delete failed");
    return deleted;
};
