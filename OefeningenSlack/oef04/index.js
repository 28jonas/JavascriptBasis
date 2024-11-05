/*We maken onze klaslijst. Vraag aan de gebruiker hoeveel namen hij wil ingeven en vul deze in een array Zorg ervoor dat je de namen onder elkaar afdrukt op de volgende manier*/

/*Vraag hoeveel personen je in het array wil vullen*/
let aantalPersonen = parseInt(prompt("Hoeveel personen wil je in de array steken?"))
let personen = []

for(let i = 1; i <= aantalPersonen; i++){
    let naam = prompt("Geef de naam in");
    personen.push(naam)
}

personen.forEach(naam => console.log(naam))