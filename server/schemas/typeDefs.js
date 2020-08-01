const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    books: [Book]
    planets(name: String): [Planet]
  }

  type Planet {
    name: String!
    description: String
    diameter: String # in km
    orbital_period: String # in Earth years
    mass: String # in kg
    gravity: String # in m/s^2
    moons: String
    rotation_period: String # in Earth days
    escape_velocity: String # in km/s
    avg_orbit_distance: String # in millions of kilometers
    book: Book
  }

  type Book {
    title: String
    author: String
  }
`;

module.exports = typeDefs;