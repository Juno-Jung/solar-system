'use strict';
require('../db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planetSchema = new Schema({
  name: String,
  description: String,
  diameter: String,
  orbital_period: String,
  mass: String,
  gravity: String,
  moons: String,
  rotation_period: String,
  escape_velocity: String,
  avg_orbit_distance: String,
});

const PlanetModel = mongoose.model('Planets', planetSchema);

module.exports = PlanetModel;
