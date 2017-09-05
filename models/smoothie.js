const db = require('../configs/db');

const smoothieTable = 'smoothies';
const userTable = 'users';

const Smoothie = {};

Smoothie.findAll = (query, params) =>
  db.query(query || `
    SELECT * FROM ${smoothieTable}
    JOIN ${userTable} ON ${smoothieTable}.user_id = ${userTable}.user_id`, params || []);

Smoothie.findOne = id =>
  db.oneOrNone(`
    SELECT * FROM ${smoothieTable}
    JOIN ${userTable} ON ${smoothieTable}.user_id = ${userTable}.user_id
    WHERE id = $1`, [id]);

Smoothie.create = smoothie =>
  db.none(`
    INSERT INTO ${smoothieTable} (user_id, title, ingredients, nutrition, instructions)
    VALUES
    ($/user_id/, $/title/, $/ingredients/, $/nutrition/, $/instructions/)`, smoothie);

Smoothie.update = smoothie =>
  db.none(`
    UPDATE ${smoothieTable} SET

    user_id       = $/user_id/,
    title         = $/title/,
    ingredients   = $/ingredients/,
    nutrition     = $/nutrition/,
    instructions  = $/instructions/

    WHERE id      = $/id/
    `, smoothie);

Smoothie.destroy = id =>
  db.none(`DELETE FROM ${smoothieTable} WHERE id = $1`, [id]);


module.exports = Smoothie;
