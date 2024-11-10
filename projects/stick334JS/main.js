
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const saveBtn = document.getElementById('saveBtn');
const loadBtn = document.getElementById('loadBtn');

function saveUserData() {
    const nickName = {
        nickname: nameInput.value
    };
    const userData = {
        name: nameInput.value,
        email: emailInput.value,
        age: ageInput.value
    };

    localStorage.setItem('nickName', JSON.stringify(userData));
    alert('Данные сохранены в localStorage!');
}


function loadUserData() {
    const userData = localStorage.getItem('user');
    
    if (userData) {
        const parsedData = JSON.parse(userData);

        nameInput.value = parsedData.name || '';
        emailInput.value = parsedData.email || '';
        ageInput.value = parsedData.age || '';
    } else {
        alert('Нет данных в localStorage!');
    }
}


saveBtn.addEventListener('click', saveUserData);
loadBtn.addEventListener('click', loadUserData);

