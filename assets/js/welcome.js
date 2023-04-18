
var checkbox = document.getElementById("accept");
var button = document.getElementById("proceedButton");

checkbox.addEventListener("click", toggleButton());


// Verifia se CheckBox è stata accettata
function toggleButton() {
    if (checkbox.checked === true) { // se la checkbox è chekata 
        button.disabled = false;
        accept.style.backgroundColor = "white";
        localStorage.setItem('cb', 'checked'); // salva il suo valore checked
        return true; // e quindi fa andare alla pagina di domande
    } else {
        button.disabled = true; 
        accept.style.backgroundColor = "transparent";
        localStorage.setItem('cb', 'unchecked'); // se non è checked (quindi unchecked) non fa andare avanti e reindirizza alla pagina di errore
    };
};

//button.addEventListener('click', proceed()); non ci serve perchè l'attivazione de button dipende solo dal click sulla checkbox

/*
function proceed (){
    if(localStorage.getItem('checkBox') === 'checked'){
        //button.disabled = false;
        localStorage.setItem('accept', 'true');
    };
};
*/




// Potrebbero esserci diversi motivi per cui la checkbox potrebbe essere disattivata. Ecco alcune cose da verificare:

// Verificare che l'elemento HTML per la checkbox (<input type="checkbox" id="accept">) esista nella pagina e che l'ID sia corretto. Puoi farlo aprendo il tuo file HTML con un editor di codice e controllando che l'elemento checkbox esista e abbia l'ID "accept".

// Verificare che l'elemento HTML per il bottone (<button id="proceedButton">Procedi</button>) esista nella pagina e che l'ID sia corretto.

// Verificare che il tuo file JavaScript sia collegato correttamente al file HTML. Puoi farlo aprendo il tuo file HTML con un editor di codice e controllando che il tuo file JavaScript sia elencato correttamente nella sezione <head> o <body> del tuo file HTML.

// Verificare che il tuo file JavaScript non contenga errori di sintassi o logici. Puoi farlo aprendo il tuo file JavaScript con un editor di codice e controllando che non ci siano errori evidenziati dal tuo editor o dal tuo ambiente di sviluppo.

// Se dopo aver controllato questi punti la checkbox continua a non funzionare correttamente, potresti aver bisogno di ulteriori informazioni sul problema per risolverlo.






















/*document.getElementById('entra').addEventListener('click', function() {
    let utente = document.getElementById('utente').value;
    if (utente == '') { // Se non c'è il nome utente blocca la procedura
        alert('Inserire il nome utente!');
        return;
    }
    localStorage.setItem('utente', utente); // Scrive nel localStorage il nome utente per passarlo alla pagina successiva e verificare che l'utente sia autenticato
    location.href = '../../todo.html'; // passa alla pagina todo.html/





    
// function proceed (){
//     if(  true){
//     localStorage.setItem('accetta', true);
//     window.location.href = '../../../domande.html'
//     };
// };

//location.href = '../../todo.html';

// button.addEventListener('click', proceed());

// function proceed() {

//     localStorage.setItem('toggleButton', accettazione);
//     location.href = 'domande.html';
// };


/*window.addEventListener('load', function () {
	if (!localStorage.getItem('utente')) {
		// Se non è stato scritto nulla nel campo di input
		location.href = '../../errore.html'; // Carica la pagina di errore
	}*/ //Qualcosa del genere!!!!



