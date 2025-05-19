document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.querySelector(".toggle-password");
  const passwordInput = document.querySelector("#password");

  togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePassword.innerHTML = '<i class="bi bi-eye-slash"></i>';
    } else {
      passwordInput.type = "password";
      togglePassword.innerHTML = '<i class="bi bi-eye"></i>';
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const parts = document.querySelectorAll(".part");

  parts.forEach((part) => {
    part.addEventListener("click", function (e) {
      e.preventDefault();

      parts.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
