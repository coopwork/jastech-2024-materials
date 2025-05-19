document.querySelector('.sp_btn').addEventListener('click', () => {
    const text = document.querySelector('.text').value;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU';
    speechSynthesis.speak(utterance);
});