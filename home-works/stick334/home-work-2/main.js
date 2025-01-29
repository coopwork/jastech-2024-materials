function getNextUserId() {
    let currentId = localStorage.getItem("userIdCounter");

    if (currentId === null) {
        currentId = 1;
    } else {
        currentId = parseInt(currentId) + 1;
    }

    localStorage.setItem("userIdCounter", currentId);
    return currentId;
}

document.querySelector(".userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const user = {
        id: getNextUserId(),
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
    };

    localStorage.setItem("user", JSON.stringify(user));
    document.querySelector(".userForm").reset();
});

function fillFormWithUserData() {
    const userString = localStorage.getItem("user");

    if (userString) {
        const user = JSON.parse(userString);

        document.getElementById("firstName").value = user.firstName;
        document.getElementById("lastName").value = user.lastName;
        document.getElementById("email").value = user.email;
    }
}
