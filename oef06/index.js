/*Vermenigvuldiging en controleer: Schrijf een functie vermenigvuldigEnControleer die twee getallen vermenigvuldigt en controleert of het resultaat groter is dan 100*/

let getal1 = parseInt(prompt("Geef een eerste getal in:"))
let getal2 = parseInt(prompt("Geef een tweede getal in:"))

function vermenigvuldigEnControleer(a,b){
    return a*b > 100;
}

console.log(vermenigvuldigEnControleer(getal1,getal2))

