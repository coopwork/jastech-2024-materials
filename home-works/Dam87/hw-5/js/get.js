export let shopItems;


const catalogEl = document.querySelector('.catalog');
export const filterSelect = document.querySelector('#shop_filter');
export const poorItemsRemoveCheckbox = document.querySelector('#removePoorItems');

export function renderCatalogItemCard({
  title = '',
  quantity = '',
  description = '',
  price = ''
}) {
  const card = document.createElement('article');
  const titleEl = document.createElement('h3');
  const quantityEl = document.createElement('small');
  const descriptionEl = document.createElement('p');
  const priceEl = document.createElement('p');
  
  card.className = 'catalog__item'
  titleEl.className = 'card__title'
  quantityEl.className = 'card__quantity'
  priceEl.className = 'card__price'

  titleEl.textContent = title;
  quantityEl.textContent = `Осталось: ${quantity} шт.`;
  descriptionEl.textContent = description;
  priceEl.textContent = `Цена: ${price}$`;

  card.appendChild(titleEl)
  card.appendChild(quantityEl)
  card.appendChild(descriptionEl)
  card.appendChild(priceEl)

  return card;
}

export function getCatalog(catalog) {
  catalogEl.innerHTML = ''
  catalog.forEach(item => {
    const card = renderCatalogItemCard(item)
  
    catalogEl.appendChild(card)
  });
}

async function getShopItems() {
  const response = await fetch('./JSON/shop-items.json');
  const json = await response.json();

  if (response.status !== 200) {
    console.log('ERROR');
    return
  }

  return json;
    
}

export async function useShopItems() {
shopItems =  await getShopItems();

   getCatalog(shopItems);
}


