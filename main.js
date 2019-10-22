var votosG = 0;
var votosL = 0;
votosG++;
votosL++;
function activar() {
  var votos = document.getElementById('votosG');
  votos.innerHTML = votosG;
  votosG++;
  votosG * 2;
}
function activar1() {
  var votos = document.getElementById('votosL');
  votos.innerHTML = votosL;
  votosL++;
}
