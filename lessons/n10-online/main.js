

// const incrementButton = document.querySelector('.btn_increment');
// const decrementButton = document.querySelector('.btn_decrement');
// const counter = document.querySelector('.counter');

// let count = 0;
// counter.textContent = count;

// Устаревший способ (Не использовать)
// button.onclick = function () {
//   console.log('click');
// }

// button.onclick = function () {
//   console.log('click 22');
// }

// button.onclick = null;


// Удаление событий
// button.removeEventListener('click', btnClicker)


// const increment = () => {
//   if (count < 10) {
//     count++
//     counter.textContent = count
//   }
//   if (count != 0) {
//     counter.style = 'color: black'
//   }
//   if (count === 10) {
//     counter.style = 'color: green'
//   }
// }

// const decrement = () => {
//   if (count) {
//     count--
//     counter.textContent = count
//   }
//   if (count != 10) {
//     counter.style = 'color: black'
//   }
//   if (count === 0) {
//     counter.style = 'color: red'
//   }
// }

// incrementButton.addEventListener('click', increment)
// decrementButton.addEventListener('click', decrement)




const windowModalElements = document.querySelectorAll('[data-modal-window]');


document.addEventListener('click', (e) => {
  if (e.target.getAttribute('data-modal-button')) {
    windowModalElements.forEach(modal => {
      if (
        modal.getAttribute('data-modal-window')
        ===
        e.target.getAttribute('data-modal-button')
      ) {
        modal.classList.toggle('opened')
      }
    });
  }

  if (e.target.getAttribute('data-modal-close')) {
    e.target.closest('[data-modal-window]').classList.toggle('opened')
  }

  // Альтернатива по закрытию модального окна
  // if (
  //   e.target.closest('[data-modal-window]')
  //   &&
  //   (
  //     e.target.classList.contains('close_modal_btn')
  //     ||
  //     e.target.classList.contains('modal_overlay')
  //   )
  // ) {
  //   e.target.closest('[data-modal-window]').classList.toggle('opened')
  // }

});

