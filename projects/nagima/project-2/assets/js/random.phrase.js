// random.phrase.js
const quotes = [
  { quote: "Знание - это сила.", author: "Фрэнсис Бэкон" },
  { quote: "Жизнь - это то, что происходит, пока ты строишь другие планы.", author: "Джон Леннон" },
  { quote: "Единственный способ сделать великие дела - это любить то, что ты делаешь.", author: "Стив Джобс" },
  { quote: "Будь изменой, которую ты хочешь увидеть в мире.", author: "Махатма Ганди" },
  { quote: "Мы не можем изменить направление ветра, но можем настроить паруса так, чтобы всегда двигаться вперед.", author: "Джимми Дин" },
  { quote: "Лучше сделать и пожалеть, чем не сделать и сожалеть.", author: "Мэри Лу Реттон" },
  { quote: "Самое важное в жизни — это не то, что ты получаешь, а то, что ты даешь.", author: "Нельсон Мандела" },
  { quote: "Самый трудный шаг - это первый шаг.", author: "Энтони Роббинс" },
  { quote: "Каждый момент — это новая возможность.", author: "Марк Твен" },
  { quote: "Сила не в том, чтобы не падать, а в том, чтобы подняться каждый раз, когда упал.", author: "Конфуций" }
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById("phrase").innerText = `"${quote.quote}"`;
  document.getElementById("author").innerText = `— ${quote.author}`;
}

document.getElementById("next-quote").addEventListener("click", getRandomQuote);
window.onload = getRandomQuote;
