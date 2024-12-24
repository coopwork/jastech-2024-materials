// MAP
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
// console.log("numbers:", numbers);
// console.log("map:", doubled);


// FILTER
const ages = [12, 18, 20, 15, 25];
const adults = ages.filter(age => age >= 18);
// console.log("ages:", ages);
// console.log("filter:", adults);


// REDUCE
const prices = [10, 20, 30];
const total = prices.reduce((sum, price) => sum + price, 0);
// console.log("prices:", prices);
// console.log("reduce:", total);


// FIND
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 }
];
const adult = people.find(person => person.age >= 18);
// console.log("people:", people);
// console.log("find:", adult);


// SORT
const fruits = ["banana", "apple", "orange"];
const sortedFruits = fruits.sort();
// console.log("fruits:", fruits)
// console.log("sort (strings):", sortedFruits)

const scores = [20, 100, 50, 10];
const sortedScores = scores.sort((a, b) => a - b);
// console.log("scores:", scores);
// console.log("sort (numbers ascending):", sortedScores);

const sortedScoresDesc = scores.sort((a, b) => b - a);
// console.log("sort (numbers descending):", sortedScoresDesc);


// TOSORTED
const fruits2 = ["banana", "apple", "orange"];
const sortedFruits2 = fruits.toSorted();
// console.log("fruits2:", fruits2)
// console.log("sort (strings):", sortedFruits2)