

const selezionaLivello = document.getElementById("selezione-difficolta");
const btnStart = document.getElementById("start-game");
const board = document.getElementById("board");

const numeroBombe = 16; // definisco il numero di bombe

let posizioneBombe =[] ; // definisco l'array a cui passo la posizione delle Bombe
// deve essere esterno per essere usato

btnStart.addEventListener("click", function () {

    const livello = selezionaLivello.value;


    console.log("il livello scelto è ", livello);

    const celle = numeroDiCelle(livello);

    console.log(celle);

    generaGriglia(celle);

    posizioneBombe=generaBombe(numeroBombe, celle);

    console.log(posizioneBombe); 

});


function generaBombe(numeroBombe, celle) {

    const arrayBombe = [];

    while (arrayBombe.length < numeroBombe) {

        let posizioneBomba = Math.ceil(Math.random() * celle);

        let posizioneEsiste = arrayBombe.includes(posizioneBomba);

        if (!posizioneEsiste) {
            arrayBombe.push(posizioneBomba);

            
          } else {
            // non faccio nulla
          }

          

    }

    return arrayBombe;

}


