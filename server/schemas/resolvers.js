const BookModel = require('./../models/books.model');

const books = BookModel.find({});

const resolvers = {
  Query: {
    books: () => books,
  },
};

module.exports = resolvers;

[
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];