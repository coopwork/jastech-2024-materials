

const accordions = document.querySelectorAll('.accordion');

function accordionManage(e) {
  const element = e.target;
  const parentAcc = element.closest('.accordion');
  let isRepeatClick = false;

  if (element.classList.contains('accordion-trigger')) {

    if (parentAcc.getAttribute('data-multiply') === 'false' && element.closest('.accordion-item').getAttribute('data-opened') === 'true') {
      isRepeatClick = true;
    }

    if (parentAcc.getAttribute('data-multiply') === 'false') {
      parentAcc.querySelectorAll('.accordion-item').forEach(element => {
        element.setAttribute('data-opened', 'false')
      });
    }

    if (isRepeatClick) {
      return;
    }

    if (element.closest('.accordion-item').getAttribute('data-opened') === 'false') {
      element.closest('.accordion-item').setAttribute('data-opened', 'true')
    } else {
      element.closest('.accordion-item').setAttribute('data-opened', 'false')
    }

  }
  
}


accordions.forEach(accordion => {
  accordion.addEventListener('click', accordionManage)
});






// const cities = {
//   kazakhstan: {
//     en: 'Kazakhstan',
//     ru: 'Казахстан'
//   }
// }

// function getCorrectLngCity(country ,lng) {
//   return cities[country][lng]
// }

// console.log(getCorrectLngCity('kazakhstan', 'en'));




// console.log(NaN);

// console.log(typeof NaN);

// console.log(+'123d');


