document.querySelector(".btn1").addEventListener("click", function () {
  document.getElementById("profileForm").style.display = "none";
  document.getElementById("contestTableContainer").style.display = "block";
});

document.querySelector(".btn2").addEventListener("click", function () {
  document.getElementById("contestTableContainer").style.display = "none";
  document.getElementById("profileForm").style.display = "block";
});

const contests = [
  {
    name: "Лучший товар Казахстана 2024",
    status: "Прием заявок",
    startDate: "21 Февраля 2024",
    endDate: "1 Июля 2024",
    link: "#",
  },
  {
    name: "Лучший дизайн Казахстана 2024",
    status: "Прием заявок",
    startDate: "15 Марта 2024",
    endDate: "1 Августа 2024",
    link: "#",
  },
  {
    name: "Лучший дизайн Казахстана 2024",
    status: "Прием заявок",
    startDate: "15 Марта 2024",
    endDate: "1 Августа 2024",
    link: "#",
  },
  {
    name: "Лучший дизайн Казахстана 2024",
    status: "Прием заявок",
    startDate: "15 Марта 2024",
    endDate: "1 Августа 2024",
    link: "#",
  },
  {
    name: "Лучший дизайн Казахстана 2024",
    status: "Прием заявок",
    startDate: "15 Марта 2024",
    endDate: "1 Августа 2024",
    link: "#",
  },
  {
    name: "Лучший дизайн Казахстана 2024",
    status: "Прием заявок",
    startDate: "15 Марта 2024",
    endDate: "1 Августа 2024",
    link: "#",
  },
  {
    name: "Лучший дизайн Казахстана 2024",
    status: "Прием заявок",
    startDate: "15 Марта 2024",
    endDate: "1 Августа 2024",
    link: "#",
  },
  {
    name: "Лучший дизайн Казахстана 2024",
    status: "Прием заявок",
    startDate: "15 Марта 2024",
    endDate: "1 Августа 2024",
    link: "#",
  },
  {
    name: "Лучший дизайн Казахстана 2024",
    status: "Прием заявок",
    startDate: "15 Марта 2024",
    endDate: "1 Августа 2024",
    link: "#",
  },
];

const tableBody = document.querySelector(".stats tbody");

contests.forEach((contest) => {
  const row = `
      <tr>
        <td><a href="${contest.link}">${contest.name}</a></td>
        <td>${contest.status}</td>
        <td>${contest.startDate}</td>
        <td>${contest.endDate}</td>
      </tr>
    `;
  tableBody.insertAdjacentHTML("beforeend", row);
});

// async function fetchContests() {
//   try {
//     const response = await fetch("https://api.site.kz/contests");
//     if (!response.ok) {
//       throw new Error("Ошибка при получении данных");
//     }
//     const contests = await response.json();
//     const tableBody = document.querySelector("#contestTable tbody");
//     tableBody.innerHTML = "";

// fetchContests();

// setInterval(fetchContests, 30000);
