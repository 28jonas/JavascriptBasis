/*Je schrijft 3 arrays. De eerste 2 arrays vul je met een lus op met waarden van 0 tem 10, de 3e array vul je vervolgens op met de som van de waarden in array 1 en 2*/
let array1 = [];
let array2 = [];
let array3 = [];

/*Vullen van array 1*/
for(let i = 1; i<=10; i++){
    let getal = Math.floor(Math.random() * 11);
    array1.push(getal)
}
/*console.log(array1)*/

/*Vullen van array 2*/
for(let i = 1; i<=10; i++){
    let getal = Math.floor(Math.random() * 11);
    array2.push(getal)
}
/*console.log(array2)*/

array3 = array1.map((num, index) => num + array2[index]);
/*console.log(array3)*/

for(let j=0; j<10; j++){
    console.log(`${array1[j]} + ${array2[j]} = ${array3[j]}`)
}
