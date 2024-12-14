
var listaPartecipanti = [];
var requestURL = "json/partecipanti-oii24.json";
const codiceScuola = "VEIS02700X";
const elenco = document.getElementById("elenco");

async function getRemoteData() {
    try {
      // after this line, our function will wait for the `fetch()` call to be settled
      // the `fetch()` call will either return a Response or throw an error
      const response = await fetch(requestURL);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
  
      listaPartecipanti = await response.json();
    } catch (error) {
      console.error(`Errore reperimento strutture recettive: ${error}`);
    }
    
    //caricare tabella in base alle selezioni
    loadDataSelected()
    
  }
  
  //carica i dati in base alle selezioni
  function loadDataSelected(){
    //TODO
  }
  

  getRemoteData();

  

  