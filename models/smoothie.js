const pgp = require('pg-promise')();
const dbConfig = require('../configs/db');

const db = pgp(dbConfig);

const Smoothie = {};
const smoothieTable = 'smoothies';

Smoothie.findAll = () =>
  db.query(`SELECT * FROM ${smoothieTable}`);


module.exports = Smoothie;
