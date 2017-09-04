const pgp = require('pg-promise')();
const dbConfig = require('../configs/db');

const db = pgp(dbConfig);

const Smoothie = {};
const smoothieTable = 'smoothies';
const userTable = 'users';

Smoothie.findAll = () =>
  db.query(`
    SELECT * FROM ${smoothieTable}
    JOIN ${userTable} ON user_id = ${userTable}.id`);


module.exports = Smoothie;
