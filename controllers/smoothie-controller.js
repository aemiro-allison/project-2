const Smoothie = require('../models/smoothie');

const smoothieController = {};

smoothieController.list = (req, res) => {
  Smoothie.findAll()
    .then((smoothies) => {
      res.render('index', { data: smoothies });
    })
    .catch((err) => {
      console.log(err);
      res.json({ err });
    });
};

module.exports = smoothieController;
