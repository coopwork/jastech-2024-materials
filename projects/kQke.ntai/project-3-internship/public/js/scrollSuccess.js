const slider = document.querySelector(".success__cards");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; // скорость
  slider.scrollLeft = scrollLeft - walk;
});
