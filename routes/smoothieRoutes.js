const smoothieController = require('../controllers/smoothie-controller');
const express = require('express');

const smoothieRoutes = express.Router();

smoothieRoutes.get('/', smoothieController.list);


module.exports = smoothieRoutes;

