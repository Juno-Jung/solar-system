const BookModel = require('./../models/books.model');
const PlanetModel = require('./../models/planets.model');

const books = BookModel.find({});
const planets = PlanetModel.find({});


const resolvers = {
  Query: {
    books: () => books,
    planets: (_, { name }) => {
      if (name) {
        return PlanetModel.find({
          name,
        });
      }
      return planets;
    },
  },

  Planet: {
    book: function (obj) {
      return obj.book;
    }
  }
};

module.exports = resolvers;