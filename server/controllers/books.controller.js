'use strict';

const BookModel = require('../models/books.model');

const getBooks = async (req, res) => {
  try {
    res.body = await BookModel.find({});
    res.status(200).json(res.body);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

const postBook = async (req, res) => {
  try {
    res.body = await BookModel.create(req.body);
    res.status(200).json(res.body);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

module.exports = {
  getBooks,
  postBook,
};
