export function renderData({id, title, description}) {
  const dataWrapper = document.querySelector('.data');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.textContent = `${id} ${title}`;
  p.textContent = description;

  dataWrapper.append(h2);
  dataWrapper.append(p);
}