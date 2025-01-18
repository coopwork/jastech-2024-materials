import { applyFiltersAndSorting } from './filters.js';

async function getResponse() {
    let response = await fetch('./shop-items.json')    
    return await response.json();
}  

    export const catalogEl = document.querySelector('.catalog');
    const filterSelect = document.querySelector('#shop_filter');
    const poorItemsRemoveCheckbox = document.querySelector('#removePoorItems');
  
export let shopItems = []; 
export const currentState = {
    sortBy: 'default',
    removePoorItems: false
};
  
filterSelect.addEventListener('input', (e) => {
    currentState.sortBy = e.target.value;
    applyFiltersAndSorting();
});

poorItemsRemoveCheckbox.addEventListener('input', (e) => {
    currentState.removePoorItems = e.target.checked;
    applyFiltersAndSorting();
});

getResponse().then(data => {
    shopItems = data;
    applyFiltersAndSorting();
});