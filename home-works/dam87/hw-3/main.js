
import { shopItems, useShopItems, getCatalog, filterSelect, poorItemsRemoveCheckbox } from './get.js';

document.addEventListener('DOMContentLoaded', () => {

useShopItems();  



filterSelect.addEventListener ('input', (e) => {
  const { value } = e.target;
  const initialItems = [...shopItems];
  const checked = poorItemsRemoveCheckbox.checked; 
  const filteredPoorItems = [...shopItems].filter((catalogItem)=> catalogItem.price >= 500)

  if (value === 'onTitle' && checked) {
    const sortedOnTitle = filteredPoorItems.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
    return getCatalog(sortedOnTitle);
  }
  if (value === 'onTitle' && !checked) {
    const sortedOnTitle = initialItems.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
    return getCatalog(sortedOnTitle);
  }

  if (value === 'poor' && checked) {
    const sortedPoor = filteredPoorItems.sort((a, b)=> a.price > b.price ? 1 : -1)
    return getCatalog(sortedPoor);
  }

  if (value === 'poor' && !checked) {
    const sortedPoor = initialItems.sort((a, b)=> a.price > b.price ? 1 : -1)
    return getCatalog(sortedPoor);
  }
  
  if (value === 'rich' && checked ) {
    const sortedRich = filteredPoorItems.sort((a, b)=> a.price < b.price ? 1 : -1)
    return getCatalog(sortedRich);
  }

  if (value === 'rich' && !checked) {
    const sortedRich = initialItems.sort((a, b)=> a.price < b.price ? 1 : -1)
    return getCatalog(sortedRich);
  }

  if (value === 'storageMin' && checked) {
    const sortedStorageMin = filteredPoorItems.sort((a, b)=> a.quantity > b.quantity ? 1 : -1)
    return getCatalog(sortedStorageMin);
  }
  if (value === 'storageMin' && !checked) {
    const sortedStorageMin = initialItems.sort((a, b)=> a.quantity > b.quantity ? 1 : -1)
    return getCatalog(sortedStorageMin);
  }
  
  if (value === 'storageMax' && checked ) {
    const sortedStorageMax = filteredPoorItems.sort((a, b)=> a.quantity < b.quantity ? 1 : -1)
    return getCatalog(sortedStorageMax);
  }

  if (value === 'storageMax' && !checked) {
    const sortedStorageMax = initialItems.sort((a, b)=> a.quantity < b.quantity ? 1 : -1)
    return getCatalog(sortedStorageMax);
  }

  if (value === 'default' && checked) {
    getCatalog(filteredPoorItems);
  }
  if (value === 'default' && !checked) {
    getCatalog(shopItems);
  }
 
})


poorItemsRemoveCheckbox.addEventListener('input', (e)=>{
  
  const initialItems = [...shopItems];
  const {checked} = e.target; 
  const filteredPoorItems = [...shopItems].filter((catalogItem)=> catalogItem.price >= 500)
  const value = filterSelect.value;
  
  if (value === 'onTitle' && checked) {
    const sortedOnTitle = filteredPoorItems.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
    return getCatalog(sortedOnTitle);
  }
  if (value === 'onTitle' && !checked) {
    const sortedOnTitle = initialItems.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
    return getCatalog(sortedOnTitle);
  }
  if (value === 'poor' && checked) {
    const sortedPoor = filteredPoorItems.sort((a, b)=> a.price > b.price ? 1 : -1)
    return getCatalog(sortedPoor);
  }

  if (value === 'poor' && !checked) {
    const sortedPoor = initialItems.sort((a, b)=> a.price > b.price ? 1 : -1)
    return getCatalog(sortedPoor);
  }
  
  if (value === 'rich' && checked ) {
    const sortedRich = filteredPoorItems.sort((a, b)=> a.price < b.price ? 1 : -1)
    return getCatalog(sortedRich);
  }

  if (value === 'rich' && !checked) {
    const sortedRich = initialItems.sort((a, b)=> a.price < b.price ? 1 : -1)
    return getCatalog(sortedRich);
  }

  if (value === 'storageMin' && checked) {
    const sortedStorageMin = filteredPoorItems.sort((a, b)=> a.quantity > b.quantity ? 1 : -1)
    return getCatalog(sortedStorageMin);
  }
  if (value === 'storageMin' && !checked) {
    const sortedStorageMin = initialItems.sort((a, b)=> a.quantity > b.quantity ? 1 : -1)
    return getCatalog(sortedStorageMin);
  }
  
  if (value === 'storageMax' && checked ) {
    const sortedStorageMax = filteredPoorItems.sort((a, b)=> a.quantity < b.quantity ? 1 : -1)
    return getCatalog(sortedStorageMax);
  }

  if (value === 'storageMax' && !checked) {
    const sortedStorageMax = initialItems.sort((a, b)=> a.quantity < b.quantity ? 1 : -1)
    return getCatalog(sortedStorageMax);
  }

  if (value === 'default' && checked) {
    getCatalog(filteredPoorItems);
  }
  if (value === 'default' && !checked) {
    getCatalog(shopItems);
  }

})

});

// ДЗ: Доработать фильтрацию и сортировку чтобы они работали вместе
// Доп. будет плюсом к ДЗ: 
// Если поделите js файл на модули и список shopItems будете получать через fetch из *.json
// Стилизация карточек и инпутов тоже с модульным подходом.
