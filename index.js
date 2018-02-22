const main = document.getElementById('main')

main.addEventListener('click', function(event) {
  alert('I was clicked!')
})


const input = document.querySelector('input')

input.addEventListener('keydown', function(e) {
  if(e.which === 71) {
    return e.preventDefault()
  }
})

let divs = document.querySelectorAll('div')

function bubble(e) {
  console.log(this.firstChile.nodeValue.trim() + ' bubbled')
}

for (let i = 0; i < divs.length; i ++) {
  divs[i].addEventListener('click', bubble)
}