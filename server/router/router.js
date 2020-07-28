'use strict';

const express = require('express');
const router = express.Router();

const BookController = require('./../controllers/books.controller');

router.get('/books/', BookController.getBooks);
router.post('/books/post', BookController.postBook);

module.exports = router;
