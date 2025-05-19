const galleryReview = document.querySelector(".reviews__gallery");
const slidesReview = document.querySelectorAll(".reviews__card");
const totalSlidesReview = slidesReview.length;

if (!galleryReview || !slidesReview.length) {
  console.error("Gallery or slides not found!");
}

let slideIndexReview = 1;
let autoScrollIntervalReviews;

const rightButtonsReview = document.querySelectorAll(
  ".reviews__gallery__btn__right"
);
const leftButtonsReview = document.querySelectorAll(
  ".reviews__gallery__btn__left"
);

function initEventHandlersReview() {
  if (!galleryReview || !slidesReview.length) return;

  leftButtonsReview.forEach((btn) =>
    btn.addEventListener("click", () => changeSlideReview(-1))
  );

  rightButtonsReview.forEach((btn) =>
    btn.addEventListener("click", () => changeSlideReview(1))
  );

  galleryReview.addEventListener("mouseenter", stopAutoScrollReviews);
  galleryReview.addEventListener("mouseleave", startAutoScrollReviews);

  startAutoScrollReviews();
}

function changeSlideReview(direction) {
  slideIndexReview =
    (slideIndexReview + direction + totalSlidesReview) % totalSlidesReview;
  updateGalleryReview();
}

function updateGalleryReview() {
  if (!galleryReview || !totalSlidesReview) return;

  const styleReview = getComputedStyle(galleryReview);
  const gapReview = parseFloat(styleReview.gap);
  const widthCartReview = slidesReview[0].offsetWidth + gapReview;

  galleryReview.style.transform = `translateX(-${
    slideIndexReview * widthCartReview
  }px)`;
}

function startAutoScrollReviews() {
  stopAutoScrollReviews();
  autoScrollIntervalReviews = setInterval(() => changeSlideReview(1), 3000);
}

function stopAutoScrollReviews() {
  clearInterval(autoScrollIntervalReviews);
}

initEventHandlersReview();
updateGalleryReview();
