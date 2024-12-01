import { shopItems, currentState } from './main.js';
import { getCatalog } from './catalog.js';

export function applyFiltersAndSorting() {
    let filteredItems = [...shopItems];

    // Фильтрация товаров по минимальной цене
    if (currentState.removePoorItems) {
        filteredItems = filteredItems.filter(item => item.price >= 500);
    }

    // Объект методов сортировки
    const sortMethods = {
        onTitle: (a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
        poor: (a, b) => a.price - b.price,
        rich: (a, b) => b.price - a.price,
        storageMin: (a, b) => a.quantity - b.quantity,
        storageMax: (a, b) => b.quantity - a.quantity,
    };

    // Применение сортировки, если указано корректное значение
    const sortMethod = sortMethods[currentState.sortBy];
    if (sortMethod) {
        filteredItems.sort(sortMethod);
    }

    // Передача отфильтрованных и отсортированных данных в каталог
    getCatalog(filteredItems);
}
