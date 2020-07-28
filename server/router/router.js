'use strict';

const express = require('express');
const router = express.Router();

const BookController = require('./../controllers/books.controller');
const PlanetController = require('./../controllers/planets.controller');

router.get('/books/', BookController.getBooks);
router.post('/books/post', BookController.postBook);

router.get('/planets/', PlanetController.getPlanets);
router.post('/planets/post', PlanetController.postPlanet);

module.exports = router;
