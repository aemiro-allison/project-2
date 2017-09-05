const express = require('express');
const userController = require('../controllers/user-controller');

const userRoutes = express.Router();


userRoutes.get('/:id', userController.show);
userRoutes.get('/:user_id/smoothie/create', userController.showCreate);
userRoutes.get('/:user_id/smoothie/edit/:smoothie_id', userController.showEdit);
userRoutes.get('/:user_id/smoothie/:smoothie_id', userController.showItem);



module.exports = userRoutes;
