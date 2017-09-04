/*
For Dynamic Views, create:

a navbar component
a search component
a window component
a window footer component
a window body component

*/

const views = {
  menu: `
  <div class="row to-fullheight to-center add-margin-2y">
    <nav class="column to-center">
      <li class="nav-item add-margin-2y"><a href="./index.html">HOME</a></li>
      <li class="nav-item add-margin-2y"><a href="./smoothie-page.html">SMOOTHIES</a></li>
      <li class="nav-item add-margin-2y"><a href="./about.html">ABOUT</a></li>
      <li class="nav-item add-margin-2y"><a href="./signup.html">SIGN UP</a></li>
      <li class="nav-item add-margin-2y"><a href="./login.html">LOG IN</a></li>
    </nav>
  </div>
  `,

  search: `
  <div class="to-fullheight column add-margin-3y">
    <div class="column to-center add-margin-3y">
      <form>
        <div class="row add-margin-2y">
          <input type="text" placeholder="Find a Smoothie" />
          <button type="submit">SEARCH</button>
        </div>
      </form>
      <div class="row to-center add-margin-2y">
        <button>Customize Search</button>
      </div>
    </div>

  <div class="row wrap add-margin-3y to-middle">

  <div class="column box lose-padding lose-shadow card add-margin-y">
    <div class="row box wrap">
      <span class="title">Banana Smoothie</span>
      <span class="to-right caption">@aallison</span>
      <div class="row subtitle">Subtitle</div>
    </div>
    <figure class="image"><img src="http://www.eatwell101.com/wp-content/uploads/2016/10/apple-banana-smoothie-recipes-.jpg" alt=""></figure>
    <div class="row box text-to-center">
      <div class="row-item">330cal</div>
      <div class="row-item">90g</div>
      <div class="row-item">4mins</div>
    </div>
  </div>

  <div class="column box lose-padding lose-shadow card add-margin-y">
    <div class="row box wrap">
      <span class="title">Banana Smoothie</span>
      <span class="to-right caption">@aallison</span>
      <div class="row subtitle">Subtitle</div>
    </div>
    <figure class="image"><img src="http://www.eatwell101.com/wp-content/uploads/2016/10/apple-banana-smoothie-recipes-.jpg" alt=""></figure>
    <div class="row box text-to-center">
      <div class="row-item">330cal</div>
      <div class="row-item">90g</div>
      <div class="row-item">4mins</div>
    </div>
  </div>

  <div class="column box lose-padding lose-shadow card add-margin-y">
    <div class="row box wrap">
      <span class="title">Banana Smoothie</span>
      <span class="to-right caption">@aallison</span>
      <div class="row subtitle">Subtitle</div>
    </div>
    <figure class="image"><img src="http://www.eatwell101.com/wp-content/uploads/2016/10/apple-banana-smoothie-recipes-.jpg" alt=""></figure>
    <div class="row box text-to-center">
      <div class="row-item">330cal</div>
      <div class="row-item">90g</div>
      <div class="row-item">4mins</div>
    </div>
  </div>

</div>

  </div>
  `,
};

function fill(name, content) {
  const top = `
    <div class="row add-padding ${name}-close">
      <span class="icon">
        <i class="fa fa-close"></i>
      </span>
    </div>
  `;

  const bottom = `
    <div class="footer row add-padding to-center to-fixed">
      <button class="${name}-close">BACK</button>
    </div>
  `;

  return {
    top,
    content,
    bottom,
  };
}



function View($el, content) {
  this.$el      = $el;
  this.top      = content.top;
  this.content  = content.content;
  this.bottom   = content.bottom;
  this.isActive = false;
  // create hidden dom node.
  this.init();
}

// handle open and close,
// render content when shown and remove content  when closed

View.prototype.open = function open() {
  animate(this.$el[0], 'fadeInDown', {
    before(el) { el.style.display = 'block'; },
  });
};

View.prototype.close = function close() {
  animate(this.$el[0], 'fadeOutUp', {
    after(el) { el.style.display = 'none'; },
  });
};

View.prototype.toggle = function toggle() {
  if (this.isActive) {
    this.close();
  } else {
    this.open();
  }

  this.isActive = !this.isActive;
};

View.prototype.init = function init() {
  this.$el.html(`${this.top}${this.content}${this.bottom}`);
  this.$el.css({
    display: 'none',
  });
};

View.prototype.setListeners = function setListeners($els) {
  $els.on('click', this.toggle.bind(this));
}
