// Long Polling
function longPoll() {
  fetch('/events')
    .then(res => res.json())
    .then(data => {
      console.log('Получено:', data);
      longPoll(); // снова ждем
    })
    .catch(() => {
      setTimeout(longPoll, 1000); // ошибка — пробуем снова
    });
}

// SSE / Event Sourcing
const eventSource = new EventSource('/events');

eventSource.onmessage = (event) => {
  console.log('Новое событие:', event.data);
};

// WebSockets
const socket = new WebSocket('ws://localhost:3000');

socket.onopen = () => {
  console.log('Соединение установлено');
  socket.send('Привет, сервер!');
};

socket.onmessage = (event) => {
  console.log('Сообщение от сервера:', event.data);
};