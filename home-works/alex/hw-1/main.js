const elements = {
  allInputs: document.querySelectorAll('input'),
  form: document.querySelector('form'),
  id: document.querySelector('.id'),
  firstName: document.querySelector('.firstName'),
  lastName: document.querySelector('.lastName'),
  email: document.querySelector('.email'),
  save: document.querySelector('.save'),
  load: document.querySelector('.load'),
}

const user = JSON.parse(localStorage.getItem('user'))

elements.allInputs.forEach((el) => {
  el.addEventListener('input', (e) => {

    user[e.target.className] = e.target.value

  })
})

elements.save.addEventListener('click', () => {
  localStorage.setItem('user', JSON.stringify(user))
  elements.form.reset();
})

elements.load.addEventListener('click', () => {
  const localUser = JSON.parse(localStorage.getItem('user'));

  elements.allInputs.forEach((el) => {
    el.value = localUser[el.className]
  })
})