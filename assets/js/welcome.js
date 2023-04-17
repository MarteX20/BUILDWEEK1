var checkbox = document.getElementById("accept");
var button = document.getElementById("proceedButton");

checkbox.addEventListener("click", toggleButton());

function toggleButton() {
    if (checkbox.checked === true) {
        button.disabled = false;
        accept.style.backgroundColor = "white";
        return true;
    } else {
        button.disabled = true;
        accept.style.backgroundColor = "transparent";
    };
};

button.addEventListener('click', proceed());

function proceed (){
    if(toggleButton() === true){
        //button.disabled = false;
        localStorage.setItem('accept', toggleButton());
    };
};




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



/*
    // Questo js deve prendere il nome utente, deve scriverlo da qualche parte nel localstorage (ci mostra come si fa) e deve passare alla pagina successiva. Tutto questo lo deve fare il button quindi EventListener è il button

document.getElementById('entra').addEventListener('click', function(){
    let utente = document.getElementById('utente').value; //la variabile utente è il valore che viene inserito nell'input utente
    if(utente == ''){ //se non c'è nome utente blocca procedura e manda un alert
        alert('Inserire il nome utente');
        return; // se la procedura arriva a qua non farà niente di tutto quello che c'è scritto dopo, return interrompe l'esecuzione di un blocco.
    }
    //localStorage: archiviazione nella chache del browser serve a mandare i dati da un punto all'altro della procedura e ha 2 metodi: set item (vuole il nome del local storage che è una stringa, e un valore da metterci dentro) e get item.
    localStorage.setItem('utente', utente); //questo deve andare alla pagina Todo
    location.href = './todo.html'; //location.href è l'istruzione (metodo) per fare in modo che un button sia un link.. 

});

//LocalStorage deve solo leggere e scrivere il dato ma la verifica DEVE essere fatta nell'altra pagina perchè se no potrebbe entrare chiunque

*/