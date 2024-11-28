import { filteredAndSdortered } from "./filterandsorter.js";
import { renderCatalogItemCard } from "./render.js";

export let shopItems;
export const catalogEl = document.querySelector(".catalog");
export const filterSelect = document.querySelector("#shop_filter");
export const poorItemsRemoveCheckbox = document.querySelector("#removePoorItems");


async function getShopItems() {
   const response = await fetch("./shop-items.json");
   const json = await response.json();
 
   if (response.status !== 200) {
     console.log("ERROR");
     return;
   }
 
   return json;
 }
 
async function useShopItems() {
   shopItems = await getShopItems();
 
   getCatalog(shopItems);
 }
 
 useShopItems();

export function getCatalog(catalog) {
  catalogEl.innerHTML = "";
  catalog.forEach((item) => {
    const card = renderCatalogItemCard(item);

    catalogEl.appendChild(card);
  });
}


export const checked = poorItemsRemoveCheckbox.checked;

filterSelect.addEventListener("input", (e) => {
  const { value } = e.target;
  filteredAndSdortered();

  poorItemsRemoveCheckbox.addEventListener("input", (e) => {
    const { checked } = e.target;

    filteredAndSdortered();
  });
});
