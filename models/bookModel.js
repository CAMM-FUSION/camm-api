export const books = [];
import {Schema, model} from 'mongoose';

const bookSchema = new Schema({
    title: {
        type: String
    },

    author: {
        type: String
    },

    year: {
        type: Number
    }
})