/*Tel Woorden: Schrijf een functie telWoorden die het aantal woorden in een string telt*/

let mijnzin = "Dit is een zin zonder inspiratie"

function telWoorden(zin){
    return zin.split(" ").length;
}

console.log(telWoorden(mijnzin))
