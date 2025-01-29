document.querySelector('.sp_btn').addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(document.querySelector('.text').value);
    utterance.lang = 'ru-RU';  
    speechSynthesis.speak(utterance); 
})
