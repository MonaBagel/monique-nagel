/*==========================
  LOADER
============================*/



/*==========================
  SCROLL FUNCTIONS
============================*/
(function ScrollToTop() {
  "use strict";
  // Scroll to top button appear
  var scrollToTop = document.querySelector('.scroll-to-top');
  if (scrollToTop) {
  
    // Scroll to top button appear
    window.addEventListener('scroll', function() {
      var scrollDistance = window.pageYOffset;

      if (scrollDistance > 150) {
        scrollToTop.style.display = 'block';
      } else {
        scrollToTop.style.display = 'none';
      }

    });
  }
})(); // End of use strict


/*==========================
  NAVBAR
============================*/
(function Navbar() {
  "use strict"; // Start of use strict

  var navbarToggle = document.querySelector('.nav-toggle');
  var navOverlay = document.querySelector('.nav-overlay');
  
  //toggle between opening and closing navbar
  if (navbarToggle) {
    navbarToggle.addEventListener('click', function(e) {
      e.preventDefault();

      navOverlay.classList.toggle('active');
      navbarToggle.classList.toggle('active');
      
      var icon = navbarToggle.querySelector('.fa-bars, .fa-times');
      
      // switch between bars and cross icon when nav is toggled
      if (icon) {

        if (icon.classList.contains('fa-times')) /*open*/{

          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
          if(icon.classList.contains('yellow-text')){
            icon.classList.remove('yellow-text');
            icon.classList.add('cyan-text');
          }    
          navOverlay.style.height = "0%";//hides nav menu

        } else if (icon.classList.contains('fa-bars')) /*close*/ {

          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
          if(icon.classList.contains('cyan-text')){
            icon.classList.remove('cyan-text');
            icon.classList.add('yellow-text');
          }  
          navOverlay.style.height = "100%";//shows nav menu
        }
      }

    });
  }
})(); // End of use strict


/*==========================
  HEADER BACKGROUND
============================*/







/*==========================
  CAROUSEL
============================*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var indicators = document.getElementsByClassName("indicator");

  if (n > slides.length) {
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < indicators.length; i++) {
    indicators[i].className = indicators[i].className.replace(" active", "");
    indicators[i].className = indicators[i].className.replace(" cyan-text", " yellow-text");
  }
  slides[slideIndex-1].style.display = "block";  
  indicators[slideIndex-1].className += " active";
  indicators[slideIndex-1].className = indicators[slideIndex-1].className.replace(" yellow-text", " cyan-text")
}