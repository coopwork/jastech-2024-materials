document.querySelector('#add_user_btn').addEventListener('click',()=>{
  document.querySelector('#add_name').value = '';
  document.querySelector('#add_website').value = '';
  document.querySelector('#add_city').value = '';
  document.querySelector('#add_company').value = '';
  document.querySelector('#add_email').value = '';
  document.querySelector('#info').textContent = '';
});

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
      const responseGet = await request.get('/users');
    console.log(responseGet);
    getUserList(responseGet)
  } catch (error) {
    console.error('Request error:', error);
  }
})();

document.querySelector('.btn_add').addEventListener('click', async () => {
  
  if (
    document.querySelector('#add_name').value !== '' &&
    document.querySelector('#add_website').value !== '' &&
    document.querySelector('#add_city').value !== '' &&
    document.querySelector('#add_company').value !== '' &&
    document.querySelector('#add_email').value !== '' 
   
    
  ) {
    try {
      const postData = {
        name: document.querySelector('#add_name').value,
        website: document.querySelector('#add_website').value,
        email: document.querySelector('#add_email').value,
        address: { city: document.querySelector('#add_city').value },
        company: { name: document.querySelector('#add_company').value },
      };

      
      const responsePost = await request.post('/users', postData);
      console.log('POST response:', responsePost);
     
      addUserToList(postData)
      
      document.querySelector('#info').setAttribute('style', 'color:green')
      document.querySelector('#info').textContent = 'Успешно добавлено';
      
    } catch (error) {
      console.error('Request error:', error);
      document.querySelector('#info').setAttribute('style', 'color:red')
      document.querySelector('#info').textContent = 'Ошибка данные не добавлены';;
    }
  } else {
    
    document.querySelector('#info').setAttribute('style', 'color:#ec942c')
    document.querySelector('#info').textContent = 'Заполните все поля';
    
  }
});


const listEl = document.querySelector('.list');
function renderUserCard({
    name = '',
    website = '',
    email	 = '',
    address = '',
    company = '',
    
    
}) 
    {
    const card = document.createElement('div');
    const nameEl = document.createElement('h3');
    const cityEl = document.createElement('p');
    const company_nameEl = document.createElement('middle');
    const emailEl = document.createElement('a');
    const siteEl = document.createElement('a');
    const idEl = document.createElement('p');

    card.className = 'user__card'
    nameEl.className = 'user__name'
    cityEl.className ='city_name'
    company_nameEl.className ='company_name'
    emailEl.className ='p_small'
    siteEl.className ='p_small'

    nameEl.textContent = name;
    siteEl.setAttribute('href',`www.`+ website);
    siteEl.setAttribute('target', '_blank');
    siteEl.textContent = `Visit website: ${website}`;
    emailEl.setAttribute('href',`mailto:`+email);
    emailEl.textContent = `Mail to: ${email}`;
    cityEl.textContent = `From ${JSON.stringify(address.city)}`;
    company_nameEl.textContent = `Works in: ${JSON.stringify(company.name)} company`;
    
    
    card.appendChild(nameEl)
    card.appendChild(cityEl)
    card.appendChild(company_nameEl)
    card.appendChild(emailEl)
    card.appendChild(siteEl)

    return card;
  }



  function getUserList(list) {
    listEl.innerHTML = ''; 
    list.forEach(item => {
      const card = renderUserCard(item); 
      listEl.appendChild(card);
    });
  }

  function addUserToList(newUser) {
    const card = renderUserCard(newUser);
    listEl.appendChild(card);
  }

   const myModal = new HystModal({
    linkAttributeName: 'data-hystmodal',
    catchFocus: true,
    waitTransitions: true,
    closeOnEsc: false,
   
});









