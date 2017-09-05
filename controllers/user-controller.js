const User = require('../models/user');
const Smoothie = require('../models/smoothie');

const userController = {};

userController.list = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.json({ users });
    })
    .catch(next);
};

userController.show = (req, res, next) => {
  User.findOne(req.params.id)
    .then((user) => {
      res.locals.user = user;
      return Smoothie.findAll(`
        SELECT * FROM smoothies
        JOIN users ON users.user_id = smoothies.user_id
        WHERE smoothies.user_id = $1`, [user.user_id]);
    })
    .then((smoothies) => {
      res.render('user/profile', {
        data: {
          user: res.locals.user,
          smoothies,
        },
      });
    })
    .catch(next);
};

userController.showItem = (req, res, next) => {
  Promise.all([
    User.findOne(req.params.user_id),
    Smoothie.findOne(req.params.smoothie_id),
  ])
    .then((result) => {
      res.render('smoothie/single', {
        data: {
          user: result[0],
          smoothie: result[1],
        },
      });
    })
    .catch(next);
};

userController.showCreate = (req, res, next) => {
  User.findOne(req.params.user_id)
  .then((user) => {
    user.isLoggedIn = true;
    res.render('user/smoothie-create', {
      data: { user },
    });
  })
  .catch(next);
}

userController.showEdit = (req, res, next) => {
  Promise.all([
    User.findOne(req.params.user_id),
    Smoothie.findOne(req.params.smoothie_id),
  ])
    .then((result) => {
      result[0].isLoggedIn = true;
      res.render('user/smoothie-edit', {
        data: {
          user: result[0],
          smoothie: result[1],
        },
      });
    })
    .catch(next);
}



module.exports = userController;
