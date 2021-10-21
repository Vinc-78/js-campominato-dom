/**
*
* Riceve il livello di difficoltà e restituisce il numero di celle da disegnare
*
* @param {number}  livello
* @return {number}
*
*/

function numeroDiCelle(livello) {

    let elementi;
    livello = parseInt(livello);

    if (livello === 1) { elementi = 100; }
    else if (livello === 2) { elementi = 81; }
    else if (livello === 3) { elementi = 49; }


    return elementi;


}

let NumTotCelle =0;



function faiLaGriglia() {

    const livello = selezionaLivello.value;

    console.log("il livello scelto è ", livello);

    const celle = numeroDiCelle(livello);

    console.log(celle);

    NumTotCelle=celle;

    celleDisponibili = NumTotCelle - 16;

    console.log(" il numero totale di celle disponibili create ", celleDisponibili)

    return celle;

}

/**
*
* Riceve il numero di celle e in funzione di questo divide il 
*quadrato della board per il numero di celle
*
* @param {number}  
* 
*
*/

function generaGriglia(NumeroCelle) {
    //rimuove tutto dal div board( azzera la pagina)
    board.innerHTML = "";

    const CelleXRiga = Math.sqrt(NumeroCelle);
    const DimensioneCelle = 100 / CelleXRiga;


    for (let i = 0; i < NumeroCelle; i++) {
        // genero una singola cella
        //const cell = `<div class='box' style='width: ${cellSize}%; height: ${cellSize}%'></div>`;
        const cella = document.createElement("div");
        cella.classList.add("boxCell");
        cella.innerHTML = i + 1;
        cella.style.width = DimensioneCelle + "%";
        cella.style.height = DimensioneCelle + "%";
        cella.addEventListener("click", cliccaSuCella);

        // Aggiungo le celle alla board

        board.append(cella);
    }

}


// la funzione che permette di cambiare il colore aggiungendo o togliendo la classe click
// vedi css

let risultato = 0;//variabile che si deve incrementare ogni volta che cliccando non esplode

let gameOver=false; 


let celleDisponibili


function cliccaSuCella() {

    let contatore = 0;

    
    // se ho già cliccato o sono in gameCover la funzione si ferma

    if((this.classList.contains(".bomba"))||(this.classList.contains("click"))||(gameOver)){

        return;
    }

    // con questa condizione quando finiscono le celle cliccabili senza bomba il gioco si ferma
    if(celleDisponibili===0){

        alert("hai vinto !!! ")
        return;

    }

    const numeroDellaCellaCliccato = parseInt(this.textContent);

    if (posizioneBombe.includes(numeroDellaCellaCliccato)) {
        this.classList.add("bomba");
        this.textContent = "";

        alert("sei esploso")

        mostraBombe()

        gameOver=true;

        console.log("gameOver è", gameOver)

    } else {
        this.classList.add("click");
        incrementaPunteggio();

        celleDisponibili--; 
        
        console.log("Il numero di celle cliccabili sono",celleDisponibili)

        console.log("gameOver è", gameOver)
    }
}



function incrementaPunteggio() {



    risultato = risultato + 1;
    punti.innerHTML = risultato;

    return risultato;

}

//funzione per mostrare tutte le bombe presenti


function mostraBombe() {

     // questa parte di codice seleziona tutte le celle le confronta con l'array delle bombe 
    // dove trova corrispondenza da la classe che colora la bomba

    const tuttiBox = board.querySelectorAll(".boxCell");

    for (let i=0; i<posizioneBombe.length; i++ ){

        const bomba = posizioneBombe[i]; 

        const bombaCell = tuttiBox [bomba -1];

        bombaCell.textContent = "";

        bombaCell.classList.add("bomba");




    /* Per aggiungere anche un overlay con le cordinate dele bombe

     posizioneBombe.sort()

    console.log(posizioneBombe);

    const container = document.querySelector(".container")

    const doveBombe = document.createElement("div");
    doveBombe.classList.add("dove-sono");

    container.append(doveBombe);
 */
        
        

    }

    
    }

 
          

        
    
       