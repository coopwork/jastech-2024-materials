const allNewsContent = document.querySelectorAll(".news_item_content");
const allBtns = document.querySelectorAll(".news_item_info_btn");

allBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const content = allNewsContent[index];
    const secondChild = content.children[1];
    const thirdChild = content.children[2];
    const icon = btn.children[0];

    const isVisible = secondChild.style.display === "block";

    if (isVisible) {
      secondChild.style.display = "none";
      thirdChild.style.display = "none";
      icon.style.transform = "rotate(180deg)";
    } else {
      secondChild.style.display = "block";
      thirdChild.style.display = "block";
      icon.style.transform = "rotate(0deg)";
    }
  });
});
