const BookModel = require('./../models/books.model');
const PlanetModel = require('./../models/planets.model');

const books = BookModel.find({});
const planets = PlanetModel.find({});

const resolvers = {
  Query: {
    books: () => books,
    planets: () => planets,
  },
};

module.exports = resolvers;