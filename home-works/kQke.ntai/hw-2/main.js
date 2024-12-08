let shopItems = [];
let currentFilter = 'default';
let removePoorItems = false;

const catalogEl = document.querySelector('.catalog');
const filterSelect = document.querySelector('#shop_filter');
const poorItemsRemoveCheckbox = document.querySelector('#removePoorItems');

// Загрузка данных через fetch
async function loadShopItems() {
  try {
    const response = await fetch('./shop.-items.json');
    shopItems = await response.json();
    applyFiltersAndSort(); // Отрисовать изначальный список
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
  }
}

// Рендер карточки товара
function renderCatalogItemCard({ title = '', quantity = '', description = '', price = '' }) {
  const card = document.createElement('article');
  const titleEl = document.createElement('h3');
  const quantityEl = document.createElement('small');
  const descriptionEl = document.createElement('p');
  const priceEl = document.createElement('p');

  card.className = 'catalog__item';
  titleEl.textContent = title;
  quantityEl.textContent = `Осталось: ${quantity} шт.`;
  descriptionEl.textContent = description;
  priceEl.textContent = `Цена: ${price}$`;

  card.appendChild(titleEl);
  card.appendChild(quantityEl);
  card.appendChild(descriptionEl);
  card.appendChild(priceEl);

  return card;
}

// Рендер каталога
function getCatalog(catalog) {
  catalogEl.innerHTML = '';
  catalog.forEach(item => {
    const card = renderCatalogItemCard(item);
    catalogEl.appendChild(card);
  });
}

// Применение фильтров и сортировки
function applyFiltersAndSort() {
  let result = [...shopItems];

  // Фильтрация
  if (removePoorItems) {
    result = result.filter(item => item.price >= 500);
  }

  // Сортировка
  if (currentFilter === 'onTitle') {
    result.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
  } else if (currentFilter === 'poor') {
    result.sort((a, b) => a.price - b.price);
  } else if (currentFilter === 'rich') {
    result.sort((a, b) => b.price - a.price);
  } else if (currentFilter === 'storageMin') {
    result.sort((a, b) => a.quantity - b.quantity);
  } else if (currentFilter === 'storageMax') {
    result.sort((a, b) => b.quantity - a.quantity);
  }

  getCatalog(result);
}

// Обработчики событий
filterSelect.addEventListener('input', (e) => {
  currentFilter = e.target.value;
  applyFiltersAndSort();
});

poorItemsRemoveCheckbox.addEventListener('input', (e) => {
  removePoorItems = e.target.checked;
  applyFiltersAndSort();
});

// Загрузка товаров при старте
loadShopItems();
