const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
const navbar = document.querySelector('.navbar');

// Toggle menu + overlay
hamburger.addEventListener("click", () => {
  if (mobileMenu.style.display === "flex") {
    mobileMenu.style.display = "none";
    overlay.style.display = "none";
  } else {
    mobileMenu.style.display = "flex";
    overlay.style.display = "block";
    updateMenuPosition(); // adjust on open
  }
});

// Close when clicking outside
overlay.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  overlay.style.display = "none";
});

// Function to update positions
function updateMenuPosition() {
  const navbarHeight = navbar.offsetHeight;

  // Menu sits below navbar
  mobileMenu.style.top = navbarHeight + "px";

  // Overlay starts below navbar and covers rest of screen
  overlay.style.top = navbarHeight + "px";
  overlay.style.height = `calc(100vh - ${navbarHeight}px)`;
}

// Run once on load
updateMenuPosition();

// Run again if window resizes
window.addEventListener('resize', updateMenuPosition);
