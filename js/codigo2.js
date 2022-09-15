const reloj = document.getElementById('time')

function time(e) {
  const date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let seconds = date.getSeconds()

  reloj.innerText = hour + ':' + minute + ':' + seconds
}
function multiColor() {
  const colors = document.getElementById('multicolor')
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  colors.style.color = 'rgb(' + r + ',' + g + ',' + b + ')'
}

const operator1 = document.getElementById('operador1')
const signo = document.getElementById('signo')
const operator2 = document.getElementById('operador2')
const botton = document.getElementById('boton')

function calculator() {
  const ope1 = parseFloat(operator1.value)
  const ope2 = parseFloat(operator2.value)
  const signos = signo.value
  let resultado
  if (
    (signos == '+' || signos == '-' || signos == '*' || signos == '/') &&
    !isNaN(ope1) &&
    !isNaN(ope2)
  ) {
    switch (signo.value) {
      case '+':
        resultado = ope1 + ope2
        break
      case '-':
        resultado = ope1 - ope2
        break
      case '*':
        resultado = ope1 * ope2
        break
      case '/':
        resultado = ope1 / ope2
        break
    }
    document.getElementById('answer').innerText = resultado
  } else {
    alert('' + 'Be careful')
  }
}
setInterval('time()', 1000)
botton.addEventListener('click', calculator)
setInterval('multiColor()', 1000)
// reloj.setAttribute('onmouseover', time(this))
