var votosG = 0;
var votosL = 0;
votosG++;
votosL++;
function activar() {
  var votos = document.getElementById('votosG');
  votos.innerHTML = votosG;
  votosG++;
  votosG * 2;
  if (votosG > 16) {
    var alerta = document.getElementById('alerta');
    alerta.innerHTML =
      '<div class="alert alert-light" role="alert">El Ganador Es Gonzalo!</div>';
  }
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
