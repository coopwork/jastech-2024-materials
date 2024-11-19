// const myHeading = document.querySelector('.heading');

// myHeading.remove()

const sendBtn = document.querySelector('.login-button');
const exp = document.querySelector('.experements');
const myForm = document.querySelector('.login_form');
const termsCheck = document.querySelector('.terms-checkbox');
const langSelect = document.querySelector('.language-select');
const inputEmail = document.querySelector('.email-input');
const inputPassword = document.querySelector('.password-input');
const tooglePasswordButton = document.querySelector('.toogle-pass');
const paragraph = document.querySelector('.parag');


tooglePasswordButton.addEventListener('click', ()=>{

  if (inputPassword.getAttribute('type') === 'password') {
    inputPassword.setAttribute('type', 'text')
  } else {
    inputPassword.setAttribute('type', 'password')
  }
  
});

inputPassword.addEventListener('input', (e)=>{
  paragraph.textContent = e.target.value
});


langSelect.addEventListener('input', (e)=>{
  paragraph.textContent = e.target.value
});

termsCheck.addEventListener('input', (e)=>{
  // console.log(e.target.checked);
});

myForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  if (inputPassword.value.length < 8) {
    return alert('Пароль слишком короткий');
  }

  if (!termsCheck.checked) {
    return alert('Согласитесь с нашими правилами');
  }

  alert('Форма отправлена');
  console.log({
    email: inputEmail.value,
    password: inputPassword.value,
  });
  
  // e.target.submit();
});

const inputs = document.querySelectorAll('input');


let isChecked = false;
let isCorrectPassword = false;
let isEmail = false;

inputs.forEach(element => {
  element.addEventListener('input', (e)=>{


    if (e.target.getAttribute('type') === 'checkbox') {
      if (e.target.checked) {
        isChecked = true;
      } else {
        isChecked = false;
      }
    } 

    if (e.target.getAttribute('type') === 'password') {
      if (e.target.value.length > 5) {
        isCorrectPassword = true
      } else {
        isCorrectPassword = false
      }
    }

    if (e.target.getAttribute('type') === 'email') {
      if (e.target.value) {
        isEmail = true
      } else {
        isEmail = false
      }
    }
console.log(isChecked, isCorrectPassword, isEmail);
console.log(isChecked && isCorrectPassword && isEmail);

    if (isChecked && isCorrectPassword && isEmail) {
      sendBtn.removeAttribute('disabled')
    } else{
      sendBtn.setAttribute('disabled', 'true');
    }
    
  });
});





// Опасно! Лучше не использовать.
// exp.innerHTML = `
// <style>
// b{
// color: red;
// }
// </style>
//   <br>
//   <br> 
//   <i>
//   exp dwad dwa daw dwa aw
//   </i>
//   <b>
//     ${inputEmail.value}
//   </b>
//   <script>
//     alert('adwadwa')
//   </script>
// `