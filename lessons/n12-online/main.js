
const foresights = [
  "У тебя будет хороший день!",
  "Ты выучишь JavaScript",
  "Ты напишешь свой первый сайт",
  "Ты выучишь React",
  "У тебя будет всё получаться!",
  "У тебя будет 1000 звезд на gitHub",
  "Твой репозиторий соберет миллион просмотров",
  "Ты сделаешь красивый дизайн",
  "У тебя будет классное портфолио",
  "Ты научишься перебирать массивы",
];


const elements = {
  foresight: document.querySelector('.app__foresight'),
  getForesightBtn: document.querySelector('.app__button'),
};


elements.getForesightBtn.addEventListener('click', getForesight)

function getForesight() {
  elements.foresight.textContent = foresights[getRandomNumber(10)]
}

function getRandomNumber(max) {
  return Math.trunc(Math.random() * (max))
}
