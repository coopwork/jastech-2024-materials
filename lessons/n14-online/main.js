

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     if (response.status === 404) {
//       PromiseRejectionEvent()
//     }
//     return response.json()
//   })
//   .then((json) => {
//     console.log(json)
//     console.log('All Ok');
//   })
//   .catch((err) => {
//     console.error(err)
//     console.error('I error from catch');
//   })
//   .finally(() => {
//     console.log('I finaly');
//   })


// async function getUsers() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const json = await response.json();

//   if (response.status !== 200) {
//     console.log('ERROR');
//     return
//   }

//   return json;
// }

// async function renderUsers() {
//   const users = await getUsers();

//   // КОД благодаря которому выведем наши данные на HTML страницу
//   console.log(users);

//   document.querySelector('#response').textContent = JSON.stringify(users)

// }

// renderUsers()


// GET, POST, DELETE, PATCH, PUT



// async function getPosts() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "GET"
//   });
//   const json = await response.json();

//   if (response.status !== 200) {
//     console.log('ERROR');
//     return
//   }
//   console.log(json);
//   document.querySelector('#response').textContent = JSON.stringify(json)
//   return json;
// }

// async function createPost() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: "DELETE"
//   });
//   const json = await response.json();

//   if (response.status !== 201) {
//     console.log('ERROR');
//     return
//   }
//   console.log(json);
//   document.querySelector('#response').textContent = JSON.stringify(json)
//   return json;
// }

// document.querySelector('#add-post').addEventListener('click', async () => {
//   const response = await createPost()
//   console.log(response);

// })

// document.querySelector('#get-posts').addEventListener('click', async () => {
//   const response = await getPosts()
//   console.log(response);
// })

// CRUD
// CREATE READ UPDATE DELETE


function fn1() {
  console.log(1);
}

async function fn2() {

  const test = await fetch('https://jsonplaceholder.typicode.com/posts')

  console.log(2);
}

async function fn66() {

}

const fn77 = async () => {

}

function fn3() {
  fn2()
  console.log(3);
}

console.log(fn3);



// fn1()
// fn2()
// fn3()


// window.location = 'https://google.com'
// console.log(window.location);

// localStorage.setItem('ui-theme', 'light')
// console.log('ui theme from localstorage:', localStorage.getItem('ui-theme'));
// localStorage.removeItem('ui-theme')
// localStorage.clear();



// ДОМАШНЕЕ ЗАДАНИЕ:

// Записать в localStorage объект который будет формироваться из инпутов формы
// и корректно выводить объект пользователя обратно по нажатию на кнопку.
// Две кнопки: Записать и Получить
// Пользователь будет записываться из инпутов формы
// Пользователь будет доставаться из локалсторедж и подставляться в инпуты формы по нажатию на кнопку

const user = {
  id: 145,
  firstName: 'Jack',
  lastName: 'Black',
  email: 'jack-black@gmail.com'
};