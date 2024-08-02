function numpad(num) {
    let numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + num
}

function calculo() {
    let resultado = document.getElementById('res').innerHTML
    if (resultado) {
        document.getElementById('res').innerHTML = eval(resultado)
    }
}

function clean() {
    let resultado = document.getElementById('res').innerHTML = ''
}

function backspace() {
    let resultado = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length -1)
}