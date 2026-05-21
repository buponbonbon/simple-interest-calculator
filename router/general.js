const express = require('express');
let books = require("./booksdb.js");
const axios = require('axios');
const public_users = express.Router();

/**
 * Route: Get all books
 * Input: None
 * Output: JSON list of all books
 */
public_users.get('/', async function (req, res) {
    try {
        const response = await axios.get('http://localhost:5000/');
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching books" });
    }
});

/**
 * Route: Get book by ISBN
 * Input: isbn (URL parameter)
 * Output: JSON object of the book matching the ISBN
 */
public_users.get('/isbn/:isbn', async function (req, res) {
    try {
        const isbn = req.params.isbn;
        const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(404).json({ message: `Book with ISBN ${req.params.isbn} not found` });
    }
});

/**
 * Route: Get books by Author
 * Input: author (URL parameter)
 * Output: JSON list of books by the specified author
 */
public_users.get('/author/:author', async function (req, res) {
    try {
        const author = req.params.author;
        const response = await axios.get(`http://localhost:5000/author/${encodeURIComponent(author)}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(404).json({ message: `No books found for author: ${req.params.author}` });
    }
});

/**
 * Route: Get books by Title
 * Input: title (URL parameter)
 * Output: JSON list of books matching the specified title
 */
public_users.get('/title/:title', async function (req, res) {
    try {
        const title = req.params.title;
        const response = await axios.get(`http://localhost:5000/title/${encodeURIComponent(title)}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(404).json({ message: `No books found with title: ${req.params.title}` });
    }
});

module.exports.general = public_users;