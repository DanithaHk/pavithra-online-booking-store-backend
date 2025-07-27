import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String },
    price: { type: Number, required: true },
    imageUrl: { type: String },
    category: { type: String },
    stock: { type: Number, default: 0 },
    description: { type: String }
});

export const Book = mongoose.model("Book", bookSchema);
