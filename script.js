const hamburger = document.querySelector(".Hamburger");
const navLinks = document.querySelector(".nav-links");

// hamburger event listener
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});
// here event listener is added so that if you click on any nav menu item it will close the nav menu list
document.querySelectorAll(".nav-links").forEach((e) =>
  e.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  })
);
