/* Bereken dagen tussen twee datums: schrijf een functie dagen die het aantal dagen tussen twee datums retourneert*/

function dagenTussen(datum1, datum2){
    const tijdverschil = Math.abs(Date.parse(datum2) - Date.parse(datum1));
    return tijdverschil / (1000*60*60*24);
}


console.log(dagenTussen('2024-11-04' , '2002-08-22'))

function jarenENMaanden(datum1, datum2){
    const dagen = dagenTussen(datum1, datum2);
    const jaren = dagen / 365;

}

console.log(jarenENMaanden('2024-11-04' , '2002-08-22'))
