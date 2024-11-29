
const requestMy = document.querySelector('.list__users');


class Request {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(endpoint) {
    return this._fetch(endpoint, {
      method: 'GET'
    });
  }

  async post(endpoint, data) {
    return this._fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }

  async _fetch(endpoint, options) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }
}


const request = new Request('https://jsonplaceholder.typicode.com');

(async () => {
  try {
    const postData = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    const responsePost = await request.post('/users', postData);
    console.log('POST response:', responsePost);

    const responseGet = await request.get('/users');
    getUserFromJson(responseGet);
    console.log('GET response:', responseGet);
    // addres = JSON.stringify(responseGet.address);
    // console.log(address);
    
  } catch (error) {
    console.error('Request error:', error);
  }
})();



function renderUserList({
  address = '',
  company = '',
  name = '',
  username = ''
})


{
  
  const card = document.createElement('article');
  const addressEl = document.createElement('h3');
  const companyEl = document.createElement('p');
  const nameEl = document.createElement('p');
  const usernameEl = document.createElement('p');
  
  card.className = 'catalog__item'

  addressEl.textContent = JSON.stringify(address.city);
  companyEl.textContent = JSON.stringify(company.name);
  nameEl.textContent = name;
  usernameEl.textContent = username;
  
  card.appendChild(addressEl);
  card.appendChild(companyEl);
  card.appendChild(nameEl);
  card.appendChild(usernameEl);
  
  return card;
}

function getUserFromJson(list) {
  requestMy.innerHTML = ''
  list.forEach(item => {
    const card = renderUserList(item)
  
    requestMy.appendChild(card)
  });
}