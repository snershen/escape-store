window.addEventListener("scroll", (e) => {
  const navbar = document.querySelector("nav");
  const windowScrollY = window.scrollY;
  if (windowScrollY > 0) {
    navbar.classList.add("bg-blur-dark");
  } else if (windowScrollY <= 0) {
    navbar.classList.remove("bg-blur-dark");
  }
});

var swiper = new Swiper(".game-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    // when window width is >= 320px
    280: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 4,
    },
  },
  loop: true,
});

var swiper = new Swiper(".comment-swiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    // when window width is >= 320px
    280: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  loop: true,
});
