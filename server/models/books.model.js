'use strict';
require('../db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
});

const BookModel = mongoose.model('Books', bookSchema);

module.exports = BookModel;
