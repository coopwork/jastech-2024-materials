document.querySelectorAll(".toggle-password").forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const targetId = eyeIcon.getAttribute("data-target");
    const passwordField = document.getElementById(targetId);

    if (passwordField.type === "password") {
      passwordField.type = "text";
      eyeIcon.innerHTML = '<i class="bi bi-eye-slash"></i>';
    } else {
      passwordField.type = "password";
      eyeIcon.innerHTML = '<i class="bi bi-eye"></i>';
    }
  });
});
