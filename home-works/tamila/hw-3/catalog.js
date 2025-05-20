import { catalogEl } from './main.js';

export function renderCatalogItemCard({
    title = 'Без названия',
    quantity = 0,
    description = 'Описание отсутствует',
    price = 0
}) {
    const card = document.createElement('article');
    card.className = 'catalog__item';

    const titleEl = document.createElement('h3');
    titleEl.textContent = title;

    const quantityEl = document.createElement('small');
    quantityEl.textContent = `Осталось: ${quantity > 0 ? quantity : 'Нет в наличии'} шт.`;

    const descriptionEl = document.createElement('p');
    descriptionEl.textContent = description;

    const priceEl = document.createElement('p');
    priceEl.textContent = `Цена: ${price > 0 ? price : 'По запросу'}$`;

    [titleEl, quantityEl, descriptionEl, priceEl].forEach(el => card.appendChild(el));

    return card;
}

export function getCatalog(catalog = []) {
    catalogEl.innerHTML = ''; // Очищаем контейнер

    if (catalog.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'Каталог пуст.';
        catalogEl.appendChild(emptyMessage);
        return;
    }

    catalog.forEach(item => {
        const card = renderCatalogItemCard(item);
        catalogEl.appendChild(card);
    });
}
