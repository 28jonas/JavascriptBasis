/*Hoogste getal: Gebruik Math.max() in een functie die het hoogste getal van drie parameters retourneert*/

let getal1 = parseInt(prompt("Geef het eerste getal in"))
let getal2 = parseInt(prompt("Geef het tweede getal in"))
let getal3 = parseInt(prompt("Geef het derde getal in"))

function hoogste(a,b,c){
    return Math.max(a,b,c);
}

console.log(hoogste(getal1, getal2, getal3))