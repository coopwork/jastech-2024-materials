const debugBtn = document.querySelector('#debug');


debugBtn.addEventListener('click', function(e) {
  // debugger;

  console.log(this);
  console.log(e.target);
  
  
  const num1 = 543543;
  const num2 = 543532543;

  const result = num1 + num2;

  alert(result)
});