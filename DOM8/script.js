let ulList = document.querySelector('ul')
console.log(ulList)

let inputText = document.querySelector('input')
console.log(inputText)

let buttonA = document.querySelector('#one')
console.log(buttonA)

buttonA.addEventListener('click', function(){
    let fruitName = inputText.value
    let newLi = document.createElement('li')
    newLi.textContent = fruitName
    ulList.appendChild(newLi)
    inputText.value = ' '
})

ulList.addEventListener('click', function(event){
    //console.log(event.target)
   // console.log(event.target.tagName)
   console.log(event.target.className)
    if(event.target.tagName == "BUTTON"){
        if(event.target.className === "remove"){
            let li = event.target.parentElement
            let ulList = li.parentElement
            ulList.removeChild(li)
        }
        else if(event.target.className === "up"){
            let li = event.target.parentElement
            let prev = li.previousElementSibling
            console.log(prev)
            if(prev){
                ulList.insertBefore(li,prev)
            }
           
        }
        else if(event.target.className === "down"){
            let li = event.target.parentElement
            let next = li.nextElementSibling
            console.log(next)
            if(next){
                ulList.insertBefore(next,li)
            }

        }
    }
})

