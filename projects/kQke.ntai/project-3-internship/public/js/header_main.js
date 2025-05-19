const header = document.querySelector(".navbar_mobile");
const openBtn = document.querySelector(".burger");

openBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  header.style.transform = "translateX(0px)";
});

document.addEventListener("click", (e) => {
  if (!header.contains(e.target)) {
    header.style.transform = "translateX(100%)";
  }
});

menu.addEventListener("click", (e) => {
  e.stopPropagation();
});
