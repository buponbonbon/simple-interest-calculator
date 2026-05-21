const express = require('express');
let books = require("./booksdb.js");
const axios = require('axios');

const public_users = express.Router();

/**
 * Get all books using async/await with Axios
 */
public_users.get('/', async function (req, res) {
    try {
        const response = await axios.get('http://localhost:5000/');

        if (response.data) {
            return res.status(200).json(response.data);
        } else {
            return res.status(404).json({
                message: "No books found"
            });
        }

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

/**
 * Get book details based on ISBN using async/await with Axios
 */
public_users.get('/isbn/:isbn', async function (req, res) {

    const isbn = req.params.isbn;

    try {

        const response = await axios.get('http://localhost:5000/');

        const allBooks = response.data;

        if (allBooks[isbn]) {
            return res.status(200).json(allBooks[isbn]);
        } else {
            return res.status(404).json({
                message: `Book with ISBN ${isbn} not found`
            });
        }

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });
    }
});

/**
 * Get book details based on Author using async/await with Axios
 */
public_users.get('/author/:author', async function (req, res) {

    const author = req.params.author;

    try {

        const response = await axios.get('http://localhost:5000/');

        const allBooks = response.data;

        const filteredBooks = Object.values(allBooks).filter(
            (book) =>
                book.author.toLowerCase() === author.toLowerCase()
        );

        if (filteredBooks.length > 0) {
            return res.status(200).json(filteredBooks);
        } else {
            return res.status(404).json({
                message: `No books found for author ${author}`
            });
        }

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });
    }
});

/**
 * Get book details based on Title using async/await with Axios
 */
public_users.get('/title/:title', async function (req, res) {

    const title = req.params.title;

    try {

        const response = await axios.get('http://localhost:5000/');

        const allBooks = response.data;

        const filteredBooks = Object.values(allBooks).filter(
            (book) =>
                book.title.toLowerCase() === title.toLowerCase()
        );

        if (filteredBooks.length > 0) {
            return res.status(200).json(filteredBooks);
        } else {
            return res.status(404).json({
                message: `No books found with title ${title}`
            });
        }

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });
    }
});

module.exports.general = public_users;