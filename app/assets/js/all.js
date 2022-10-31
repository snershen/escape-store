//navbar
window.addEventListener("scroll", (e) => {
  const navbar = document.querySelector("nav");
  const windowScrollY = window.scrollY;
  if (windowScrollY > 0) {
    navbar.classList.add("bg-blur-dark");
  } else if (windowScrollY <= 0) {
    navbar.classList.remove("bg-blur-dark");
  }
});

//swiper
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
    clickable: true,
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

//countup
function countNum(endNum, target) {
  $({ countNum: 0 }).animate(
    {
      countNum: endNum,
    },
    {
      duration: 5000,
      easing: "linear",
      step: function () {
        target.text(Math.floor(this.countNum));
      },
      complete: function () {
        target.text(this.countNum);
      },
    }
  );
}

// if ($(window.scrollY) > $(".comment".offsetTop)) {
const comment = document.querySelector(".comment");

window.addEventListener("scroll", (e) => {
  if (window.scrollY <= comment.offsetTop - 1300) {
    // setTimeout(countNum(8, $("#game-num")), 5000);
    console.log("hui");
    console.log(window.scrollY);
    console.log(comment.offsetTop + 100);
    countNum(8, $("#game-num"));
    countNum(15643, $("#player-num"));
    countNum(1342, $("#comment-num"));
    window.removeEventListener("scroll", countNum);
  } else {
    return;
  }
});

//calendar
$(document).ready(function () {
  $("#datepicker").datepicker();
  $("#datepicker").datepicker("option", "monthNames", [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ]);
  $("#datepicker").datepicker("option", "yearRange", "2022:2023");
});

//parallax
window.addEventListener("scroll", (e) => {
  $("#game-banner").css("opacity", 1 - window.scrollY / 700);
  $("#game-banner").css("top", window.scrollY + "px");
});