<p class="two" id="one" name="nm"></p>

//tagName

let tagName =
document.querySelector('p')
console.log(tagName)

// class

let className = 
document.querySelector('.two')
console.log(className)

// id
let idN = 
document.querySelector('#one')
console.log(idN)

// anyAttribute
//tabName[attribute = "value"]

let byName = 
document.querySelector("p[name='nm']")
console.log(byName)

// <h3 id = "ab" class = "cd" name = "nma">Head</h3>

let tg = document.querySelector('h3')
console.log(tg)

let classN = document.querySelector('.cd')
console.log(classN)

let inda = document.querySelector('#ab')
console.log(inda)

let rqq = document.querySelector('h3[name="nma"]')
console.log(rqq)
