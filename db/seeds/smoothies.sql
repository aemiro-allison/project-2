
INSERT INTO smoothies (user_id, title, ingredients, nutrition, instructions)
VALUES
(1,
  'banana smoothie',

  '{ "apple": {
      "quantity": 1,
      "calories": 1,
      "protein": 1
     },
     "banana": {
      "quantity": 1.5,
      "calories": 10,
      "protein": 2
     }
   }',

   '{ "calories": 200,
      "protein": 4,
      "prep_time": 4
   }',

  'test #1'
),

(2,
  'apple pie smoothie',

  '{ "apple": {
      "quantity": 1.5,
      "calories": 10,
      "protein": 1
     },
     "banana": {
      "quantity": 1,
      "calories": 10,
      "protein": 2
     }
   }',

   '{ "calories": 20,
      "protein": 3,
      "prep_time": 10
   }',

  'test #2'
)
;
