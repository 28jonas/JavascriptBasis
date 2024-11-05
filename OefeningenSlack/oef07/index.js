/*Zorg ervoor dat je 2 arrays inleest met willekeurige getallen. De arrays tellen elk 10 getallen
* Zorg ervoor dat een array wordt gemaakt in de derde array met enkel en alleen de even getallen vanuit de vorige 2 arrays, daarnaast geef je ook de som van de oneven getallen ook terug van de eerste 2 arrays*/

let array1 = [];
let array2 =[];


for(let i = 1; i<=11;i++){
    let getal = Math.floor(Math.random());
    array1.push(getal)
}

console.log(array1)

for(let i = 1; i<=11; i++){
    let getal = Math.floor(Math.random());
    array2.push(getal)
}

console.log(array2)

