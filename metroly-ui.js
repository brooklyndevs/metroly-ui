(function (root) {

  /* Aliases */
  var splice = Array.prototype.splice;



  /* Paging */
  var pages = document.querySelectorAll('.page');
  var firstPage = pages[0];
  pages = splice.call(pages, 0);

  pages.forEach(function (page) {
    page.style.display = 'none';
  });

  firstPage.style.display = 'block';

  /* Animations XX Break later using grunt */

  /* Navigation toggle button(s) */
  var navToggles = document.querySelectorAll('.nav-toggle');
  navToggles = splice.call(navToggles, 0);

  navToggles.forEach(function (nav) {

    var navId = nav.dataset.targetNav;
    var el = document.querySelector(navId);
    var elHeight = el.offsetHeight;
    el.style.height = '0';

    el.addEventListener('webkitTransitionEnd', function () {
      console.log('transition ended');
    });

    var toggleFn = function () {
      console.log('togg ', elHeight);

      if (parseInt(el.style.height) > 0) {
        el.style.height = 0 + 'px'
      } else {
        el.style.height = elHeight + 'px';
      }
    };

    nav.addEventListener('click', toggleFn);
  });

}(this));