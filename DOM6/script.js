// selection of elements

// on user action create element
// append the element to Ol list

let olList = document.querySelector('ol')
console.log(olList)
let inputText = document.querySelector('input')
console.log(inputText)
let buttonElement = document.querySelector('button')
console.log(buttonElement)

buttonElement.addEventListener('click', function(){
    let newFruit = inputText.value
    let newElement = document.createElement('li')
    newElement.textContent = newFruit
    olList.appendChild(newElement)
})