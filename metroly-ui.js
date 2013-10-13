(function (root) {

  var toggle = function toggle(el) {
    el.style.display = (el.style.display != 'block' ? 'block' : 'none' );
  }

  var navToggles = document.querySelectorAll('.nav-toggle');
  navToggles = Array.prototype.splice.call(navToggles, 0);

  navToggles.forEach(function (nav) {
    var navId = nav.dataset.targetNav;
    nav.addEventListener('click', function () {
        var navMenu = document.querySelector(navId);
        toggle(navMenu);
    });
  });

}(this));