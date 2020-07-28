'use strict';

const PlanetModel = require('../models/planets.model');

const getPlanets = async (req, res) => {
  try {
    res.body = await PlanetModel.find({});
    res.status(200).json(res.body);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

const postPlanet = async (req, res) => {
  try {
    res.body = await PlanetModel.create(req.body);
    res.status(200).json(res.body);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

module.exports = {
  getPlanets,
  postPlanet,
};
