/* HELPER FUNCTIONS */

function newGame(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  window.location.href = window.location.href;
}

function random(min, max) {
  return (Math.random() * (max - min)) + min;
}

function animate(el, animationName, options) {
  options.remove = !options.remove;

  if ('before' in options) options.before(el);
  el.classList.add(animationName);
  el.addEventListener('animationend', function animationHandler() {
    if (options.remove) el.classList.remove(animationName);
    el.removeEventListener('animationend', animationHandler);
    if ('after' in options) options.after(el);
  });
}

function fadeOut(el) {
  animate(el, 'fadeOut', () => {
    el.style.display = 'none';
  });
}

function fadeIn(el) {
  el.style.display = 'block';
  animate(el, 'fadeIn');
}

// convert form input into an object
function toObject(queryStr) {
  let obj = {};
  // convert form query string into a two dimensional array
  // with each element containing an array with the key and value.
  let values = queryStr.split('&').map(param => param.split('='));
  // create key value pairs using the form's name and value for
  // each input.
  values.forEach(value => { obj[value[0]] = value[1] });

  return obj;
}
