DROP TABLE IF EXISTS smoothies;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  USER_ID SERIAL NOT NULL PRIMARY KEY,
  NAME VARCHAR(255)
);

CREATE TABLE smoothies (
  ID SERIAL NOT NULL PRIMARY KEY,
  USER_ID INTEGER NOT NULL REFERENCES users,
  TITLE VARCHAR(255) NOT NULL,
  INGREDIENTS JSONB NOT NULL,
  NUTRITION JSONB NOT NULL,
  INSTRUCTIONS TEXT
);
