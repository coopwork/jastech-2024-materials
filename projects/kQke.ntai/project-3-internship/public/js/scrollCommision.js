const scrollArea = document.querySelector(".commision__people");
let isDragging = false;
let dragStartX;
let initialScrollX;

scrollArea.addEventListener("mousedown", (event) => {
  isDragging = true;
  scrollArea.classList.add("dragging");
  dragStartX = event.pageX - scrollArea.offsetLeft;
  initialScrollX = scrollArea.scrollLeft;
  scrollArea.style.cursor = "grabbing";
});

scrollArea.addEventListener("mouseleave", () => {
  isDragging = false;
  scrollArea.style.cursor = "grab";
});

scrollArea.addEventListener("mouseup", () => {
  isDragging = false;
  scrollArea.style.cursor = "grab";
});

scrollArea.addEventListener("mousemove", (event) => {
  if (!isDragging) return;
  event.preventDefault();
  const currentX = event.pageX - scrollArea.offsetLeft;
  const scrollDelta = (currentX - dragStartX) * 3;
  scrollArea.scrollLeft = initialScrollX - scrollDelta;
});
