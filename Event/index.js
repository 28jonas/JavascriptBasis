let knop = document.getElementById("klikmij")

knop.addEventListener("click", function (){
    alert("Je hebt op mij geklikt!")
    document.body.style.backgroundColor = "blue"
    knop.textContent = "Ik ben aangeklikt"
})

let form = document.getElementById("mijnForm");

form.addEventListener("submit", function (event){
    event.preventDefault(); /*Zorgen dat de knop niet de pagina herlaad*/
    let naam = document.getElementById("naamInput").value;
    console.log("Naam:",naam)
    document.getElementById("naamInput").value = "";
})

document.addEventListener("keydown", function (event){
    console.log("toets ingedrukt", event.key);
})