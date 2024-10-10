import { Schema, Types, model } from "mongoose";

const reviewSchema = new Schema({
    rating: {type: Number, required: true},
    comment: {type: String},
    book: {type: String, ref: "Book"},
});

const Review = model('Review', reviewSchema);

export default Review;