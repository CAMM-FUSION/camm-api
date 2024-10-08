import { Schema, Types, model } from "mongoose";

const reviewSchema = new Schema({
    rating: {type: Number, required: true},
    comment: {type: String},
    book: {type: Types.ObjectId, ref: "Book"},
});

const Review = model('Review', reviewSchema);

export default Review;