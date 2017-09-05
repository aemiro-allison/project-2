const express = require('express');
const smoothieController = require('../controllers/smoothie-controller');

const smoothieRoutes = express.Router();

smoothieRoutes.get('/', smoothieController.list);
smoothieRoutes.get('/search', smoothieController.find);
smoothieRoutes.get('/:id', smoothieController.show);

// PROTECTED ROUTES
smoothieRoutes.post('/', smoothieController.create);
smoothieRoutes.put('/:id', smoothieController.update);
smoothieRoutes.delete('/:id', smoothieController.destroy);


module.exports = smoothieRoutes;

