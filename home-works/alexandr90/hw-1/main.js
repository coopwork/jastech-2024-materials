



document.addEventListener('DOMContentLoaded', function() {

    const userForm = document.getElementById('userForm');
    const loadButton = document.getElementById('loadButton');
    

    loadFormData();


    userForm.addEventListener('submit', function(event) {
        event.preventDefault(); 


        const userData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            age: document.getElementById('age').value
        };


        localStorage.setItem('userData', JSON.stringify(userData));

        alert('Данные сохранены!');
    });


    loadButton.addEventListener('click', function() {
        loadFormData();
    });

    function loadFormData() {
        const savedData = localStorage.getItem('userData');
        
        if (savedData) {
            const userData = JSON.parse(savedData);
            
            document.getElementById('name').value = userData.name || '';
            document.getElementById('email').value = userData.email || '';
            document.getElementById('age').value = userData.age || '';
        } else {
            alert('Нет сохраненных данных.');
        }
    }
});
