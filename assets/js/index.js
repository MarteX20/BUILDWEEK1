var checked = false; //variabile di controllo sia per il checkbox sia per button

window.onload = () => {

    let cb = document.getElementById('cb');
    cb.style.cursor = "pointer";
    // cb.setAttribute('checked', 'false');
    cb.removeAttribute('checked');
    let btn = document.getElementById('btn'); //bottone proceed
    btn.disabled = true;

    cb.onchange = () => {
        checked = !checked; //quando si clicca sulla checkbox diventa true e lo mostra in console log
        btn.disabled = !checked; // il btn.disabled diventa false e si attiva 
        
        if(cb.checked === true){
        localStorage.setItem('cb', 'checked');
        return true;
        }else{
            btn.disabled= true;
            localStorage.setItem('cb', 'unchecked');
        };
    };

    btn.onclick = () => {

        window.location = './page_quiz.html';
    };
};

/*
var checkbox = document.getElementById("accept");
var button = document.getElementById("proceedButton");

checkbox.addEventListener("click", toggleButton());


// Verifia se CheckBox è stata accettata
function toggleButton() {
    if (checkbox.checked === true) { // se la checkbox è chekata 
        button.disabled = false;
        accept.style.backgroundColor = "white";
        localStorage.setItem('checkBox', 'checked'); // salva il suo valore checked
        return true; // e quindi fa andare alla pagina di domande
    } else {
        button.disabled = true; 
        accept.style.backgroundColor = "transparent";
        localStorage.setItem('checkBox', 'unchecked'); // se non è checked (quindi unchecked) non fa andare avanti e reindirizza alla pagina di errore
    };
};
*/