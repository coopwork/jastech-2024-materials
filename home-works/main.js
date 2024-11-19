

function saveUser() {
  const user = {
    id: 145,  // Или другой ID, если нужно
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value
  };

  // Сохраняем объект в localStorage одной записью
  localStorage.setItem('user', JSON.stringify(user));
  alert('Данные сохранены!');
}

function loadUser() {
  // Получаем объект пользователя из localStorage
  const user = JSON.parse(localStorage.getItem('user'));
  
  if (user) {
    document.getElementById('firstName').value = user.firstName;
    document.getElementById('lastName').value = user.lastName;
    document.getElementById('email').value = user.email;
    alert('Данные загружены!');
  } else {
    alert('Нет сохраненных данных.');
  }
}