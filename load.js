
// load.js

document.addEventListener("DOMContentLoaded", function () {

  // Load Navbar HTML dynamically
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // After navbar is loaded, load navbar.css dynamically
      const cssLink = document.createElement("link");
      cssLink.rel = "stylesheet";
      cssLink.href = "navbar.css";
      document.head.appendChild(cssLink);

      // Wait a bit to ensure CSS loads before initializing JS
      setTimeout(initNavbar, 200);
    })
    .catch(error => console.error("Error loading navbar:", error));

  // Navbar functionality (mobile + dropdowns)
  function initNavbar() {
    const menuIcon = document.getElementById("menu-icon");
    const navbarLinks = document.getElementById("navbar-links");
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");
    let isMobile = window.innerWidth <= 768;

    if (!menuIcon || !navbarLinks) return;

    // Toggle mobile menu
    menuIcon.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
    });

    // Dropdown toggle for mobile
    dropdownBtns.forEach(btn => {
      btn.addEventListener("click", function (e) {
        if (isMobile) {
          e.stopPropagation();
          const dropdownContent = this.nextElementSibling;
          dropdownContent.classList.toggle("active");
        }
      });
    });

    // Close dropdown when clicking outside (mobile only)
    document.addEventListener("click", function (e) {
      if (isMobile && !e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown-content.active").forEach(content => {
          content.classList.remove("active");
        });
      }
    });

    // Adjust when resizing window
    window.addEventListener("resize", function () {
      isMobile = window.innerWidth <= 768;
      if (!isMobile) {
        document.querySelectorAll(".dropdown-content").forEach(content => content.classList.remove("active"));
        navbarLinks.classList.remove("active");
      }
    });
  }

//   setTimeout(() => {
//   const enrollBtn = document.querySelector(".login-btn");
//   const overlay = document.getElementById("overlay");
//   const closeBtn = document.getElementById("closeBtn");

//   if (enrollBtn && overlay && closeBtn) {
//     enrollBtn.addEventListener("click", (e) => {
//       e.preventDefault();
//       overlay.style.display = "flex";
//     });

//     closeBtn.addEventListener("click", () => {
//       overlay.style.display = "none";
//     });
//   }
// }, 500);

});

