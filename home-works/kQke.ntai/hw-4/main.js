class ApiClient {
  constructor(baseUrl) {
      this.baseUrl = baseUrl;
  }

  async request(endpoint, method = 'GET', body = null, headers = {}) {
      const url = `${this.baseUrl}${endpoint}`;
      const options = {
          method,
          headers: {
              'Content-Type': 'application/json',
              ...headers,
          },
      };

      if (body) {
          options.body = JSON.stringify(body);
      }

      try {
          const response = await fetch(url, options);
          const data = await response.json();
          if (!response.ok) {
              throw new Error(data.message || 'Something went wrong');
          }
          return data;
      } catch (error) {
          console.error('API Error:', error);
          throw error;
      }
  }

  get(endpoint, headers = {}) {
      return this.request(endpoint, 'GET', null, headers);
  }

  post(endpoint, body, headers = {}) {
      return this.request(endpoint, 'POST', body, headers);
  }

  patch(endpoint, body, headers = {}) {
      return this.request(endpoint, 'PATCH', body, headers);
  }

  put(endpoint, body, headers = {}) {
      return this.request(endpoint, 'PUT', body, headers);
  }

  delete(endpoint, headers = {}) {
      return this.request(endpoint, 'DELETE', null, headers);
  }
}

// Пример использования:
const api = new ApiClient('https://jsonplaceholder.typicode.com');

document.addEventListener("DOMContentLoaded", () => {
    const getDataBtn = document.getElementById("getData");
    const postDataBtn = document.getElementById("postData");
    const resultContainer = document.getElementById("result");

    getDataBtn.addEventListener("click", async () => {
        try {
            const data = await api.get('/posts/1');
            resultContainer.textContent = JSON.stringify(data, null, 2);
        } catch (error) {
            resultContainer.textContent = "Error fetching data";
        }
    });

    postDataBtn.addEventListener("click", async () => {
        try {
            const data = await api.post('/posts', { title: 'foo', body: 'bar', userId: 1 });
            resultContainer.textContent = JSON.stringify(data, null, 2);
        } catch (error) {
            resultContainer.textContent = "Error posting data";
        }
    });
});