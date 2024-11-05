let namen = ["Jan", "Piet", "Klaas"];

console.log(namen[1])
console.log(namen.push("Fabio"));
console.log(namen)
console.log(namen.pop())
console.log(namen)
console.log(namen.shift())
console.log(namen)
console.log(namen.unshift("Jonas", "Dieter"));
console.log(namen)
console.log(namen.length)

namen.forEach(naam => console.log(naam)) /*Output word altijd een string*/

let getallen = [1,2,3,4,5,6,7,8,9];
let verdubbeld = getallen.map(getal => getal * 2); /*Ouput altijd een array*/
console.log(verdubbeld)

let numbers = [1,2,3,4,5,6,7,8,9]
let evengetallen = numbers.filter(getal => getal % 2 ===0);
console.log(evengetallen)

let nieuwenummers = [1,2,3,4,5,6,7,8,9]
let eersteGroterDanTwee = nieuwenummers.find(getal => getal>2)
console.log(eersteGroterDanTwee)

let index = nieuwenummers.findIndex(getal => getal>2)
console.log(index)

let fruits = ["appel" , "banaan", "peer", "meloen", "kiwi", "kersen", "sinaasappel", "watermeloen"]
let sommigeFruits = fruits.slice(1,3)
console.log(sommigeFruits)

let tvfruits = fruits.splice(1,1, "druiven")
console.log(tvfruits)

let newnumbers = [1,2,3,4,5,6,7,8,9]
let som = newnumbers.reduce((acc, num) => acc+num,0)
console.log(som)