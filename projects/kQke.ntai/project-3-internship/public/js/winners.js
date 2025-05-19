const container = document.querySelector(".information-container");
let isDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
  isDown = true;
  container.classList.add("active");
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
  isDown = false;
  container.classList.remove("active");
});

container.addEventListener("mouseup", () => {
  isDown = false;
  container.classList.remove("active");
});

container.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 1; // скорость прокрутки
  container.scrollLeft = scrollLeft - walk;
});

document.addEventListener("click", function (e) {
  const link = e.target.closest("[data-target]");
  if (!link) return; 

  e.preventDefault(); 

  const targetId = link.getAttribute("data-target");
  const target = document.getElementById(targetId);
  const container = document.querySelector(".information-container");

  if (target) {
    const targetY = target.getBoundingClientRect().top + window.scrollY;
    const targetX = target.offsetLeft;

    window.scrollTo({ top: targetY, behavior: "smooth" });
    container.scrollTo({ left: targetX, behavior: "smooth" });
  }
});

