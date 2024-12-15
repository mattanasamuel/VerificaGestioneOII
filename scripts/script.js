
let listaPartecipanti = [];
let requestURL = "";
const codiceScuola = "VEIS02700X";
const elenco = document.getElementById("elenco");
let selAnno = document.getElementById('sel-anno');
selAnno.addEventListener("change", changeURLPath)
var listaStudentiFiltrati = []
selAnno.addEventListener("change", getRemoteData)

async function getRemoteData(path) {
  console.log(selAnno.value)
  console.log(path)
    try {
      // after this line, our function will wait for the `fetch()` call to be settled
      // the `fetch()` call will either return a Response or throw an error
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
  
      listaPartecipanti = await response.json();
    } catch (error) {
      console.error(`Errore reperimento strutture recettive: ${error}`);
    }
    
    //caricare tabella in base alle selezioni
    loadDataSelected()
    console.log(listaStudentiFiltrati)
    
    //elenco.innerHTML = '';
    let tabella = document.createElement("table");
    let tabella_intestazione = document.createElement("thead")
    let tabella_intestazione_nome = document.createElement("th")
    tabella_intestazione_nome.textContent = "nome";
    tabella_intestazione_nome.scope = "col"
    let tabella_intestazione_cognome = document.createElement("th");
    tabella_intestazione_cognome.textContent = "cognome";
    tabella_intestazione_cognome.scope = "col"
    let tabella_intestazione_email = document.createElement("th");
    tabella_intestazione_email.textContent = "email"
    tabella_intestazione_email.scope = "col"
    let tabella_intestazione_dataDiNascita = document.createElement("th");
    tabella_intestazione_dataDiNascita.textContent = "data di nascita"
    tabella_intestazione_dataDiNascita.scope = "col"
    let tabella_intestazione_classe = document.createElement("th");
    tabella_intestazione_classe.textContent = "classe";
    tabella_intestazione_classe.scope = "col"
    let tabella_intestazione_sezione = document.createElement("th");
    tabella_intestazione_sezione.textContent = "sezione";
    tabella_intestazione_sezione.scope = "col"
    tabella_intestazione.appendChild(tabella_intestazione_nome)
    tabella_intestazione.appendChild(tabella_intestazione_cognome)
    tabella_intestazione.appendChild(tabella_intestazione_email)
    tabella_intestazione.appendChild(tabella_intestazione_dataDiNascita)
    tabella_intestazione.appendChild(tabella_intestazione_classe)
    tabella_intestazione.appendChild(tabella_intestazione_sezione)
    tabella.appendChild(tabella_intestazione);
    tabella.classList.add("table", "table-striped")
    //elenco.appendChild(tabella)

    let tabella_contenuto = document.createElement("tbody");
    for(let studente of listaStudentiFiltrati)
    {
      let tabella_contenuto_riga = document.createElement("tr");
      let tabella_contenuto_riga_nome = document.createElement("td")
      tabella_contenuto_riga_nome.textContent = studente.name
      tabella_contenuto_riga.appendChild(tabella_contenuto_riga_nome);

      let tabella_contenuto_riga_cognome = document.createElement("td")
      tabella_contenuto_riga_cognome.textContent = studente.name
      tabella_contenuto_riga.appendChild(tabella_contenuto_riga_cognome);
      tabella_contenuto.appendChild(tabella_contenuto_riga);
    }
    tabella.appendChild(tabella_contenuto);

    elenco.appendChild(tabella);

    








    
  }
  
  //carica i dati in base alle selezioni
  
  
  
  
  function loadDataSelected(){
    //TODO
    for(let studente of listaPartecipanti)
    {
      if(studente.school.external_id == codiceScuola)
      {
        if(studente.created_at.substring(2, 4) == selAnno.value)
        {
          listaStudentiFiltrati.push(studente);
        }
      }
    }
  }

  function URLPath()
  {
    console.log(selAnno.)
    switch(selAnno.value)
    {
      case 24:
        return "json/partecipanti-oii24.json";
        break;
      
      case 23:
        return "json/partecipanti-oii23.json";
        break;

      case 22:
        return "json/partecipanti-oii22.json";
        break;
    }
  }
  getRemoteData(URLPath());

  

  