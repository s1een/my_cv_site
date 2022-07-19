// Show Menu
function showMenu(toggleClass, navClass) {
  const toggle = document.querySelector(toggleClass);
  nav = document.querySelector(navClass);
  if (toggleClass && navClass) {
    toggle.addEventListener("click", (e) => {
      nav.classList.toggle("show-menu");
    });
  }
}

showMenu("#nav-toggle", "#nav-menu");

// Remove Menu
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((element) => {
  element.addEventListener("click", removeMenu);
});
function removeMenu() {
  const navBar = document.querySelector("#nav-menu");
  navBar.classList.remove("show-menu");
}

// Scroll Section
// Get all sections with id
const sections = document.querySelectorAll("section[id]");
scrollActive();
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((el) => {
    const sectionHeight = el.offsetHeight;
    const sectionTop = el.offsetTop - 50;
    let sectionId = el.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.add("active-link");
      document;
    } else {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// Show scroll top
window.addEventListener("scroll", scrollTop);
function scrollTop() {
  const userScroll = document.querySelector("#scroll-top");
  if (this.scrollY >= 200) userScroll.classList.add("show-scroll");
  else userScroll.classList.remove("show-scroll");
}

// Dark Mode
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
