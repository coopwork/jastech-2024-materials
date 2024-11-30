import { Request } from "./app.js";

const api = new Request("https://jsonplaceholder.typicode.com");

function loadUsers() {
  api
    .get("/users")
    .then((users) => displayUsers(users))
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
}

function displayUsers(users) {
  const usersContainer = document.getElementById("usersContainer");
  usersContainer.innerHTML = "";

  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");
    userCard.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: <a href="mailto:${user.email}">${user.email}</a></p>
      <p>Phone: ${user.phone}</p>
      <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
    `;
    usersContainer.appendChild(userCard);
  });
}

window.onload = loadUsers;
