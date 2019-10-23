var votosG = 0;
var votosL = 0;
votosG++;
votosL++;

function activar() {
  var votos = document.getElementById('votosG');
  var gonzalo = document.getElementById('gonzalo');
  votos.innerHTML = votosG;
  votosG++;

  if (votosG > 16) {
    var alerta = document.getElementById('alerta');
    alerta.innerHTML =
      '<div class="alert alert-light" role="alert">El Ganador Es Gonzalo!</div>';
  }
  gonzalo.addEventListener('click', () => {
    speechSynthesis.onvoiceschanged = () => {
      const text = 'Has votado por Gonzalo Castillo, gracias por su colaboracion'
      const synth = speechSynthesis
      const voices = synth.getVoices()
      const utterThis = new SpeechSynthesisUtterance(text)
      utterThis.voice = voices.find(v => v.name === 'Ellen')
      utterThis.rate = 0.7
      synth.speak(utterThis)
      return speechSynthesis
    }
  })
}

function activar1() {
  var votos = document.getElementById('votosL');
  votos.innerHTML = votosL;
  votosL++;
  if (votosL > 16) {
    var alerta = document.getElementById('alerta');
    alerta.innerHTML =
      '<div class="alert alert-light" role="alert">El Ganador Es Leonel!</div>';
  }
}