(function (root) {


  /* Animations XX Break later using grunt */

  /* Navigation toggle button(s) */
  var navToggles = document.querySelectorAll('.nav-toggle');
  navToggles = Array.prototype.splice.call(navToggles, 0);

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


  /* Navigation side toggle button(s) */
  var sideNavToggles = document.querySelector('.side-nav-toggle');
  var elToMove = document.querySelectorAll('body, .header-main, .footer-fixed');
  elToMove = Array.prototype.splice.call(elToMove, 0);
  // console.log(elToMove);
  elToMove.forEach(function(el){
     el.style.webkitTransition =   "margin-left 2s";
    var toggleSideNav = function () {

      var elSideNav = document.querySelector('.side-nav');
      elSideNav.style.webkitTransition =   "width 2s";

      if(el.style.marginLeft.trim().length > 0){
        el.style.marginLeft = "";
        elSideNav.style.width = "0px";
      }else{
        el.style.marginLeft = "150px";
        elSideNav.style.width = "150px";
      }

    };

    sideNavToggles.addEventListener('click', toggleSideNav);
  });




}(this));