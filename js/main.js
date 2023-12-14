const CARET_SNAKE = document.querySelector("#caret-left");
const MENU_BARS = document.querySelector("#menu-bars");

let sideMenu = document.querySelector(".side-menu");
let linkMenu = document.querySelectorAll(".nav-font a");
let linkSideMenu = document.querySelectorAll(".nav-side-menu a");

MENU_BARS.addEventListener("touchstart", () => {
  sideMenu.style.transform = "translateX(0)";
});
MENU_BARS.addEventListener("click", () => {
  sideMenu.style.transform = "translateX(0)";
});
CARET_SNAKE.addEventListener("touchend", () => {
  sideMenu.style.transform = "translateX(-100%)";
});
CARET_SNAKE.addEventListener("click", () => {
  sideMenu.style.transform = "translateX(-100%)";
});

linkMenu.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href").charAt(0) === "#") {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

linkSideMenu.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href").charAt(0) === "#") {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
