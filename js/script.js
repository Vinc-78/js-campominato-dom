
const selezionaLivello = document.getElementById("selezione-difficolta");
const btnStart = document.getElementById("start-game");
const board = document.getElementById("board");
//const overlay = document.getElementById("overlay")

const punti =document.querySelector(".punteggio")

const numeroBombe = 16; // definisco il numero di bombe

let posizioneBombe =[] ; // definisco l'array a cui passo la posizione delle Bombe
// deve essere esterno per essere usato



btnStart.addEventListener("click", function () {
//resetto punteggi e blocco su l'utilizzo della funzione cliccaSucelle contenuta in generaGriglia
    gameOver=false;

    punti.innerHTML = "0";

    risultato = 0;

    faiLaGriglia();

    let datoCelle = faiLaGriglia();

    generaGriglia(datoCelle);

    posizioneBombe=generaBombe(numeroBombe, datoCelle);

    console.log(posizioneBombe); 

     

});


function generaBombe(numeroBombe, celle) {

    const arrayBombe = [];


    while (arrayBombe.length < numeroBombe) {

        let posizioneBomba = Math.ceil(Math.random() * celle);

        let posizioneEsiste = arrayBombe.includes(posizioneBomba);

        if (!posizioneEsiste) {
            arrayBombe.push(posizioneBomba);
              //aggiunge elemento all'array
            
          } else {
            // non faccio nulla
          }
    }

    return arrayBombe;

}


