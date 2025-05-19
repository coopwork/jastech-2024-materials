const items = document.querySelectorAll(".news_pagination_item");
const prevBtn = document.querySelector(".news_pagination_prev");
const nextBtn = document.querySelector(".news_pagination_next");

let currentIndex = 0;

function setActive(index) {
  if (index < 0 || index >= items.length) return;
  items.forEach((i) => i.classList.remove("active"));
  items[index].classList.add("active");
  currentIndex = index;
}

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    setActive(index);
  });
});

prevBtn.addEventListener("click", () => {
  setActive(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
  setActive(currentIndex + 1);
});
