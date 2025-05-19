document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".commision__people");
  const slides = document.querySelectorAll(".commision__person");
  const styleCompanies = getComputedStyle(gallery);
  const gapCompanies = parseFloat(styleCompanies.gap);
  const totalSlides = slides.length;
  const slideWidth = slides[0].offsetWidth + gapCompanies;
  let slideIndex = 0;
  let autoScroll;

  console.log(slideWidth);

  const btnLeft = document.querySelector(".slider-btn-left");
  const btnRight = document.querySelector(".slider-btn-right");

  function changeSlide(direction, isAuto = false) {
    if (isAuto) {
      slideIndex = (slideIndex + 1) % totalSlides;
    } else {
      slideIndex += direction;
      if (slideIndex < 0) slideIndex = totalSlides - 1;
      if (slideIndex >= totalSlides) slideIndex = totalSlides - 1;
    }

    updateGallery();
  }

  function updateGallery() {
    const offset = -slideIndex * slideWidth;
    gallery.style.transform = `translateX(${offset}px)`;
  }

  function startAutoScroll() {
    stopAutoScroll();
    autoScroll = setInterval(() => changeSlide(1, true), 3000);
  }

  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  if (btnLeft && btnRight) {
    btnLeft.addEventListener("click", () => changeSlide(-1));
    btnRight.addEventListener("click", () => changeSlide(1));
  }

  gallery.addEventListener("mouseenter", stopAutoScroll);
  gallery.addEventListener("mouseleave", startAutoScroll);

  startAutoScroll();
  updateGallery();
});
