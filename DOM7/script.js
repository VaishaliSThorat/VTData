let lisT = document.querySelector('ul')
let ButtonName = document.querySelector('#one')
let inputText = document.querySelector('input')

console.log(lisT)
console.log(ButtonName)
console.log(inputText)

ButtonName.addEventListener('click', function(){
    let text = inputText.value
    let newEl = document.createElement('li')
    newEl.textContent = text
    createButton(newEl)
    lisT.appendChild(newEl)
    inputText.value = " "
})


// {/* <li >Apple
// <button class="up">Up</button>
// <button class="down">Down</button>
// <button class="remove">Remove</button>
// </li> */}

function createButton (li){
    let u = document.createElement('button')
    u.className = "up"
    u.textContent = "Up"
    li.appendChild(u)


    let d = document.createElement('button')
    d.className = "down"
    d.textContent = "Down"
    li.appendChild(d)


    let r = document.createElement('button')
    r.className = "remove"
    r.textContent = "Remove"
    li.appendChild(r)
}
