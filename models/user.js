const db = require('../configs/db');

const smoothieTable = 'smoothies';
const userTable = 'users';

const User = {};

User.findOne = (id) =>
  db.oneOrNone(`
    SELECT * FROM ${userTable} WHERE user_id = $1`, [id]);

module.exports = User;
