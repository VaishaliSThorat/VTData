// Switch

let city = "pune"
switch(city){
    case 'pune':
        console.log('MH')
    case 'indore':
        console.log('MP')
    case 'jaipur':
        console.log('RJ')
        break
    default:
        console.log('incorrect city name')
}

switch(city){
case "pune":
case "wardha":
    console.log('MH')
case "indore":
case "Bhopal":
    console.log("MP")
case "jaipur":
case "udaipur":
    console.log("RJ")
    break
default:
    console.log('incorrect city')
}