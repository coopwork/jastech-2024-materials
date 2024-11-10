document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userForm");
  const saveButton = document.getElementById("saveButton");
  const getButton = document.getElementById("getButton");

  const user = {
    id: 145,
    firstName: "Jack",
    lastName: "Black",
    email: "jack-black@gmail.com",
  };

  function clearForm() {
    form.id.value = "";
    form.firstName.value = "";
    form.lastName.value = "";
    form.email.value = "";
  }

  clearForm();

  // Функция для заполнения формы данными пользователя
  function fillForm(userData) {
    form.id.value = userData.id;
    form.firstName.value = userData.firstName;
    form.lastName.value = userData.lastName;
    form.email.value = userData.email;
  }

  // Функция для сохранения пользователя в localStorage
  function saveUser() {
    const userData = {
      id: form.id.value,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Данные сохранены в localStorage");
  }

  // Функция для получения пользователя из localStorage
  function getUser() {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      fillForm(JSON.parse(savedUser));
      alert("Данные пользователя получены из localStorage");
    } else {
      fillForm(user);
      alert("Данные пользователя получены из исходного объекта");
    }
  }

  saveButton.addEventListener("click", saveUser);
  getButton.addEventListener("click", getUser);
});
