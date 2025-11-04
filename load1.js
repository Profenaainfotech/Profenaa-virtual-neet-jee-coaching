// load.js
document.addEventListener("DOMContentLoaded", function () {
  // Load Navbar
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (navbarPlaceholder) {
    fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
        navbarPlaceholder.innerHTML = data;
      })
      .catch(() => {
        navbarPlaceholder.innerHTML = "<p>⚠️ Navbar failed to load</p>";
      });
  }

  // Load Footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    fetch("footer.html")
      .then(response => response.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;
      })
      .catch(() => {
        footerPlaceholder.innerHTML = "<p>⚠️ Footer failed to load</p>";
      });
  }
});
