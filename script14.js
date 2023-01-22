let birthYear = [1989, 1990, 1991, 1992]
let ages = []

for (let i = 0; i < birthYear.length; i++) {
    let ag = 2022 - birthYear[i]
    ages.push(ag)
}
console.log(ages)

let q1 = birthYear.map(function (el, index, array) {
    return 2022 - el
})
console.log(q1)

let numbers = [11, 22, 33, 44]
let q2 = numbers.map(function (el, ind, arr) {
    return el + 2
})
console.log(q2)

let nums = [44, 66, 77, 88, 33, 44, 56]
let above50 = []
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 50)
        above50.push(nums[i])
}
console.log(above50)

let q3 = nums.filter(function (el, index, arr) {
    return el > 50
})
console.log(q3)

let total = [11, 22, 33]
let sum = 0
for (let i = 0; i < total.length; i++) {
    sum = total[i] + sum
}
console.log(sum)

let q4 = total.reduce(function (acc, el, ind, arr) {
    return acc + el
}, 5)
console.log(q4)