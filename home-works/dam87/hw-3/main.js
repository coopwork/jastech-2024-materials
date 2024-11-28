
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
// ДЗ: Доработать фильтрацию и сортировку чтобы они работали вместе
// Доп. будет плюсом к ДЗ: 
// Если поделите js файл на модули и список shopItems будете получать через fetch из *.json
// Стилизация карточек и инпутов тоже с модульным подходом.
