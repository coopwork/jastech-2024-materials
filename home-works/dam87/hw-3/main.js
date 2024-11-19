

const shopItems = [
  {
    title: 'Samsung Galaxy',
    quantity: 14,
    description: 'It\'s a new smartphone',
    price: 500,
  },
  {
    title: 'Apple iPhone 14',
    quantity: 10,
    description: 'Latest Apple smartphone with advanced features',
    price: 1000,
  },
  {
    title: 'Dell XPS 15',
    quantity: 5,
    description: 'High-performance laptop with sleek design',
    price: 1500,
  },
  {
    title: 'Sony WH-1000XM4',
    quantity: 20,
    description: 'Noise-canceling over-ear headphones',
    price: 300,
  },
  {
    title: 'Google Pixel 7',
    quantity: 8,
    description: 'Smartphone with excellent camera capabilities',
    price: 700,
  },
  {
    title: 'LG OLED TV 55"',
    quantity: 3,
    description: '4K UHD Smart OLED TV with stunning visuals',
    price: 1200,
  },
  {
    title: 'Amazon Echo Dot',
    quantity: 25,
    description: 'Smart speaker with Alexa voice assistant',
    price: 50,
  },
  {
    title: 'Nintendo Switch',
    quantity: 12,
    description: 'Hybrid gaming console for home and on-the-go',
    price: 350,
  },
  {
    title: 'Bose SoundLink Revolve',
    quantity: 15,
    description: 'Portable Bluetooth speaker with 360° sound',
    price: 200,
  },
  {
    title: 'Apple MacBook Air M2',
    quantity: 7,
    description: 'Lightweight and powerful laptop with M2 chip',
    price: 1100,
  },
  {
    title: 'Samsung Galaxy Watch 5',
    quantity: 9,
    description: 'Smartwatch with fitness tracking features',
    price: 250,
  },
  {
    title: 'HP Envy Printer',
    quantity: 6,
    description: 'Wireless all-in-one color printer',
    price: 180,
  },
  {
    title: 'Logitech MX Master 3',
    quantity: 18,
    description: 'Ergonomic wireless mouse for professionals',
    price: 100,
  },
  {
    title: 'Sony PlayStation 5',
    quantity: 4,
    description: 'Next-generation gaming console',
    price: 500,
  },
  {
    title: 'GoPro HERO11 Black',
    quantity: 10,
    description: 'Waterproof action camera for adventure',
    price: 400,
  },
];


const catalogEl = document.querySelector('.catalog');
const filterSelect = document.querySelector('#shop_filter');
const poorItemsRemoveCheckbox = document.querySelector('#removePoorItems');

function renderCatalogItemCard({
  title = '',
  quantity = '',
  description = '',
  price = ''
}) {
  const card = document.createElement('article');
  const titleEl = document.createElement('h3');
  const quantityEl = document.createElement('small');
  const descriptionEl = document.createElement('p');
  const priceEl = document.createElement('p');
  
  card.className = 'catalog__item'

  titleEl.textContent = title;
  quantityEl.textContent = `Осталось: ${quantity} шт.`;
  descriptionEl.textContent = description;
  priceEl.textContent = `Цена: ${price}$`;

  card.appendChild(titleEl)
  card.appendChild(quantityEl)
  card.appendChild(descriptionEl)
  card.appendChild(priceEl)

  return card;
}


function getCatalog(catalog) {
  catalogEl.innerHTML = ''
  catalog.forEach(item => {
    const card = renderCatalogItemCard(item)
  
    catalogEl.appendChild(card)
  });
}


getCatalog(shopItems);

filterSelect.addEventListener('input', (e)=>{
  const {value} = e.target;
  const initialItems = [...shopItems];
  
  if (value === 'onTitle') {

    // A-Z variants:
    // const sortedOnTitle = initialItems.sort((a, b)=> a.title[0] > b.title[0] ? 1 : -1)
    // const sortedOnTitle = initialItems.sort((a, b)=> a.title.localeCompare(b.title))

    // A-Z no register
    const sortedOnTitle = initialItems.sort((a, b)=> a.title.toLowerCase().localeCompare(b.title.toLocaleLowerCase()))

    // ASC
    // const sortedOnTitle = initialItems.sort((a, b)=> a.title.length - b.title.length)

    // DESC
    // const sortedOnTitle = initialItems.sort((a, b)=> b.title.length - a.title.length)

    
    return getCatalog(sortedOnTitle);
  }

  if (value === 'poor') {
    const sortedPoor = initialItems.sort((a, b)=> a.price > b.price ? 1 : -1)
    return getCatalog(sortedPoor);
  }
  
  if (value === 'rich') {
    const sortedRich = initialItems.sort((a, b)=> a.price < b.price ? 1 : -1)
    return getCatalog(sortedRich);
  }

  if (value === 'storageMin') {
    const sortedStorageMin = initialItems.sort((a, b)=> a.quantity > b.quantity ? 1 : -1)
    return getCatalog(sortedStorageMin);
  }
  
  if (value === 'storageMax') {
    const sortedStorageMax = initialItems.sort((a, b)=> a.quantity < b.quantity ? 1 : -1)
    return getCatalog(sortedStorageMax);
  }
  if (value === 'default') {
    getCatalog(shopItems);
  }
  
  getCatalog(shopItems);
})


poorItemsRemoveCheckbox.addEventListener('input', (e)=>{
  const {checked} = e.target;

  if (checked) {
    const filteredPoorItems = [...shopItems].filter((catalogItem)=> catalogItem.price >= 500)
    getCatalog(filteredPoorItems);
  } else {
    getCatalog(shopItems);
  }
  
})

// ДЗ: Доработать фильтрацию и сортировку чтобы они работали вместе
// Доп. будет плюсом к ДЗ: 
// Если поделите js файл на модули и список shopItems будете получать через fetch из *.json
// Стилизация карточек и инпутов тоже с модульным подходом.




// const test = [25, 27, 21, 23, 22, 29, 24];
// const test2 = [1, 10, 103, 25, 33, 102, 11, 9, 100];
// const test3 = ['bdww', 'trwe', 'dwada', 'adwdaw']

// console.log(test.sort());
// console.log(test2.sort((a, b)=> a > b ? 1 : -1));
// console.log(test2.sort((a, b) => {
//   if (a > b) {
//     return 1
//   } else {
//     return -1
//   }
// }));
// console.log(test3.sort());
