let $els = null;
let menuView = null;

$(document).ready(() => {
  $els = {
    $menuView: $('#menu-view'),
    $searchView: $('#search-view'),
  };

  menuView = new View($els.$menuView, fill('menu', views.menu));
  searchView = new View($els.$searchView, fill('search', views.search));

  menuView.setListeners($('.menu-close').add('.menu-open'));
  searchView.setListeners($('.search-close').add('.search-open'));
  console.log(menuView);
});
