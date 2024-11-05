/*Zorg ervoor dat je het alfabet in een array inleest in kleine letters. Gebruik hiervoor een lus.
* Zorg ervoor dat je deze array naar een andere array kopieert en dat deze opgevuld is met het alfabet in hoofdletters. Je mag geen gebruik maken van de functies lowercase of uppercase*/

/*automatisch vullen van een array met kleine arrays */
let alfabet = []
let ALFABET = []
let letter = " "

for(let i=97; i<123; i++){
    letter = String.fromCharCode(i)
    alfabet.push(letter)
}
console.log(alfabet)

/*kleine letters copieren naar grote letters in andere array*/
for(let i=(97-32); i<(123-32); i++){
    letter = String.fromCharCode(i)
    ALFABET.push(letter)
}
console.log(ALFABET)