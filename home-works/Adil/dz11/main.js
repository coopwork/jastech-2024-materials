const user = {
    id: 145,
    firstName: 'Jack',
    lastName: 'Black',
    email: 'jack-black@mail.com'
};

// Записать в localStorage объект который будет формироваться из инпутов формы
// и корректно выводить объект пользователя обратно по нажатию на кнопку.
// Две кнопки: Записать и Получить
// Пользователь будет записываться из инпутов формы
// Пользователь будет доставаться из локалсторедж и подставляться в инпуты формы по нажатию на кнопку
 
 // Получить ссылки на форму и кнопки
 const userForm = document.getElementById('userForm');
 const saveBtn = document.getElementById('saveBtn');
 const loadBtn = document.getElementById('loadBtn');

 // Функция для сохранения пользовательских данных в localStorage
 saveBtn.addEventListener('click', () => {
     const user = {
         id: document.getElementById('id').value,
         firstName: document.getElementById('firstName').value,
         lastName: document.getElementById('lastName').value,
         email: document.getElementById('email').value
     };

     // Сохранение объекта в localStorage как строка JSON.
     localStorage.setItem('user', JSON.stringify(user));

     alert('Данные сохранены!');
 });

 // Функция для загрузки пользовательских данных из localStorage и заполнения формы
 loadBtn.addEventListener('click', () => {
     const savedUser = localStorage.getItem('user');

     if (savedUser) {
         const user = JSON.parse(savedUser);
         document.getElementById('id').value = user.id || '';
         document.getElementById('firstName').value = user.firstName || '';
         document.getElementById('lastName').value = user.lastName || '';
         document.getElementById('email').value = user.email || '';
     } else {
         alert('Нет сохранённых данных!');
     }
 });
