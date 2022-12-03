//Speech API

const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition;

    const regcognition = new SpeechRecognition();

    regcognition.start();
    regcognition.onstart = function () {
      salida.classList.add('mostrar');
      salida.textContent = 'Escuchando';
    };

    regcognition.onspeechend = function () {
        salida.textContent = 'ya no graba';
        regcognition.stop();
    };

    regcognition.onresult = function (e) {
        console.log(e.results);
    };

    const speech = document.createElement('p');
    const {confidence, transcript} = e.results[0][0];

    speech.innerHTML = `Grabando: ${transcript}`;

    const seguridad = document.createElement('p');
    seguridad.innerHTML = `$Confianz ${parseInt (confidence * 100)}%`;

    salida.appendChild(speech);
    seguridad.appendChild(speech);
}