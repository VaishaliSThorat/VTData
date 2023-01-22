let buttonA = 
document.querySelector('button')
let inputText = 
document.querySelector('input')
let headOne = 
document.querySelector('h1')


console.log(buttonA)
console.log(inputText)
console.log(headOne)

buttonA.addEventListener('click', function(){
    let c1 = inputText.value
    headOne.style.color = c1
})
