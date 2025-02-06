  // burger
  const navBurger = document.querySelector('.nav__h');
  const closeBurger = document.querySelector('.burger__close');
  const openBurger = document.querySelector('.burger__open');
  openBurger.addEventListener('click', () => {
  	navBurger.setAttribute('data-opened', 'true')
  })
  closeBurger.addEventListener('click', () => {
  	navBurger.setAttribute('data-opened', 'false')
  })


  document.addEventListener('click', (e) => {
    const withOutBurger = e.composedPath().includes(navBurger);
    const withOutBurger2 = e.composedPath().includes(openBurger);
  
    if (!withOutBurger && !withOutBurger2) {
      navBurger.removeAttribute('data-opened', 'true');
      navBurger.setAttribute('data-opened', 'false');
    }
})