const Smoothie = require('../models/smoothie');

const smoothieController = {};

smoothieController.list = (req, res) => {
  Smoothie.findAll()
    .then((smoothies) => {
      res.render('index', {
        data: { smoothies },
      });
    })
    .catch(next);
};

smoothieController.find = (req, res) => {
  Smoothie.findAll(`
    SELECT * FROM smoothies
    JOIN users ON users.user_id = smoothies.user_id
    WHERE title LIKE '%${req.query.search}%'`)
    .then((smoothies) => {
      res.render('search', {
        data: {
          smoothies,
          search: req.query.search,
        },
      });
    })
    .catch(next);
};

smoothieController.show = (req, res) => {
  Smoothie.findOne(req.params.id)
    .then((smoothie) => {
      res.render('smoothie/single', {
        data: { smoothie },
      });
    })
    .catch(next);
};

smoothieController.create = (req, res) => {
  const {user_id, title, ingredients, nutrition, instructions } = req.body;
  console.log(req.body);
  Smoothie.create({
    user_id,
    title,
    ingredients,
    nutrition,
    instructions,
  })
    .then(() => {
      res.status(200).json({ redirect: `/users/${user_id}` });
    })
    .catch(next);
};

smoothieController.update = (req, res) => {
  const {user_id, title, ingredients, nutrition, instructions } = req.body;

  Smoothie.update({
    id: req.params.id,
    user_id,
    title,
    ingredients,
    nutrition,
    instructions,
  })
    .then(() => {
      res.status(200).json({ redirect: `/users/${user_id}` });
    })
    .catch(next);
};

smoothieController.destroy = (req, res) => {
  Smoothie.destroy(req.params.id)
    .then(() => {
      res.status(200).json({ redirect: 'back' });
    })
    .catch(next);
};

module.exports = smoothieController;
