const serviceSubjects = {
  agro: {
    "Консультация по специальности": [
      "Информатика",
      "Строительство",
      "Организация перевозок",
      "Движения и эксплуатация транспорта",
      "Горное дело",
      "Информационные системы",
      "Вычислительная техника",
      "Программное обеспечение",
    ],
  },
  pedagogical: {
    "Консультация по специальности": [
      "Переводческое дело",
      "Русский язык и литература",
      "Казахский язык и литература",
      "Социальная работа",
      "Библиотековедение и библиография",
      "Математика",
      "Физика",
      "Биология",
      "Биотехнология",
      "Химия",
      "Педагогика и методика начального обучения",
      "География",
      "Психология",
      "Экология",
      "Педагогика и психология",
      "Дошкольное обучение и воспитание",
      "История",
      "Финансы",
      "Менеджмент",
    ],
  },
  "business-law": {
    "Консультация по специальности": [
      "Туризм",
      "Физическая культура и спорт",
      "Дизайн",
      "Изобразительное искусство и черчение",
      "Профессиональное обучение",
      "Юриспруденция",
      "Основы права и экономики",
      "Учет и аудит",
      "Экономика",
    ],
  },
};

let queue = [];
let lastQueueNumber = 0;

function updateServices() {
  const instituteSelect = document.getElementById("institute");
  const serviceSelect = document.getElementById("service");
  serviceSelect.innerHTML = '<option value="">-- Выберите услугу --</option>';
  serviceSelect.disabled = true;

  const selectedInstitute = instituteSelect.value;
  if (selectedInstitute) {
    serviceSelect.disabled = false;
    Object.keys(serviceSubjects[selectedInstitute]).forEach((service) => {
      const option = document.createElement("option");
      option.value = service;
      option.textContent = service;
      serviceSelect.appendChild(option);
    });
  }
  updateSubjects();
}

