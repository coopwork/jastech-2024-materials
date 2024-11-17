export function getTimeoutHello(text) {
  const h1 = document.createElement('h1');

  h1.textContent = text;

  const timeOut = setTimeout(() => {
    document.body.appendChild(h1)

    clearTimeout(timeOut)
  }, 2500);
}