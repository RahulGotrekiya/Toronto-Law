let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".header-menu")
let white = document.querySelector(".header-info");


hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("isactive");
  nav.classList.toggle("active");
  white.classList.toggle("active");
});

$(".video").magnificPopup({
  type: "iframe",

  iframe: {
    markup:
      '<div class="mfp-iframe-scaler">' +
      '<div class="mfp-close"></div>' +
      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
      '<div class="mfp-title">Some caption</div>' +
      "</div>",
  },
  callbacks: {
    markupParse: function(template, values, item) {
      values.title = item.el.attr("title");
    },
  },
});

// Testimonial slides
const slider = document.querySelector(".slider-overflow");
const slidesContainer = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

let slideWidth = slides[0].offsetWidth;
let slideIndex = 0;

function slideTo(index) {
  const newIndex = index % slides.length;

  const nextSlide = newIndex < 0 ? slides.length - 1 : newIndex;

  // Slide to the next slide
  slidesContainer.style.transform = `translateX(${-nextSlide * slideWidth}px)`;
  slideIndex = nextSlide;
}

leftArrow.addEventListener('click', function() {
  slideTo(slideIndex - 1);
});

rightArrow.addEventListener('click', function() {
  slideTo(slideIndex + 1);
});

// Optional: Auto slide infinitely
//function autoSlide() {
//  slideTo(slideIndex + 1);
//}
//
//setInterval(autoSlide, 3000); 
