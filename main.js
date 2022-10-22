// Swiper Slider Default Config
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Swiper Slider Hero Config
var swiper = new Swiper(".swiper-container-hero", {
  centeredSlides: true,
  loop: true,
  speed: 500,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChangeTransitionStart: function () {
      $(".heroSliderText h1").hide(0);
      $(".heroSliderText h1").removeClass("aos-init").removeClass("aos-animate");
      $(".heroSliderText p").hide(0);
      $(".heroSliderText p").removeClass("aos-init").removeClass("aos-animate");
    },
    slideChangeTransitionEnd: function () {
      $(".heroSliderText h1").show(0);
      $(".heroSliderText p").show(0);
      AOS.init();
    },
  },
});

// Swiper Slider Testimonials Config
var swiper = new Swiper(".swiper-container-testimonials", {
  spaceBetween: 1500,
  loop: true,
  autoplay: {
    delay: 5500,

    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Ripple Button Effect
const buttons = document.querySelectorAll(".rippleBtn");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);
  });
});

// AOS Config
AOS.init({ disable: "mobile", once: true });

// Menu Config
$("#toggleMenu").click(function () {
  $(this).toggleClass("change");
  $("#navItems").toggleClass("mobileNavItems");
});

$("#navItems a").click(function () {
  $("#toggleMenu").toggleClass("change");
  $("#navItems").toggleClass("mobileNavItems");
});

// Scroll Menu
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $("nav").addClass("shrink");
  } else {
    $("nav").removeClass("shrink");
  }
});

// Image Gallery
// $(document).ready(function () {
//   $(".imageGallery").isotope({
//     itemSelector: ".galleryItemContainer",

//     filter: "*",
//   });

//   $(".filter-button-group").on("click", "li", function () {
//     var filterValue = $(this).attr("data-filter");
//     $(".imageGallery").isotope({
//        filter: filterValue,
//        itemSelector: ".galleryItemContainer",

//        });
//     $(".filter-button-group li").removeClass("active");
//     $(this).addClass("active");
//   });
// });

$(document).ready(function () {
  var mixer = mixitup(".imageGallery", {
    animation: {
      duration: 500,
      effects: "fade translateZ(-100px)",
    },
    controls: {
      live: true,
      toggleLogic: "and",
    },
  });
});

// Preloader
$(window).on("load", function () {
  $("#preloader").fadeOut(1000);
});

// Google Map
window.addEventListener("load", (event) => {
  document.getElementById("map").innerHTML = '  <iframe id="myMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.79327649932!2d28.872096739702062!3d41.005495809214985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1587743416548!5m2!1str!2str" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
});
