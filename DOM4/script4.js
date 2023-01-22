let head = document.querySelector('h1')
console.log(head)

let buttonB = document.querySelector('button')
console.log(buttonB)

let inputN = document.querySelector('input')
console.log(inputN)

buttonB.addEventListener('click', function(){
    let f1 = inputN.valueAsNumber
    head.style.fontSize = f1
})