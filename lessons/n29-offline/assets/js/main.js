
const arr1 = [99, 64, 24, 11, 66, 78, 94, 11, 2, 5, 7, 8, 9, 0]; // Отсортировать и удалить дубликаты
const arr2 = ['Apple', 'Cucumber', 'Banana', 'Potato']; // Отсортировать по алфавиту и вывести текстовое предложение с каждым элементом
const arr3 = 'My website is best' // Превратить в массив где каждый элемент это слово из строки
const obj = {
  name: 'My Name',
  dateOfBirth: "24.09.03"
}// Добавить в объект новый ключ lastName и firstName и удалить ключ name и переделать дату в ISO String  формат
const arr4 = [555, 345, '586', 124, 3, 0, 12, 55, '88', 99, 66];// Найти сумму массива любым удобным способом


arr2.sort().forEach((item) => {
  console.log(`I eating ${item}`);
})

obj.firstName = obj.name.split(' ')[0]
obj.lastName = obj.name.split(' ')[1]
delete obj.name;
obj.dateOfBirth = new Date(`${obj.dateOfBirth.split('.').reverse().join('.')}`)
.toISOString()

console.log(obj);

console.log(arr3.split(' '));


console.log(+'234');
console.log(Number('234'));
