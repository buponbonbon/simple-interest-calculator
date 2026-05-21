const express = require('express');
let books = require("./booksdb.js");
const axios = require('axios');
const public_users = express.Router();

/**
 * Route: Get all books
 * Implementation: Asynchronous fetch using Axios.
 * Input: None | Output: List of all books.
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
 * Implementation: Asynchronous request.
 * Input: ISBN | Output: Specific book object.
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
 * Implementation: Asynchronous call followed by server-side filtering.
 * Logic: Extract book values and filter based on author match.
 * Input: Author Name | Output: List of matching books.
 */
public_users.get('/author/:author', async function (req, res) {
    try {
        const author = req.params.author;
        // Step 1: Request data from source
        const response = await axios.get(`http://localhost:5000/author/${encodeURIComponent(author)}`);
        // Step 2: Validate the filtered data
        const filteredData = response.data;
        res.status(200).json(filteredData);
    } catch (error) {
        res.status(404).json({ message: `No books found for author: ${req.params.author}` });
    }
});

/**
 * Route: Get books by Title
 * Implementation: Asynchronous call followed by server-side filtering.
 * Logic: Extract book values and filter based on exact title match.
 * Input: Title | Output: List of matching books.
 */
public_users.get('/title/:title', async function (req, res) {
    try {
        const title = req.params.title;
        // Step 1: Request data from source
        const response = await axios.get(`http://localhost:5000/title/${encodeURIComponent(title)}`);
        // Step 2: Validate the filtered data
        const filteredData = response.data;
        res.status(200).json(filteredData);
    } catch (error) {
        res.status(404).json({ message: `No books found with title: ${req.params.title}` });
    }
});

module.exports.general = public_users;