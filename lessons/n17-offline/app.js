

export function getHello(text) {
  const h1 = document.createElement('h1');

  h1.textContent = `${text}`;

  document.body.appendChild(h1)
}

export function setHello(text) {
  const helloBlock = document.querySelector('.h1');

  helloBlock.textContent = text;
}
