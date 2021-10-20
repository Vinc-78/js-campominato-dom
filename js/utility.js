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
    livello=parseInt(livello);
    
if( livello===1) {elementi=100;}
else if (livello===2) {elementi=81;}
else if (livello===3) {elementi=49;}


    return elementi;


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
        cella.innerHTML=i+1; 
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

function cliccaSuCella() {

    let contatore = 0;

    const numeroDellaCellaCliccato = parseInt(this.textContent);

    if (posizioneBombe.includes(numeroDellaCellaCliccato)) {
        this.classList.add("bomba");
        this.textContent= "";

        
               
      } else {
        this.classList.add("click");
        incrementaPunteggio();
        
      }
       
       
}



function incrementaPunteggio() { 

   risultato = risultato +1 ;
    punti.innerHTML=risultato; 

}

