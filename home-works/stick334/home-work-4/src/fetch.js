class Request {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
  
    async get(endpoint) {
      return this.request(endpoint, 'GET');
    }
  
    async post(endpoint, data) {
      return this.request(endpoint, 'POST', data);
    }
  
    async patch(endpoint, data) {
      return this.request(endpoint, 'PATCH', data);
    }
  
    async delete(endpoint) {
      return this.request(endpoint, 'DELETE');
    }
  
    async request(endpoint, method, data) {
      const url = `${this.baseUrl}${endpoint}`;
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
    if (data) {
      options.body = JSON.stringify(data);
    }
  
      try {
        const response = await fetch(url, options);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        return await response.json();
      } catch (error) {
        console.error('Fetch error:', error);
        throw error;
      }
    }
  };
  
  class DataUsers {
    constructor(request) {
      this.request = request;
      this.container = document.getElementById('users');
      this.loadButton = document.getElementById('loadUsers');
      this.loadButton.addEventListener('click', () => this.showUsers());
    }
  
  
    async showUsers() {
      try {
        this.container.innerHTML = '<p>Загрузка...</p>';
        const users = await this.request.get('/users');
        this.container.innerHTML = ''; 
        users.forEach(user => {
          const сard = document.createElement('div');
          сard.classList.add('сard');
          сard.innerHTML = `
            <h3>${user.name}</h3>
            <p><span>Email:</span> ${user.email}</p>
            <p><span>Phone:</span> ${user.phone}</p>
            <p><span>Website:</span> <a href="http://${user.website}">${user.website}</a></p>
            <p><span>Address:</span> ${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
            <p><span>Company:</span> ${user.company.name}</p>
            <p><span>Catchphrase:</span> ${user.company.catchPhrase}"</p>
          `;
          this.container.appendChild(сard);
        });
      } catch (error) {
        this.container.innerHTML = `<p>Ошибка при загрузке пользователей.</p>`;
      }
    }
  }
  
  const request = new Request('https://jsonplaceholder.typicode.com/');
  const data = new DataUsers(request);
  
  // async function usersShow() {
  //   try {
  //     const users = await request.get('/users');
  //     console.log('Users:', users);
  
  //     const newUser = await request.post('/users', { email: 'na@gmail.com', phone: '+77775284575' });
  //     console.log('New User:', newUser);
  
  //     const updatedUser = await request.patch('/users/2', { email: 'za@gmail.com' });
  //     console.log('Updated User:', updatedUser);
  
  //     await request.delete('/users/1');
  //     console.log('User deleted');
  //   } catch (error) {
  //     console.error('Error in usersShow:', error);
  //   }
  // }
  // usersShow();