/*Begroeting: schrijf een functie begroet die een naam als parameter ontvangt en een begroeting retourneert*/
/*Output hallo tom*/

let mijnNaam = prompt("Wat is uw naam?")
function begroet(begroeting){
    return `Hallo ${begroeting}`;
}

console.log(begroet(mijnNaam));
