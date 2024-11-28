import { filterSelect, checked, getCatalog, poorItemsRemoveCheckbox, shopItems } from "./main.js";


let initialItems;
export function filteredAndSdortered() {
   
    const value = filterSelect.value;
    
 
    if (checked) {
       const filteredPoorItems = [...shopItems].filter((catalogItem)=> catalogItem.price >= 500)
       getCatalog(filteredPoorItems)
   
   } else {
       getCatalog(shopItems);}
           
       if (poorItemsRemoveCheckbox.checked) {
          initialItems = [...shopItems].filter((catalogItem)=> catalogItem.price >= 500)
          
       } else {
          initialItems = [...shopItems];
           
       }
 
 
       if (value === 'onTitle') {
   
    const sortedOnTitle = initialItems.sort((a, b)=> a.title.toLowerCase().localeCompare(b.title.toLocaleLowerCase()))
       
       return getCatalog(sortedOnTitle);
    }
   
    if (value === 'poor' && poorItemsRemoveCheckbox.checked) {
       const sortedPoor = initialItems.sort((a, b)=> a.price > b.price ? 1 : -1)
       return getCatalog(sortedPoor);
    }
    if (value === 'poor' && !poorItemsRemoveCheckbox.checked) {
       const sortedPoor = initialItems.sort((a, b)=> a.price > b.price ? 1 : -1)
       return getCatalog(sortedPoor);
    }
    
    if (value === 'rich' && poorItemsRemoveCheckbox.checked) {
       const sortedRich = initialItems.sort((a, b)=> a.price < b.price ? 1 : -1)
       return getCatalog(sortedRich);
    }
    if (value === 'rich' && !poorItemsRemoveCheckbox.checked) {
       const sortedRich = initialItems.sort((a, b)=> a.price < b.price ? 1 : -1)
       return getCatalog(sortedRich);
    }
    
    if (value === 'storageMin' && poorItemsRemoveCheckbox.checked) {
       const sortedStorageMin = initialItems.sort((a, b)=> a.quantity > b.quantity ? 1 : -1)
       return getCatalog(sortedStorageMin);
    }
    if (value === 'storageMin' && !poorItemsRemoveCheckbox.checked) {
       const sortedStorageMin = initialItems.sort((a, b)=> a.quantity > b.quantity ? 1 : -1)
       return getCatalog(sortedStorageMin);
    }
   
    if (value === 'storageMax' && poorItemsRemoveCheckbox.checked) {
       const sortedStorageMax = initialItems.sort((a, b)=> a.quantity < b.quantity ? 1 : -1)
       return getCatalog(sortedStorageMax);
    }
    if (value === 'storageMax' && !poorItemsRemoveCheckbox.checked) {
       const sortedStorageMax = initialItems.sort((a, b)=> a.quantity < b.quantity ? 1 : -1)
       return getCatalog(sortedStorageMax);
    }
    if (value === 'default' && poorItemsRemoveCheckbox.checked) {
      return getCatalog(initialItems);
    }
    if (value === 'default' && !poorItemsRemoveCheckbox.checked) {
       return getCatalog(shopItems);
    }
   
    getCatalog(shopItems);
   };