function updateSubjects() {
  const serviceSelect = document.getElementById("service");
  const subjectSelect = document.getElementById("subject");
  subjectSelect.innerHTML = '<option value="">-- Выберите предмет --</option>';
  subjectSelect.disabled = true;

  const selectedInstitute = document.getElementById("institute").value;
  const selectedService = serviceSelect.value;

  if (selectedInstitute && selectedService) {
    subjectSelect.disabled = false;
    serviceSubjects[selectedInstitute][selectedService].forEach((subject) => {
      const option = document.createElement("option");
      option.value = subject;
      option.textContent = subject;
      subjectSelect.appendChild(option);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const queueList = document.getElementById("queue-list");
  const callButton = document.getElementById("call-ticket");

  callButton.addEventListener("click", function () {
    const ticketNumber = prompt("Введите номер талона:");
    const windowNumber = prompt("Введите номер окна:");

    if (ticketNumber && windowNumber) {
      addTicketToQueue(ticketNumber, windowNumber);
      openPopup(ticketNumber, windowNumber);
    }
  });

  function addTicketToQueue(ticket, windowNum) {
    const ticketItem = document.createElement("div");
    ticketItem.classList.add("ticket-item");
    ticketItem.innerHTML = `<span class='ticket-number'>${ticket}</span> → <span class='window-number'>${windowNum}</span>`;

    const serveButton = document.createElement("button");
    serveButton.innerText = "Обслужен";
    serveButton.addEventListener("click", function () {
      queueList.removeChild(ticketItem);
    });

    ticketItem.appendChild(serveButton);
    queueList.appendChild(ticketItem);
    animateTicket(ticketItem);
  }
});

function addToQueue() {
  const institute = document.getElementById("institute").value;
  const service = document.getElementById("service").value;
  const subject = document.getElementById("subject").value;
  const datetime = document.getElementById("datetime").value;

  if (!institute || !service || !subject || !datetime) {
    alert("Пожалуйста, заполните все поля");
    return;
  }

  lastQueueNumber++;
  const queueItem = {
    id: lastQueueNumber,
    institute,
    service,
    subject,
    datetime,
    status: "Ожидание",
  };

  queue.push(queueItem);
  saveQueueToStorage();
  updateQueueDisplay();
  showConfirmation(queueItem);
  printTicket(queueItem);
}
function openCalledWindow() {
  document.getElementById("calledWindow").style.display = "block";
  updateCalledQueueDisplay();
}

function closeCalledWindow() {
  document.getElementById("calledWindow").style.display = "none";
}

function openAllCalledQueueWindow() {
  document.getElementById("allCalledQueueWindow").style.display = "block";
  updateAllCalledQueueDisplay();
}

function closeAllCalledQueueWindow() {
  document.getElementById("allCalledQueueWindow").style.display = "none";
}

function updateAllCalledQueueDisplay() {
  const allCalledQueueList = document.getElementById("allCalledQueueList");
  allCalledQueueList.innerHTML = queue
    .filter((item) => item.status === "Вызван")
    .map(
      (item) => `
      <div class="queue-item">
        <p><strong>Номер:</strong> ${item.id}</p>
        <p><strong>Услуга:</strong> ${item.service}</p>
        <p><strong>Предмет:</strong> ${item.subject}</p>
        <p><strong>Дата и время:</strong> ${new Date(
          item.datetime
        ).toLocaleString()}</p>
      </div>
    `
    )
    .join("");
}

function callNext(index) {
  if (queue[index]) {
    queue[index].status = "Вызван";
    saveQueueToStorage();
    updateQueueDisplay();
    updateCalledQueueDisplay();
    updateAllCalledQueueDisplay();
    alert(`Вызван №${queue[index].id}`);
  }
}

function openQueueWindow() {
  document.getElementById("queueWindow").style.display = "block";
  updateQueueDisplay();
}

function closeQueueWindow() {
  document.getElementById("queueWindow").style.display = "none";
}

function updateQueueDisplay() {
  const queueList = document.getElementById("queueList");
  queueList.innerHTML = queue
    .filter((item) => item.status !== "Вызван")
    .map(
      (item) => `
      <div class="queue-item">
        <p><strong>Номер:</strong> ${item.id}</p>
        <p><strong>Услуга:</strong> ${item.service}</p>
        <p><strong>Предмет:</strong> ${item.subject}</p>
        <p><strong>Дата и время:</strong> ${new Date(
          item.datetime
        ).toLocaleString()}</p>
      </div>
    `
    )
    .join("");
}

function printTicket(queueItem) {
  const ticketContent = `
    <div style="text-align: center; font-family: Arial, sans-serif;">
      <h2>Электронная очередь</h2>
      <p><strong>Номер:</strong> ${queueItem.id}</p>
      <p><strong>Услуга:</strong> ${queueItem.service}</p>
      <p><strong>Предмет:</strong> ${queueItem.subject}</p>
      <p><strong>Дата и время:</strong> ${new Date(
        queueItem.datetime
      ).toLocaleString()}</p>
      <p>Спасибо за обращение!</p>
    </div>
  `;

  const printWindow = window.open("", "_blank");
  printWindow.document.write(ticketContent);
  printWindow.document.close();
  printWindow.print();
}

function updateQueueDisplay() {
  const queueList = document.getElementById("currentQueueList");
  queueList.innerHTML = queue
    .map(
      (item, index) => `
    <div class="queue-item">
    <div>
    №${item.id} - ${item.service} → ${item.subject} (${new Date(
        item.datetime
      ).toLocaleString()})
    <br><strong>Статус:</strong> ${item.status}
    </div>
    <div>
    <button onclick="callNext(${index})">Вызвать</button>
    <button onclick="markAsServed(${index})">Обслужен</button>
    </div>
    </div>
  `
    )
    .join("");
}

function showConfirmation(queueItem) {
  document.getElementById("queueNumber").textContent = queueItem.id;
  document.getElementById("serviceInfo").textContent = queueItem.service;
  document.getElementById("subjectInfo").textContent = queueItem.subject;
  document.getElementById("scheduledTime").textContent = new Date(
    queueItem.datetime
  ).toLocaleString();
  document.getElementById("confirmationModal").style.display = "block";
}

function closeModal() {
  document.getElementById("confirmationModal").style.display = "none";
}

function openQueueWindow() {
  document.getElementById("queueWindow").style.display = "block";
  updateQueueDisplay();
}

function closeQueueWindow() {
  document.getElementById("queueWindow").style.display = "none";
}

function callNext(index) {
  if (queue[index]) {
    queue[index].status = "Вызван";
    saveQueueToStorage();
    updateQueueDisplay();
    alert(`Вызван №${queue[index].id}`);
  }
}

function markAsServed(index) {
  queue.splice(index, 1);
  saveQueueToStorage();
  updateQueueDisplay();
}

function saveQueueToStorage() {
  localStorage.setItem("queue", JSON.stringify(queue));
}

function loadQueueFromStorage() {
  const savedQueue = localStorage.getItem("queue");
  if (savedQueue) {
    queue = JSON.parse(savedQueue);
    lastQueueNumber = queue.length ? queue[queue.length - 1].id : 0;
    updateQueueDisplay();
  }
}
