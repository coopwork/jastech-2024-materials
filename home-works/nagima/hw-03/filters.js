import { shopItems, currentState } from './main.js';
import { getCatalog } from './catalog.js';

export function applyFiltersAndSorting() {
    let filteredItems = [...shopItems];

    if (currentState.removePoorItems) {
        filteredItems = filteredItems.filter(item => item.price >= 500);
    }

    if (currentState.sortBy === 'onTitle') {
        filteredItems.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
    } else if (currentState.sortBy === 'poor') {
        filteredItems.sort((a, b) => a.price - b.price);
    } else if (currentState.sortBy === 'rich') {
        filteredItems.sort((a, b) => b.price - a.price);
    } else if (currentState.sortBy === 'storageMin') {
        filteredItems.sort((a, b) => a.quantity - b.quantity);
    } else if (currentState.sortBy === 'storageMax') {
        filteredItems.sort((a, b) => b.quantity - a.quantity);
    }

    getCatalog(filteredItems);
}