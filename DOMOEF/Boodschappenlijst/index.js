


function VoegToeAanLijst(){
    //haal eerst alle items op
    let invoer = document.getElementById("invoer").value;
    let lijst = document.getElementById("lijst");

//maak een li tag aan
    let nieuwElement = document.createElement("li");
    nieuwElement.textContent = invoer;

    /*Invoegen van element naast de invoer*/
    let verwijder = document.createElement("span");
    verwijder.textContent = "x";
    /*verwijder.innerHTML = '<i class="bi bi-trash"></i>*/
    verwijder.classList.add("text-danger", "ms-3","fs-1", "pe-3", "cursor-pointer", "btn")

    verwijder.addEventListener('click', function (){
        nieuwElement.remove();
    })

//toevoegen aan de lijst
    nieuwElement.appendChild(verwijder)
    lijst.appendChild(nieuwElement);


    /*wissen invoerveld*/
    document.getElementById("invoer").value = ""

    /*injecties van classes*/
    nieuwElement.classList.add("p-2", "bg-light", "rounded", "shadow-sm","mb-2", "d-flex", "justify-content-between", "fs-1")
}

//Event lister knop
let knop = document.getElementById("add");
knop.addEventListener("click", VoegToeAanLijst);
