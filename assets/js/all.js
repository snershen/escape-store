"use strict";

//navbar
window.addEventListener("scroll", function (e) {
  var navbar = document.querySelector("nav");
  var windowScrollY = window.scrollY;

  if (windowScrollY > 0) {
    navbar.classList.add("bg-blur-dark");
  } else if (windowScrollY <= 0) {
    navbar.classList.remove("bg-blur-dark");
  }
}); //swiper

var swiper = new Swiper(".game-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
    delay: 3000
  },
  breakpoints: {
    // when window width is >= 320px
    280: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 4
    }
  },
  loop: true
});
var swiper = new Swiper(".comment-swiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  autoplay: {
    delay: 3000
  },
  breakpoints: {
    // when window width is >= 320px
    280: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  },
  loop: true
}); //countup

function countNum(endNum, target) {
  $({
    countNum: 0
  }).animate({
    countNum: endNum
  }, {
    duration: 1800,
    easing: "linear",
    step: function step() {
      target.text(Math.floor(this.countNum));
    },
    complete: function complete() {
      target.text(this.countNum);
    }
  });
} //滾動時的觸發條件


function checkSlide(e) {
  var storeNum = document.querySelector(".store-num"); //判斷該頁面是否有該元素

  if (storeNum) {
    //抓取目前滑到的頁面底部位置
    var slideAt = window.scrollY + window.innerHeight; //抓取目標元素的頂部位置

    var elTop = storeNum.offsetTop; //當滑到的頁面底部位置觸碰到目標元素時

    var isTouched = slideAt > elTop; //限定觸發範圍，以增進效能

    var isTouchedRange = slideAt - 50 < elTop;

    if (isTouched && isTouchedRange) {
      countNum(8, $("#game-num"));
      countNum(15643, $("#player-num"));
      countNum(1342, $("#comment-num"));
    }
  }
}

window.addEventListener("scroll", checkSlide); //calendar

$(document).ready(function () {
  $("#datepicker").datepicker();
  $("#datepicker").datepicker("option", "monthNames", ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]);
  $("#datepicker").datepicker("option", "yearRange", "2022:2023");
}); //parallax

window.addEventListener("scroll", function (e) {
  $("#game-banner").css("opacity", 1 - window.scrollY / 700);
  $("#game-banner").css("transform", "translateY(".concat(window.scrollY + "px", ")"));
});
//# sourceMappingURL=all.js.map
