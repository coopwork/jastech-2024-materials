document.querySelectorAll(".city-list button").forEach((button) => {
  const img = button.querySelector("img");

  button.addEventListener("mouseenter", () => {
    img.src = "../../public/images/blue-map-pin.png";
  });

  button.addEventListener("mouseleave", () => {
    img.src = "../../public/images/black-map-pin.png";
  });
});

const cityData = {
  "г. Астана": {
      contactPerson: "Ажибаев Адильхан Муратович",
      department: "Отдел сопровождения проектов",
      phones: [
          { number: "87172919087 (7117)", img: "../../public/images/phone.png" },
          { number: "8 705 707 1482", img: "../../public/images/phone.png" }
      ],
      email: { address: "adil.hearby@gmail.com", img: "../../public/images/mail.png" }
  },
  "г. Алматы": {
      contactPerson: "Урасаева Самал Маратовна",
      department: "Бэк офис",
      phones: [
          { number: "87078594483 (7513)", img: "../../public/images/phone.png" }
      ],
      email: { address: "s.urasaeva@atameken.kz", img: "../../public/images/mail.png" }
  },
  "г. Шымкент": {
      contactPerson: "Алтынбек Нұрсұлтан Мақсатұлы",
      department: "Отдел отраслевого развития и сопровождения проектов",
      phones: [
          { number: "87020000760", img: "../../public/images/phone.png" }
      ],
      email: { address: "Project-support.cit@atameken.kz", img: "../../public/images/mail.png" }
  },
  "Абайская область": {
    contactPerson: "Адамбаев Рахмет Рымбекович",
    department: "Отдел по отраслевому развитию",
    phones: [
        { number: "87473275040", img: "../../public/images/phone.png" }
    ],
    email: { address: "abai@atameken.kz", img: "../../public/images/mail.png" }
  },
  "Акмолинская область": {
    contactPerson: "Саниева Анар Камбарбековна",
    department: "Отдел нефинансовой поддержки",
    phones: [
        { number: "87162722488", img: "../../public/images/phone.png" },
        { number: "87075209085", img: "../../public/images/phone.png" }
    ],
    email: { address: "a.saniyeva@atameken.kz", img: "../../public/images/mail.png" }
  },
  "Алматинская область": {
    contactPerson: "Константинова Елена Владимировна",
    department: "Административный отдел",
    phones: [
        { number: "+7 701 938 0259", img: "../../public/images/phone.png" }
    ],
    email: { address: "почта отсутствует", img: "../../public/images/mail.png" }
  },
  "Актюбинская область": {
    contactPerson: "Смагулова Динара Шохановна",
    department: "Отдел сопровождения проектов",
    phones: [
        { number: "8 (7132) 744-607 (1502)", img: "../../public/images/phone.png" },
        { number: "8(771)2299111", img: "../../public/images/phone.png" }
    ],
    email: { address: "d.izbaskanova@atameken.kz", img: "../../public/images/mail.png" }
  },
  "Атырауская область": {
    contactPerson: "Тлемисова Толкын Аскаровна",
    department: "Отдел сопровождения проектов",
    phones: [
        { number: "87122763668 (2306)", img: "../../public/images/phone.png" },
        { number: "77012225041", img: "../../public/images/phone.png" }
    ],
    email: { address: "t.tlemisaova@atameken.kz", img: "../../public/images/mail.png" }
  },
  "Восточно-Казахстанская область": {
    contactPerson: "Аманбаева Инкар Ержановна",
    department: "Отдел сопровождения проектов",
    phones: [
        { number: "87232-225-919 (6302)", img: "../../public/images/phone.png" },
        { number: "8-705-193-70-70", img: "../../public/images/phone.png" }
    ],
    email: { address: "почта отсутствует", img: "../../public/images/mail.png" }
  },
  "Жамбылская область": {
    contactPerson: "Оспанов Бақытжан Асанұлы",
    department: "Административный отдел",
    phones: [
        { number: "+7 747 204 0507", img: "../../public/images/phone.png" }
    ],
    email: { address: "ba.ospanov@atameken.kz", img: "../../public/images/mail.png" }
  },
  "Жетысуская область": {
    contactPerson: "Тортаева Салтанат Нургалиевна",
    department: "Отдел отраслевого развития",
    phones: [
        { number: "8(7282)401-498 (1610)", img: "../../public/images/phone.png" },
        { number: "87012527727", img: "../../public/images/phone.png" }
    ],
    email: { address: "почта отсутствует", img: "../../public/images/mail.png" }
  },
  "Западно-Казахстанская область": {
    contactPerson: "Утешева Эльмира Бисембаевна",
    department: "Отдел отраслевых советов и сопровождения проектов",
    phones: [
        { number: "8 7112 243078 вн. 2708", img: "../../public/images/phone.png" },
        { number: "8 777 587 8046", img: "../../public/images/phone.png" }
    ],
    email: { address: "e.utesheva@atameken.kz", img: "../../public/images/mail.png" }
  },
  "Карагандинская область": {
    contactPerson: "Юн Татьяна Леонидовна",
    department: "Бэк офис",
    phones: [
        { number: "+77754789481", img: "../../public/images/phone.png" },
        { number: "7212506435 (вн. 3519)", img: "../../public/images/phone.png" }
    ],
    email: { address: "t.yun@atamen.kz", img: "../../public/images/mail.png" }
  },
  "Костанайская область": {
    contactPerson: "Юсупов Роберт Ринатович",
    department: "Отдел сопровождения проектов",
    phones: [
        { number: "8(7142)39-42-08 (3911)", img: "../../public/images/phone.png" },
        { number: "+77772684708", img: "../../public/images/phone.png" }
    ],
    email: { address: "r.ysupov@atameken.kz", img: "../../public/images/mail.png" }
  },
  "Кызылординская область": {
    contactPerson: "Тютебаева Малика Калмуратовна",
    department: "Отдел сопровождения проектов",
    phones: [
        { number: "8(7242)400981 (внутр.4327)", img: "../../public/images/phone.png" },
        { number: "87079885080", img: "../../public/images/phone.png" }
    ],
    email: { address: "malika_tyutebayeva@mail.ru", img: "../../public/images/mail.png" }
  },
  "Павлодарская область": {
    contactPerson: "Искакова Диана Николаевна",
    department: "Отдел сопровождения проектов",
    phones: [
        { number: "+7 701-871-45-65", img: "../../public/images/phone.png" },
        { number: "8(7182)66-03-11(5508)", img: "../../public/images/phone.png" }
    ],
    email: { address: "project-support.pwq@atameken.kz", img: "../../public/images/mail.png" }
  },
  "Северо-Казахстанская область": {
    contactPerson: "Дудаев Магамед Хусайнович",
    department: "Отдел сопровождения проектов",
    phones: [
        { number: "8(7152)50-35-87, вн.5910", img: "../../public/images/phone.png" },
        { number: "87471980194", img: "../../public/images/phone.png" },
        { number: "87056531956", img: "../../public/images/phone.png" }
    ],
    email: { address: "почта отсутствует", img: "../../public/images/mail.png" }
  },
  "Мангистауская область": {
    contactPerson: "Сарбаева Назгуль Нурбосиновна",
    department: "Отдел развития человеческого капитала",
    phones: [
        { number: "8 (7292) 304040 (4725)", img: "../../public/images/phone.png" },
        { number: "8 702 1575937", img: "../../public/images/phone.png" }
    ],
    email: { address: "n.sarbayeva@atameken.kz", img: "../../public/images/mail.png" }
  },
  "Улытауская область": {
    contactPerson: "Есембекова Данагуль Кайратовна",
    department: "Отдел по развитию малого предпринимательства",
    phones: [
        { number: "87059173292", img: "../../public/images/phone.png" }
    ],
    email: { address: "d.yesembekova@atameken.kz", img: "../../public/images/mail.png" }
  },
  "Туркестанская область": {
    contactPerson: "Қали Жанель Қайратқызы",
    department: "Отдел сопровождения проектов",
    phones: [
        { number: "8 (72533) 5-98-98 (7718)", img: "../../public/images/phone.png" },
        { number: "+77770060909", img: "../../public/images/phone.png" }
    ],
    email: { address: "g.kali@atameken.kz", img: "../../public/images/mail.png" }
  }
};

document.querySelectorAll('.city-list button').forEach(button => {
  button.addEventListener('click', () => {
      const cityName = button.textContent.trim();
      const detailsContainer = document.querySelector('.details');

      if (cityData[cityName]) {
          const data = cityData[cityName];

          detailsContainer.innerHTML = `
              <p class="details-top">Контакты в  ${cityName}</p>
              <p class="details-2">${data.department}</p>
              <p class="details-3">Ответственный</p>
              <p class="details-4">${data.contactPerson}</p>
              <div class="phones">
                  <div class="phone-1">
                      ${data.phones.map(phone => `
                          <p><img src="${phone.img}" alt="Phone Icon"> ${phone.number}</p>
                      `).join('')}
                  </div>
                  <p><img src="${data.email.img}" alt="Mail Icon"> ${data.email.address}</p>
              </div>
          `;
      }
  });
});

