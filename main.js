var votosG;
function activar() {
  let div = document.getElementById('votosG');
  div.innerHTML = aumentarvotosG(i);
  var votosG = 0;

  function aumentarvotosG(votosG) {
    for (i = 0; i < 5; i++) {
      votosG = 0;
    }
  }
}
function activar1() {
  let div = document.getElementById('votosL');
  div.innerHTML = votosG;
  var votosG;

  votosL = 0;
}
