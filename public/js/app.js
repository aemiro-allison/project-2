let $els = null;

$(document).ready(() => {
  $els = {
    $menuView: $('#menu-view'),
    $searchView: $('#search-view'),
    $ingredientsView: $('#ingredients-view'),
  };

  menuView = new View($els.$menuView, fill('menu', views.menu));
  searchView = new View($els.$searchView, fill('search', views.search));
  ingredientsView = new View($els.$ingredientsView, fill('ingredients', views.ingredients));

  menuView.setListeners($('.menu-close').add('.menu-open'));
  searchView.setListeners($('.search-close').add('.search-open'));
  ingredientsView.setListeners($('.ingredients-close').add('.ingredients-open'));

  addIngredients();
});

function addIngredients() {
  console.log(data.ingredients);
}
