//cada vez que la pagina carga de nuevo llama el metodo fecha
//carrusel()
//setInterval llama muchas veces
//document.body.setAttribute('onload', 'onLoad()')

const body = document.body
body.onload = () => {}

function fecha() {
  let fecha = new Date() // allow me to get local system date.
  let dia = fecha.getDate()
  let month = fecha.getMonth() + 1
  let year = fecha.getFullYear()

  // innerHTML is to replace what there is inside
  document.getElementById('pf').innerHTML = 'Fecha actual: ' + dia + '/' + month + '/' + year
  // el metodo timeout me permite llamar al metodo cada segundo
  setTimeout('fecha()', 1000) // 1000ms = 1s
}
function Hora() {
  let tiempo = new Date()
  let hours = tiempo.getHours()
  let minute = tiempo.getMinutes()
  let seconds = tiempo.getSeconds()

  document.getElementById('ph').innerText = ' Hora actual: ' + hours + ':' + minute + ':' + seconds
  setTimeout('Hora()', 1000)
}

var c = 0
function carrusel() {
  c++
  if (c > 5) {
    c = 1
  }
  const imgCab = document.getElementById('imgcab')
  imgCab.setAttribute('src', 'img/ban' + c + '.jpg')
  //este solo una vez
  //setTimeout(carrusel, 1500)
}
function cambiaColor() {
  let a = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  let c = Math.floor(Math.random() * 256)
  document.getElementById('h1cab').style.color = 'rgb(' + a + ',' + b + ',' + c + ')'
  setTimeout('cambiaColor()', 1500)
}
fecha()
Hora()
cambiaColor()
setInterval(carrusel, 1500)
