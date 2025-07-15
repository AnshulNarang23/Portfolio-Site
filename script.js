const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

var tl = gsap.timeline();
tl.from(".hero", {
  y: -30,
  opacity: 0,
  duration: 2,
  delay: 0.5,
});
