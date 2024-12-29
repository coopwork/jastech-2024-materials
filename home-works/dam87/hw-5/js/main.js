
import { shopItems, useShopItems, getCatalog, filterSelect, poorItemsRemoveCheckbox } from '../js/get.js';
import {sortFilt} from '../js/sort_filter.js';

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


if (matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
  document.documentElement.style.
  display = 'none';
  document.head.insertAdjacentHTML('beforeend','<link rel="stylesheet" href="./styles/light.css" onload="document.documentElement.style.display=\'\'">' );
}