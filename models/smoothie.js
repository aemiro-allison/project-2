const pgp = require('pg-promise')();
const dbConfig = require('../configs/db');

const db = pgp(dbConfig);

const Smoothie = {};
const smoothieTable = 'smoothies';
const userTable = 'users';

Smoothie.findAll = () =>
  db.query(`
    SELECT * FROM ${smoothieTable}
    JOIN ${userTable} ON ${smoothieTable}.user_id = ${userTable}.user_id`);

Smoothie.findOne = id =>
  db.oneOrNone(`
    SELECT * FROM ${smoothieTable}
    JOIN ${userTable} ON ${smoothieTable}.user_id = ${userTable}.user_id
    WHERE id = $1`, [id]);


module.exports = Smoothie;
