const nav = document.querySelector(".navigation");
const closeBtn = document.querySelector(".burger_close");
const openBtn = document.querySelector(".burger_open");

openBtn.addEventListener("click", () => {
  nav.setAttribute("data-opened", "true");
});

closeBtn.addEventListener("click", () => {
  nav.setAttribute("data-opened", "false");
});

// $function () {
//   /* Fixed Header */
//   let header = $("#header");
//   let intro = $("#intro");
//   let introH;
//   let scrollPos = $(window).scrollTop();

//   $(windom).on("scroll load resize", function () {
//     introH = intro.innerHeight();
//     scrollPos = $(this).scrollTop();

//     checkScroll(scrollPos, introH);
//   });

function checkScroll() {
  if (scrollPos > introH) {
    header.addClass("fixed");
  } else {
    header.removeClass("fixed");
  }
}
/* Smooth Scroll */
$("[data-scroll]").on("click", function (event) {
  event.preventDefault();

  let elementId = $(this).data("scroll");
  let elementOffset = $(elementId).offset().top;

  $("html, body").animate({
    scrollTop: elementOffset - 70,
  });

  console.log(elementOffset);
});
