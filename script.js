let nump = document.getElementById('calcbutton')
let result = document.getElementById('res')
let numpVetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, '/', '-', '+', '*']
function numpad() {
    if (nump.attributes == 'one') {
        result.innerHTML += numpVetor[0]
    }
}