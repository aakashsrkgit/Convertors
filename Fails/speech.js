const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = [
    'Im good you little munchkin',
    'Im good meh bruther'
];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Voice has been activated; You can talk to microphone now');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    recognition.start();
});


function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I dont understand what you said. Please suggest adding what you said to the list of responses';

    if(message.includes('how are you')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }


    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}