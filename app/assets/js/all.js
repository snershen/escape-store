window.addEventListener("scroll", (e) => {
  const navbar = document.querySelector("nav");
  const windowScrollY = window.scrollY;
  if (windowScrollY > 0) {
    navbar.classList.add("bg-blur-dark");
  } else if (windowScrollY <= 0) {
    navbar.classList.remove("bg-blur-dark");
  }
});
