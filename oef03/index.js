/*Controleer Even of oneven: schrijf een functie isEven die controleer of een getal even is*/
/*Resultaat moet true or false zijn*/

let getal = parseInt(prompt("Geef een getal in"))

function isEven(getala){
    /*if (getala % 2 === 0) {
        return "true";
    } else{
        return "false";
    }*/
    return getal % 2 === 0;
}

console.log(isEven(getal))