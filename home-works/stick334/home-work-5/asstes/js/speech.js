const speechSynthesis = window.speechSynthesis;
const voicesSelect = document.getElementById('voices');
const rate = document.getElementById('rate');
const pitch = document.getElementById('pitch');
const text = document.getElementById('text');
const LANG_RU = 'ru-RU';

let voices = [];

const generateVoices = () => {
  voices = speechSynthesis.getVoices();
  console.log(voices);
  const voicesList = voices.map((voice, index) => {
    return voice.lang === LANG_RU && `<option value=${index}>${voice.name} (${voice.lang})</option>`
  }).join('')
  voicesSelect.innerHTML = voicesList;
};

const speak = () => {
    if (speechSynthesis.speaking) {
      console.error('Воспроизводится');
      return;
    }
    if (text.value !== '') {
      const ssUtterance = new SpeechSynthesisUtterance(text.value);
      ssUtterance.voice = voices[voicesSelect.value]
      ssUtterance.pitch = pitch.value;
      ssUtterance.rate = rate.value;

      speechSynthesis.speak(ssUtterance)
    }
};
generateVoices();

document.getElementById('btn-stop').addEventListener('click', () => speechSynthesis.cancel())
document.getElementById('btn-start').addEventListener('click', speak)

rate.addEventListener('change', () => document.querySelector('.range-value').textContent = rate.value)
pitch.addEventListener('change', () => document.querySelector('.pitch-value').textContent = pitch.value)

voicesSelect.addEventListener('change', speak);

speechSynthesis.addEventListener('voiceschanged', generateVoices);