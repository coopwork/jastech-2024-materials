
document.querySelector('#write').addEventListener('click', ()=>{
  
    const user = {
       id: identify = document.querySelector('#identify').value,
       firstName: firstName = document.querySelector('#first-name').value,
       lastName: lastName = document.querySelector('#last-name').value,
       email: document.querySelector('#e-mail').value
     };
   
    localStorage.setItem('user', JSON.stringify(user)) ;

})

document.querySelector('#read').addEventListener('click', ()=>{
      
    const user = JSON.parse(localStorage.getItem("user")); 
    document.querySelector('#identify').value = user.id;
    document.querySelector('#first-name').value = user.firstName;
    document.querySelector('#last-name').value = user.lastName;
    document.querySelector('#e-mail').value = user.email
})


document.querySelector('#clear').addEventListener('click', ()=>{
    if
    (confirm('Вы уверены?')){
    localStorage.clear()
    }
})
