GLightbox({
  touchNavigation: true,
  loop: true,
  openEffect: 'zoom',
  closeEffect: 'fade',
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".top_nav a");
  const breadcrumbText = document.getElementById("breadcrumb-text");
  const breadcrumbArrow = document.getElementById("breadcrumb-arrow");

  navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); 
          const sectionName = this.getAttribute("data-section"); 
          
          breadcrumbText.textContent = sectionName; 
          breadcrumbArrow.style.display = "inline"; 
      });
  });
});