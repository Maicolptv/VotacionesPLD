var votosG = 0;
var votosL = 0;
votosG++;
votosL++;

function activar() {
  var votos = document.getElementById('votosG');
  var gonzalo = document.getElementById('gonzalo');
  votos.innerHTML = votosG;
  votosG++;
}

function activar1() {
  var votos = document.getElementById('votosL');
  var leonel = document.getElementById('leonel');
  votos.innerHTML = votosL;
  votosL++;
}
