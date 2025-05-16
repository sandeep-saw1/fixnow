const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.classList.toggle("fa-bars");
  toggle.classList.toggle("fa-times");
});
