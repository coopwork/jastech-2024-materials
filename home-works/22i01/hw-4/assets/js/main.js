
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
  name = '',
  address = '',
  company = '',
  username = '',
  email = ''
})


{
  
  const card = document.createElement('p');
  const addressCityEl = document.createElement('p');
  const companyEl = document.createElement('p');
  const nameEl = document.createElement('p');
  const usernameEl = document.createElement('p');
  const emailEl = document.createElement('a');
  
  card.className = 'flex flex-wrap justify-between content-center space-x-2 h-full w-50wv text-slate-700 bg-white shadow-md rounded-xl bg-clip-border m-2 p-2',
  emailEl.className = 'text-sm text-slate-500 text-decoration: underline',
nameEl.className = 'text-sm font-semibold text-slate-700',


  addressCityEl.textContent = JSON.stringify(address.city);
  emailEl.textContent = email;
  companyEl.textContent = JSON.stringify(company.name);
  nameEl.textContent = name;
  usernameEl.textContent = username;
  
  card.appendChild(nameEl);
  card.appendChild(usernameEl);
  card.appendChild(companyEl);
  card.appendChild(addressCityEl);
  card.appendChild(emailEl);
  
  return card;
}

function getUserFromJson(list) {
  requestMy.innerHTML = ''
  list.forEach(item => {
    const card = renderUserList(item)
  
    requestMy.appendChild(card)
  });
}