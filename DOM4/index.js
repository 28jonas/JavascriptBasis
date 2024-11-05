let nieuwePragraaf = document.createElement("p")
nieuwePragraaf.textContent = "Dit is een nieuwe paragraaf"
document.body.appendChild(nieuwePragraaf);

let container = document.getElementById("container");
let paragraaf = document.getElementById("paragraaf")
container.removeChild(paragraaf)