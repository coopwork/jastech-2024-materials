
const str = 'string';
const num = 5;
const bool = true;
const arr = [1, 2, 3, 4];
const obj = {
  key: 'value'
};

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }




const arrObj = [
  {
    name: 'Title 1',
    description: 'Short description 1'
  },
  {
    name: 'Title 2',
    description: 'Short description 2'
  },
  {
    name: 'Title 3',
    description: 'Short description 3'
  },
  {
    name: 'Title 4',
    description: 'Short description 4'
  },
  {
    name: 'Title 5',
    description: 'Short description 5'
  },
  {
    description: 'Short description 6'
  },
];

// console.log('str', !!'str');
// console.log('', !!'');
// console.log(2, !!2);
// console.log(0, !!0);
// console.log('null', !!null);
// console.log('undefined', !!undefined);
// console.log('{}', !!{});
// console.log('[]', !![].length);


// for (let i = 0; i < arrObj.length; i++) {
//   if (arrObj[i].name) {
//     console.log(arrObj[i].name);
//   } else {
//     console.error(arrObj[i]);
//   }
  
// }

const today = new Date();

// console.log(today.getFullYear());
// console.log(today.toLocaleString());



function myFunction({name, surname, age, gender}) {
  console.log('Hello',surname, name);
}

const objTwo = {
  key: 'MyName',
  func: function(){
    console.log(this.key);
  },
  funcTwo: () => {
    console.log(this);
  }
}

// const myFuncMore = () => {
//   console.log('new arrow func');
  
// }

// console.log(objTwo);

// objTwo.func();
// objTwo.funcTwo();
// myFuncMore();
// myFunction(
//   {
//     name: 'Ruslan',
//     isAnimal: false,
//     surname:'Sv.',
//   }
// );


// Самовызывающаяся функция
// (() => {
//   console.log('dwa');
// })();

// const Вася ='Вася';

// console.log(Вася);

var variableOne = 'var 1';
let variableTwo = 'var 2';
const variableThree = 'var 3';

// variableOne = 'dawdaw';
// variableTwo = 'dawdaw';
// variableThree = 'dawdaw';

// console.log('variableOne',variableOne);
// console.log('variableTwo', variableTwo);
// console.log('variableThree', variableThree);


let anymore = 'Test 1'

function getAnymore() {
  const anymore = 'Test 2';
  console.log(anymore);
  
  return anymore;
}

// console.log(anymore);


// anymore = getAnymore();


// console.log(anymore);



let 
var1 = 1,
var2 = 2,
var3 = 3;

// console.log(var1, var2, var3);


function func() {
  const res = prompt('Напиши что нибудь о себе');
  console.log(res);
  
}

// func()

function funcTwo() {
  const res = confirm('Вы действительно учите JavaScript');
  console.log(res);

  if (res) {
    alert('Вы обязательно выуычите JavaScript')
  } else{
    alert('Вы должны обязательно выуычить JavaScript')
  }
  
}

// funcTwo()

// console.log(window.innerHeight);

// console.log(window.window.window);

