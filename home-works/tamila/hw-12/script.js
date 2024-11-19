// Кнопки
const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');

// Сохранение данных пользователя
saveButton.addEventListener('click', () => {
    const userTamila = {
        id: document.getElementById('id').value,
        firstName: document.getElementById('firstName').value || 'Тамила',
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
    };

    localStorage.setItem('userTamila', JSON.stringify(userTamila));
    alert('Данные сохранены для пользователя Тамила!');
});

// Загрузка данных пользователя
loadButton.addEventListener('click', () => {
    const userTamila = JSON.parse(localStorage.getItem('userTamila'));

    if (userTamila) {
        document.getElementById('id').value = userTamila.id;
        document.getElementById('firstName').value = userTamila.firstName;
        document.getElementById('lastName').value = userTamila.lastName;
        document.getElementById('email').value = userTamila.email;
        alert('Данные загружены!');
    } else {
        alert('Данные пользователя не найдены!');
    }
});
