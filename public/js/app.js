let $els = null;

let ingredients = data.smoothie.ingredients || {};
let tempIngredient = {};
let tempIngredientName = null;

$(document).ready(() => {
  $els = {
    $menuView: $('#menu-view'),
    $foodName: $('#food-name'),
    $qty: $('#qty'),
    $instructions: $('#instructions'),
    $title: $('#title'),
    $calories: $('#calories'),
    $protein: $('#protein'),
    $prepTime: $('#prep-time'),
    $createBtn: $('#create'),
    $ingredientPic: $('#ingredient-picture'),
    $ingredientSearch: $('#search-for-ingredient'),
    $createSmoothie: $('#create'),
    $saveSmoothie: $('#save'),
    $deleteSmoothie: $('#delete'),
  };

  $('.menu-close').add('.menu-open').on('click', (evt) => {
    $els.$menuView.toggle();
  });

  $els.$ingredientSearch.on('submit', (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    getIngredient($els.$foodName.val(), $els.$qty.val());
  });

  $els.$createSmoothie.on('click', (evt) => {
    $.ajax({
      method: 'POST',
      data: getSmoothieData(ingredients),
      url: data.url || `http://localhost:3000/smoothies`,
    }).done((data) => {
      if (data.redirect && typeof data.redirect === 'string' ) {
        if (data.redirect === 'back') window.history.back();
        window.location = data.redirect;
      }
    });
  });

  $els.$saveSmoothie.on('click', (evt) => {
    $.ajax({
      method: 'POST',
      data: getSmoothieData(ingredients),
      url: `http://localhost:3000/smoothies/${data.smoothie.id}?_method=PUT`,
    }).done((data) => {
      if (data.redirect && typeof data.redirect === 'string' ) {
        if (data.redirect === 'back') window.history.back();
        window.location = data.redirect;
      }
    });
  });

  $els.$deleteSmoothie.on('click', (evt) => {
    $.ajax({
      method: 'POST',
      url: `http://localhost:3000/smoothies/${data.smoothie.id}?_method=DELETE`,
    }).done((data) => {
      if (data.redirect && typeof data.redirect === 'string' ) {
        if (data.redirect === 'back') window.history.back();
        window.location = data.redirect;
      }
    });
  })

});

function clearIngredient(name) {
  delete ingredients[name];
  renderIngredient(ingredients);
}

function addIngredient() {
  ingredients[tempIngredientName] = tempIngredient;
  renderIngredient(ingredients);
}

function generateIngredients(ingredients) {
  return Object.keys(ingredients).map((key) => `
    <div class="row">
      <div>
          <input type="number" value="${ingredients[key].quantity}" disabled>
      </div>
      <div class="row-item row">
        <span class="add-padding">${key}</span>
        <div class="to-right">
          <span class="add-margin-x">${ingredients[key].calories}cal</span>
          <span class="add-margin-x">${ingredients[key].protein}g</span>
        </div>
      </div>
      <div onclick="clearIngredient('${key}')">
        <span class="icon">
          <i class="fa fa-close"></i>
        </span>
      </div>
    </div>
  `).join('');
}

function renderIngredient(ingredients) {
  setSmoothieData(ingredients);
  $('.ingredients').first().html(`
    <button onclick="addIngredient()" class="add-margin-y">ADD INGREDIENT</button>
    ${ generateIngredients(ingredients) }
  `);
}

// form handlers
function getSmoothieData(ingredients) {
  const user_id   = data.user.user_id;
  const title     = $els.$title.val();
  const nutrition = {
    calories: Object.keys(ingredients).reduce((acc, val) => acc + ingredients[val].calories, 0),
    protein: Object.keys(ingredients).reduce((acc, val) => acc + ingredients[val].protein, 0),
    prep_time: $els.$prepTime.val(),
  }
  const instructions = $els.$instructions.val();

  return ({
    user_id,
    title,
    ingredients: JSON.stringify(ingredients),
    nutrition: JSON.stringify(nutrition),
    instructions,
  });
}

function setSmoothieData(ingredients) {
  $els.$calories.val(Object.keys(ingredients).reduce((acc, val) => acc + ingredients[val].calories, 0));
  $els.$protein.val(Object.keys(ingredients).reduce((acc, val) => acc + ingredients[val].protein, 0));
}

function updateSmoothieData(ingredient) {
  console.log(ingredient);
    // add ingredient
    tempIngredientName = ingredient.food_name;
    tempIngredient = {
      quantity: ingredient.tags.quantity,
      calories: Math.round(ingredient.nf_calories),
      protein: Math.round(ingredient.nf_protein),
    };

    $els.$ingredientPic[0].src = ingredient.photo.thumb;
}


// make api request
function getIngredient(food, qty = 1) {
  // make api request
  fetch(`http://localhost:3000/api/ingredient?food=${food}&qty=${qty}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      updateSmoothieData(response.ingredient);
    })
    .catch((err) => {
      console.log(err);
    });
}
// populate ingredients and image from data
