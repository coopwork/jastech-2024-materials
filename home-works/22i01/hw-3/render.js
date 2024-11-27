
export function renderCatalogItemCard({
    title = "",
    quantity = "",
    description = "",
    price = "",
  }) {
    const card = document.createElement("article");
    const titleEl = document.createElement("h3");
    const quantityEl = document.createElement("small");
    const descriptionEl = document.createElement("p");
    const priceEl = document.createElement("p");
  
    card.className = "catalog__item";
  
    titleEl.textContent = title;
    quantityEl.textContent = `Осталось: ${quantity} шт.`;
    descriptionEl.textContent = description;
    priceEl.textContent = `Цена: ${price}$`;
  
    card.appendChild(titleEl);
    card.appendChild(quantityEl);
    card.appendChild(descriptionEl);
    card.appendChild(priceEl);
  
    return card;
  }