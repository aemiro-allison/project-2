const Smoothie = require('../models/smoothie');

const smoothieController = {};

smoothieController.list = (req, res) => {
  Smoothie.findAll()
    .then((smoothies) => {
      res.render('index', { smoothies });
    })
    .catch((err) => {
      console.log(err);
      res.json({ err });
    });
};

smoothieController.show = (req, res) => {
  Smoothie.findOne(req.params.id)
    .then((smoothie) => {
      res.render('smoothie/single', { smoothie });
    })
    .catch((err) => {
      console.log(err);
      res.json({ err });
    });
};

module.exports = smoothieController;
