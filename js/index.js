let button = document.querySelector('button');
let textSpeak = document.querySelector('input');
let voiceSelect = document.getElementById('voice');



function loadVoices() {
    let voices = speechSynthesis.getVoices();

    voices.forEach(function(voice, i) {
        let option = document.createElement('option');

        option.value = voice.name;
        option.innerHTML = voice.name;

        voiceSelect.appendChild(option);
    });
}

loadVoices();

window.speechSynthesis.onvoiceschanged = function(e) {
    loadVoices();
};

function speak(text) {
    let msg = new SpeechSynthesisUtterance();

    msg.text = text;

    if (voiceSelect.value) {
        msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voiceSelect.value; })[0];
    }

    window.speechSynthesis.speak(msg);
}


button.addEventListener('click', function(e) {
    if (textSpeak.value.length > 0) {
        speak(textSpeak.value);
    }
});