/*Stap 1: Vraag aan de gebruiker hoeveel namen hij wil ingeven*/
let aantalNamen = parseInt(prompt("Hoeveel namen wilt u ingeven"));
let namen = [];

/*Stap 2: Iedere naam wordt aan de array doorgegeven*/
for(let i = 1; i<=aantalNamen; i++){
    let naam = prompt(`Geef ${i}e naam in`);
    namen.push(naam);
}

/*Stap 3: console.log(namen)*/
console.log(namen);

/*Stap 4: Sorteer de namen op alfabetisch*/
console.log(namen.sort())
/*Stap 5: Sorteer de namen in omgekeerde volgorde*/
console.log(namen.sort().reverse())
