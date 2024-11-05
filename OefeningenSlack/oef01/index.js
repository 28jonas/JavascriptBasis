/*Schrijf een programma waarmee je aan de gebruiker vraaagt om getallen in te geven tot hij een negatief getal intikt. Lees de getallen in een array in*/

/*Vraag getallen aan de gebruiker, zorg dat als de gebruiker een negatief getal ingeeft het stopt*/
let getal = 0;
let getallen = []

while(getal >= 0){
    getal = parseInt(prompt("Geef een getal in, als het getal negatief is zal dit stoppen"));
    getallen.push(getal);
}
getallen.pop()
console.log(getallen)

let welkGetal = parseInt(prompt("Welk getal van de array wilt u zien?"))
console.log(`Het ${welkGetal}e is ${getallen[welkGetal-1]}`)