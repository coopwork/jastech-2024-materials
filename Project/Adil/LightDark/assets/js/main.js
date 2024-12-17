 const modal = document.getElementById("myModal");
 const btn = document.getElementById("ctaButton");
 const closeBtn = document.getElementById("closeModal");
 const themeSwitcher = document.getElementById("themeSwitcher");

 btn.onclick = function() {
     modal.style.display = "flex";
 }

 closeBtn.onclick = function() {
     modal.style.display = "none";
 }

 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

 themeSwitcher.onclick = function() {
    const body = document.body;
     if (body.classList.contains("light-mode")) {
         body.classList.remove("light-mode");
         body.classList.add("dark-mode");
         themeSwitcher.textContent = "Переключить на светлую тему";
     } else {
         body.classList.remove("dark-mode");
         body.classList.add("light-mode");
         themeSwitcher.textContent = "Переключить на темную тему";
     }
 }