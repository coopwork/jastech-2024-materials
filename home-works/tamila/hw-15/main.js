import { applyFiltersAndSorting } from './filters.js';

async function getResponse() {
    try {
        let response = await fetch('./shop-items.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error: ', error);
        return []; // Возвращаем пустой массив в случае ошибки
    }
}

export const catalogEl = document.querySelector('.catalog');
const filterSelect = document.querySelector('#shop_filter');
const poorItemsRemoveCheckbox = document.querySelector('#removePoorItems');

export let shopItems = [];
export const currentState = {
    sortBy: 'default',
    removePoorItems: false
};

// Обработчик изменения фильтра
filterSelect.addEventListener('input', (e) => {
    currentState.sortBy = e.target.value;
    applyFiltersAndSorting();
});

// Обработчик изменения состояния чекбокса
poorItemsRemoveCheckbox.addEventListener('input', (e) => {
    currentState.removePoorItems = e.target.checked;
    applyFiltersAndSorting();
});

// Получаем данные и применяем фильтры
getResponse().then(data => {
    if (data && data.length > 0) {
        shopItems = data;
        applyFiltersAndSorting();
    } else {
        catalogEl.innerHTML = '<p>Товары не найдены.</p>';
    }
});
