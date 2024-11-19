// ОСНОВНЫЕ БАЗОВЫЕ ТИПЫ В JS

const myString = 'строка'
const myNumber = 15
const bool = true
const myObject = {}
const myArray = []


// console.log(typeof myString)
// console.log(typeof myNumber)
// console.log(typeof myObject)
// console.log(Array.isArray(myArray));


// console.log([1, 2, 3] == [1, 2, 3]);
// console.log(5 !== 5);

// console.log(123 === +'123');
// console.log(Number('123'));

// console.log('123' === 123 + '');

// console.log(+'5e');

const obj = {
  key: 'first key',
  "Ключ 2": "Second key",
  arr: [1, 2, 3, 4, 5],
  num: 555
}

obj.newKey = 'new KEY'
// obj['new Key'] = 'NEW KEY'

delete obj.newKey

// console.log(obj);


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Удаление последнего элемента в массиве:
arr.pop()

// Удаление первого элемента в массиве:
arr.shift()

arr.push('199')

// console.log(arr[25] = 'wadaw');

// console.log(arr);


const userStr = '-'

const str = '-'

// console.log(str.toLowerCase() === userStr.toUpperCase());

const strInc = 'если подряд Несколько раз написать?'

// Замена подстроки в строке на новую
// console.log('Старая строка:', strInc);
// console.log('Новая строка:', strInc.replace('несколько', 'много'));

// Поиск подстроки в строке
// console.log(strInc.toLowerCase().includes('несколько'));


// console.log(typeof myString)


// ДЗ:




// Ознакомиться с базовыми циклами

// for
const array = [1, 2, 3, 4, 5];
for (let index = 0; index < array.length; index++) {
  const element = array[index];

  if (element === 13) {
    console.log(element, index, true);
  }

}

// while
const arr2 = [1, 2, 3, 4, 5, 6]
const condition = false;
while (arr2.length > 2) {
  arr2.pop()
}

// console.log(arr2);



// if (false) {
//   console.log('if');
// } else if (true) {
//   console.log('else if');
// } else {
//   console.log('else');
// }

// console.log(true ? 'if' : 'else');



// console.log(+'5' + +'5');
console.log(!!obj.key);
