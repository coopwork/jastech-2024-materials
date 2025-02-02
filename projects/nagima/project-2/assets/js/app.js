document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navList = document.querySelector(".nav-list");

  mobileMenuBtn.addEventListener("click", () => {
    navList.classList.toggle("active");

    // Animate hamburger to X
    const spans = mobileMenuBtn.querySelectorAll("span");
    spans.forEach((span) => span.classList.toggle("active"));
  });

  // Handle navigation active states
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove("active"));
      // Add active class to clicked link
      e.target.classList.add("active");

      // Close mobile menu if open
      if (navList.classList.contains("active")) {
        navList.classList.remove("active");
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav") && navList.classList.contains("active")) {
      navList.classList.remove("active");
    }
  });
});
