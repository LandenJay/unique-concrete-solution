const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");
const menuLinks = document.querySelectorAll(".mobile-menu a");

function openMenu() {
  menuBtn.classList.add("open");
  mobileMenu.classList.add("open");
  menuOverlay.classList.add("open");
  document.body.classList.add("menu-open");
  menuBtn.setAttribute("aria-label", "Close menu");
}

function closeMenu() {
  menuBtn.classList.remove("open");
  mobileMenu.classList.remove("open");
  menuOverlay.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuBtn.setAttribute("aria-label", "Open menu");
}

menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuOverlay.addEventListener("click", closeMenu);

menuLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMenu();
  }
});