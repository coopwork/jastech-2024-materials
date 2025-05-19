// Синтаксис
function* myGenerator() {
  yield 'A';
  yield 'B';
  yield 'C';
}

function* generatorExample() {
  console.log("Старт");
  yield 1;
  console.log("После первого yield");
  yield 2;
  console.log("Завершение");
  yield 3;
}

const gen = generatorExample();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Генератор в for...of
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

for (let num of numbers()) {
  console.log(num); // 1, 2, 3
}

// Пример с бесконечным генератором:
function* infiniteCounter() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

const counter = infiniteCounter();
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3

// Генератор + внешний ввод:
function* echo() {
  const name = yield "Как тебя зовут?";
  yield `Привет, ${name}!`;
}

const dialogue = echo();
console.log(dialogue.next().value);       // Как тебя зовут?
console.log(dialogue.next("Антон").value); // Привет, Антон!
