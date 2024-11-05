/*Maak een knop die wanneer er op geklikt wordt de achtergrondkleur wijzigt naar een willekeurig kleur
* Maak gebruik van de radom funtie
* knop in exacte midden*/

let knop = document.getElementById("knop")

function getRandomRGBColorOpacity(){
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    const a = Math.random().toFixed(1);

    return `rgb(${r},${g},${b},${a})`
}

knop.addEventListener("click", function (){
    document.body.style.backgroundColor = getRandomRGBColorOpacity();//rgb(255,16,25)
})
