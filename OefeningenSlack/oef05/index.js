/*Zorg ervoor dat je het alfabet in een array inleest in kleine letters. Gebruik hiervoor een lus.
* Zorg ervoor dat je deze array naar een andere array kopieert en dat deze opgevuld is met het alfabet in hoofdletters*/

/*automatisch vullen van een array met kleine arrays */
let alfabet = []
let letter = " "

for(let i=97; i<123; i++){
    letter = String.fromCharCode(i)
    alfabet.push(letter)
}
console.log(alfabet)

/*kleine letters copieren naar grote letters in andere array*/
let ALFABET = alfabet.map(letters => letters.toUpperCase())
console.log(ALFABET)
