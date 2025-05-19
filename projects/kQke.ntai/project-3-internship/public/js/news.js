const gallery = document.querySelector(".news-gallery");
const slides = document.querySelectorAll(".news-photo");
const totalSlides = slides.length;
let slideIndex = 3;

const leftButtons = document.querySelectorAll(".image-btn.left");
const rightButtons = document.querySelectorAll(".image-btn.right");
const btns = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".news-photo-content");
const dotsWrap = document.querySelector(".dots");

const dots = [];
slides.forEach(() => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotsWrap.appendChild(dot);
  dots.push(dot);
});

let autoScrollIntervalNews;

function initEventHandlers() {
  if (!gallery || !slides.length) return;

  leftButtons.forEach((btn) =>
    btn.addEventListener("click", () => changeSlide(-1))
  );

  rightButtons.forEach((btn) =>
    btn.addEventListener("click", () => changeSlide(1))
  );

  dots.forEach((dot, index) =>
    dot.addEventListener("click", () => goToSlide(index))
  );

  gallery.addEventListener("mouseenter", stopAutoScrollNews);
  gallery.addEventListener("mouseleave", startAutoScrollNews);

  startAutoScrollNews();
}

function changeSlide(direction) {
  slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
  updateGallery();
}

function goToSlide(index) {
  slideIndex = index;
  updateGallery();
}

function updateGallery() {
  if (totalSlides === 0) return;

  const style = getComputedStyle(gallery);
  const gap = parseFloat(style.gap);
  const widthCart = slides[0].offsetWidth + gap;

  gallery.style.transform = `translateX(-${slideIndex * widthCart}px)`;

  [slides, contents, btns].forEach((collection) => {
    collection.forEach((item, index) => {
      const isActive = index === slideIndex;
      item.style.opacity = isActive ? 1 : collection === slides ? 0.5 : 0;
      item.style.pointerEvents = isActive ? "auto" : "none";
      if (collection === btns)
        item.style.cursor = isActive ? "pointer" : "default";
    });
  });

  dots.forEach((dot, index) => {
    dot.style.backgroundColor = index === slideIndex ? "#007680" : "#c7c7c7";
    dot.style.pointerEvents = index === slideIndex ? "auto" : "none";
  });
}

function startAutoScrollNews() {
  stopAutoScrollNews();
  autoScrollIntervalNews = setInterval(() => changeSlide(1), 3000);
}

function stopAutoScrollNews() {
  clearInterval(autoScrollIntervalNews);
}

initEventHandlers();
updateGallery();
