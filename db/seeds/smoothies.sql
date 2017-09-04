\c build_a_smoothie;

INSERT INTO smoothies (user_id, title, ingredients, instructions)
VALUES
(1,
  'banana smoothie',
  '{ "apple": {
      "quantity": "1 tsp",
      "calories": "1cal",
      "protein": "1g"
     },
     "banana": {
      "quantity": "1.5 tsp",
      "calories": "10cal",
      "protein": "2g"
     }
   }',
  'test #1'
)
;
