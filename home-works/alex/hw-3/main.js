
import { shopItems, useShopItems, getCatalog, filterSelect, poorItemsRemoveCheckbox } from './get.js';
import {sortFilt} from './sort_filter.js';

document.addEventListener('DOMContentLoaded', () => {

useShopItems();  

filterSelect.addEventListener ('input', (e) => {
  const { value } = e.target;
  sortFilt()
 
})

poorItemsRemoveCheckbox.addEventListener('input', (e)=>{
  const {checked} = e.target; 
  sortFilt()
});

});

