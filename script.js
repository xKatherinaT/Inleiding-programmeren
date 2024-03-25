/* variabelen */

const bakerKnop = document.querySelector("#baker_img")
const buyBakerKnop = document.querySelector("#buyBaker")
const resetKnop = document.querySelector("#ResetProgress")
let bakersVeld = document.querySelector("p")
let scoreVeld = document.querySelector("h1")

  /* score bijhouden en updaten */
let score = 0
scoreVeld.textContent = ("Cookies: ") + score

  /* baker aantal bijhouden */
let bakerAantal = 1
console.log(bakersVeld)
console.log(scoreVeld)


// functions

function verhoogScore(){ 
    // disablen van bakerknop door de event listener te verwijderen
    bakerKnop.removeEventListener('click', verhoogScore)
    
    // door de afbeelding te veranderen kan een speler zien wanneer er geen nieuwe cookies gemaakt
    // kunnen worden
    bakerKnop.src = "images/baker_inactive.jpg"
    score = score + 1 *bakerAantal

    if (score >= 5){
        buyBakerKnop.disabled = false
    }
    updateScore()    
}


  // de if statement helpt met het deactiveren van de buy baker knop als de speler minder als 5 cookies heeft
  // dit zorgt ervoor dat een gebruiker geen nieuwe bakers kan kopen zonder genoeg punten
function updateScore() {
    console.log("score: " + score)
    scoreVeld.textContent = ("Cookies: ") + score
    if (score < 5){
        buyBakerKnop.disabled = true;
    }
}

  // verhogen van het aantal bakers wordt gevolgd met het verlagen van score
function verhoogBakers(){
    bakerAantal = bakerAantal + 1
    verlaagScore()
    updateBakers()
 
}

  // verlagen van de score dient als een "prijs" voor het kopen van een baker"
function verlaagScore(){
    score = score - 5 
    
    updateScore()
}

function updateBakers(){
    console.log("Aantal Bakers: " + bakerAantal)
    bakersVeld.textContent = ("Aantal Bakers: ") + bakerAantal
}

// progress reset knop werkt door het huidige aantal van het huidige aantal te verwijderen,wat altijf 0 geeft
// om te zorgen dat het spel speelbaar blijft krijgt de speler daarna meteen 1 nieuwe baker
function resetProgress(){
    score = score - score
    scoreVeld.textContent = ("Cookies: ") + score
    bakerAantal = bakerAantal - bakerAantal + 1
    bakersVeld.textContent = ("Aantal Bakers: ") + bakerAantal
    console.log("resetProgress")
    if (score >= 5){
        bakerKnop.disabled = true
    }
}

// progress bar van w3c schools https://www.w3schools.com/howto/howto_js_progressbar.asp //
let i = 0;
function move() {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    let width = 1;
    // met de interval kan ik precies instellen wat de tijd is tussen
    // het activeren van de bakers
    let id = setInterval(frame, 30);
    function frame() {
      // deze regel zorgt ervoor dat de bar stopt met vullen wanneer deze vol is
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        // wanneer de interval voltooid is wordt de baker knop weer actief
        // en wordt vervolgens de functie verhoogscore uitgevoerd en de afbeelding gewijzigd
        bakerKnop.addEventListener('click', verhoogScore)
        bakerKnop.src = "images/baker_active.jpg"
        // bakerknop afbeelding wijzigen met hulp van Tamara //
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

/* event listeners */
resetKnop.addEventListener('click', resetProgress)
bakerKnop.addEventListener('click', verhoogScore)
bakerKnop.addEventListener('click', move)
buyBakerKnop.addEventListener('click', verhoogBakers)

// maak github account, maak een nieuwe repo en bedenk een naam, zet deze op public, 
// upload al je bestanden en zet github pages aan bij Pages (instellingen)
// <gebruikersnaam>.github.io/naam_repo


