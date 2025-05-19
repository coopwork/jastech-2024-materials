const header = document.querySelector(".header_links_mobile");
const openBtn = document.querySelector(".header_links_mobile_btn");
const closeBtn = document.querySelector(".header_link_mobile_cross");

openBtn.addEventListener("click", () => {
  header.style.transform = "translateX(0px)";
});

closeBtn.addEventListener("click", () => {
  header.style.transform = "translateX(350px)";
});
