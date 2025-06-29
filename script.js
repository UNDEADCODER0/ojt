function toggleNav() {
  var nav = document.getElementById("myTopnav");
  nav.classList.toggle("responsive");
}

// Keyboard accessibility for navbar toggle
document.getElementById("navToggleBtn").addEventListener("keydown", function(e) {
  if (e.key === "Enter" || e.key === " ") {
    toggleNav();
  }
});
