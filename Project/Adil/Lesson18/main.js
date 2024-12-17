

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
  
    card.className = 'catalog__item';
  
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
  
  
  function getCatalog(catalog) {
    catalogEl.innerHTML = '';
    catalog.forEach(item => {
      const card = renderCatalogItemCard(item);
      catalogEl.appendChild(card);
    });
  }
  
  
  function applyFilterAndSort() {
    const filterValue = filterSelect.value;
    const isPoorItemsRemoved = poorItemsRemoveCheckbox.checked;
  
    
    let filteredItems = [...shopItems];
    if (isPoorItemsRemoved) {
      filteredItems = filteredItems.filter(item => item.price >= 500);
    }

    if (filterValue === 'onTitle') {
      filteredItems.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
    } else if (filterValue === 'poor') {
      filteredItems.sort((a, b) => a.price - b.price);
    } else if (filterValue === 'rich') {
      filteredItems.sort((a, b) => b.price - a.price);
    } else if (filterValue === 'storageMin') {
      filteredItems.sort((a, b) => a.quantity - b.quantity);
    } else if (filterValue === 'storageMax') {
      filteredItems.sort((a, b) => b.quantity - a.quantity);
    }
  
    getCatalog(filteredItems);
  }
  
  getCatalog(shopItems);
  
  filterSelect.addEventListener('input', applyFilterAndSort);
  poorItemsRemoveCheckbox.addEventListener('input', applyFilterAndSort);
  