/*==========================
  LOADER
============================*/







/*==========================
  HEADER BACKGROUND
============================*/







/*==========================
  CAROUSEL
============================*/


(function() {
  "use strict"; // Start of use strict

  /*==========================
    NAVBAR
  ============================*/
  var navbarToggle = document.querySelector('.nav-toggle');
  var navOverlay = document.querySelector('.nav-overlay');
  
  //toggle between opening and closing navabar
  if (navbarToggle) {
    navbarToggle.addEventListener('click', function(e) {
      e.preventDefault();

      navOverlay.classList.toggle('active');
      navbarToggle.classList.toggle('active');
      
      var icon = navbarToggle.querySelector('.fa-bars, .fa-times');
      
      // switch between bars and cross icon when nav is toggled
      if (icon) {
        //open
        if (icon.classList.contains('fa-times')) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
          navOverlay.style.height = "0%";//hides nav menu
        } else if (icon.classList.contains('fa-bars')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
          navOverlay.style.height = "100%";//shows nav menu
        }
      }

    });
  }


  /*==========================
    SCROLL FUNCTIONS
  ============================*/
  

  

})(); // End of use strict
