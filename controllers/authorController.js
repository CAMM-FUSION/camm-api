// import { required, string } from "joi";
// import { Schema, model } from "mongoose";

// const authorschema =new Schema({
   // name: {type: string, required: true},
    // bio: {type: string, required: true},
// });

// export const AuthorModel = model()

// 

// 
// const mongoose = import('mongoose');

//const authorSchema = new mongoose.Schema({
   // name: {
    //    type: String,
     //   required: true
    // },
   // birthDate: {
      //  type: Date,
      //  required: true
   // },
  //  bio: {
       // type: String
   // }
// });

// const Author = mongoose.model('Author', authorSchema);
// exports = Author;

import { Author } from '../models/authorModel.js';
// import { object, string, date } from 'joi';

// // Joi validation schema for authors
// const authorValidationSchema = object({
//     name: string().required(),
//     // birthDate: date().required(),
//     bio: string().optional()
// });

// Create a new author
export async function createAuthor(req, res) {
    // const { error } = authorValidationSchema.validate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

    try {
        let author = new Author(req.body);
        author = await author.save();
        res.status(201).send(author);
    } catch (err) {
        res.status(500).send('Error creating author: ' + err.message);
    }
}

// Get all authors
export async function getAuthors(req, res) {
    try {
        const authors = await Author.find().populate('books');
        res.status(200).send(authors);
    } catch (err) {
        res.status(500).send('Error fetching authors: ' + err.message);
    }
}

// Get an author by ID
export async function getAuthorById(req, res) {
    try {
        const author = await Author.findById(req.params.id);
        if (!author) return res.status(404).send('Author not found');
        res.status(200).send(author);
    } catch (err) {
        res.status(500).send('Error fetching author: ' + err.message);
    }
}

// Update an author
export async function updateAuthor(req, res) {
    // const { error } =      authorValidationSchema.validate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!author) return res.status(404).send('Author not found');
        res.status(200).send(author);
    } catch (err) {
        res.status(500).send('Error updating author: ' + err.message);
    }
}

// Delete an author
export async function deleteAuthor(req, res) {
    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        if (!author) return res.status(404).send('Author not found');
        res.status(200).send({ message: 'Author deleted successfully' });
    } catch (err) {
        res.status(500).send('Error deleting author: ' + err.message);
    }
}
