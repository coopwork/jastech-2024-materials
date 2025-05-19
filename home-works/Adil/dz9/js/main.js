// Упражнение 1
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Сумма от 1 до 10:", sum);

// Упражнение 2
let n = 1;
while (true) {
  if (n % 7 === 0) {
    console.log("Первое число, делящееся на 7:", n);
    break;
  }
  n++;
}

// Упражнение 3
let i = 5;
while (i > 0) {
  console.log(i);
  i--;
}
console.log("Поехали!");

// Упражнение 4
let number = 7;
let result = number % 2 === 0 ? "Чётное" : "Нечётное";
console.log(result);

// Упражнение 5
let age = 17;
let access = age >= 18 ? "Доступ разрешён" : "Доступ запрещён";
console.log(access);