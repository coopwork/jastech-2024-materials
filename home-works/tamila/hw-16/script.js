import { Request } from './request.js';

const request = new Request('https://jsonplaceholder.typicode.com');

// Получить посты
document.getElementById('getPosts').addEventListener('click', async () => {
  try {
    const posts = await request.get('/posts');
    document.getElementById('output').innerHTML = `<pre>${JSON.stringify(posts, null, 2)}</pre>`;
  } catch (error) {
    document.getElementById('output').innerHTML = `<div class="text-danger">Error: ${error.message}</div>`;
  }
});

// Создать пост
document.getElementById('createPost').addEventListener('click', async () => {
  try {
    const postData = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    const newPost = await request.post('/posts', postData);
    document.getElementById('output').innerHTML = `<pre>${JSON.stringify(newPost, null, 2)}</pre>`;
  } catch (error) {
    document.getElementById('output').innerHTML = `<div class="text-danger">Error: ${error.message}</div>`;
  }
});
