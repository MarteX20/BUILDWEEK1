window.addEventListener('load', function () {
    if (localStorage.getItem('checkBox') !== 'checked') {
        location.href = '../errore.html';
    };
});

let domandaCorrente = 0

var questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",

        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];



/*====== Funzioni del TIMER ======*/

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
    info: {
        color: "green"
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    }
};

const TIME_LIMIT = 05;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
        "
        ></path>
    </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
)}</span>
</div>
`;
// startTimer()

// function onTimesUp() {
//     clearInterval(timerInterval);
//     clearTimeout(timerInterval)
//     domandaCorrente++
//     randomQuestion()
//     startTimer()
// }

function startTimer() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        document.getElementById("base-timer-label").innerHTML = formatTime(
            timeLeft
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);
        if (timeLeft === 0) {
            onTimesUp()
        }
    }, 1000);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(warning.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(info.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(warning.color);
    }
}

function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
}


/*======== Funzioni Domande ========*/
var array = [];

let random = Math.floor(Math.random() * questions.length); // qua mi genera casualment l'indice dell'array questions 


var randomIndex = Math.floor(Math.random() * questions.length);
var question = () => {
    let randomQuestion = questions[randomIndex].question; //domanda casuale
    let answers = questions[randomIndex].incorrect_answers.concat(questions[randomIndex].correct_answer); //array delle risposte 
    answers.sort(() => Math.random() - 0.5); // disposizione casuale delle risposte
    console.log(randomQuestion);
    console.log(answers);

    console.log(randomIndex);
}

question();



function randomQuestion() {

    // selezionare l'indice random dell'array "questions"
    // stampare la domanda rendom selezionata dall'array "question"
    // selezionare l'elemento che disporrà la scritta
    // stampare le risposte della domanda selezionata dall'array "questions"
    // creare una lista e per ogni li generare un radio button con annesso spazio per la risposta("label")
    // timePassed = 0
    // timeLeft = TIME_LIMIT



    let risposteSbagliate = questions[random].incorrect_answers; // array risposte sbagliate della domanda random
    let rispostaCorretta = questions[random].correct_answer; // array risposte corrette della domanda random
    let arrRisposteTotali = risposteSbagliate.concat(rispostaCorretta); // array risposte totali della domanda random


    let question = () => {
        let domanda = document.getElementById("domanda"); // selezione h1 in HTML
        domanda.innerHTML = questions[random].question;

    }

    question();

    let svuotaQuestions = () => {
        question.splice(questions[random], 1);
        array.push(questions[random]);
    };

    //




    //let listaRisposte = document.getElementById("listaRisposte"); // selezione ul per la lista delle domande




    /*document.getElementById('submit').onclick = function() {
        var radiobox = document.createElement('input');
        radiobox.type = 'radio';
        radiobox.id = 'contact';
        radiobox.value = 'email';
    
        var label = document.createElement('label')
        label.htmlFor = 'contact';
    
        var description = document.createTextNode('Email');
        label.appendChild(description);
    
        var newline = document.createElement('br');
    
        var container = document.getElementById('container');
        container.appendChild(radiobox);
        container.appendChild(label);
        container.appendChild(newline);
    } */






    for (let i = 0; i < arrRisposteTotali.length; i++) {
       let risposta = listaRisposte.appendChild(document.createElement('li'))
        risposta.appendChild(document.createTextNode(arrRisposteTotali[i]));
    };




    /* let x = [risposteSbagliate, rispostaCorretta];
    for (let i = 0; i < x.length; i++){
        let risposta = listaRisposte.appendChild(document.createElement('li'));
        risposta.appendChild(document.createTextNode(x[i]));
    }*/
    let btnRisposta = () => {
        let input = document.createElement("input");
        input.type = "radio";


        var label = document.createElement('label');
        label.innerHTML = arrRisposteTotali[random];
        console.log(label);
        document.getElementById('listaRisposte').appendChild(input);
        



    };
    btnRisposta();
}



randomQuestion();

//----------------BUTTON PER DOMANDA SUCCESSIVA---------
//togliendo la domanda uscita con le sue risposte da

/*
var btnNext = document.getElementById("btnNext");

btnNext.addEventListener('click', function(){
    questions.splice(questions[random], 1);
    domandaCorrente++;
    nextQuestion();
    return questions;
});

function nextQuestion(){
    for(let i=0; i < questions.length; i++){
        let random = Math.floor(Math.random() * questions.length);
        let domanda = document.getElementById("domanda"); // selezione h1 in HTML
        domanda.innerHTML = questions[random].question;
        risposte.innerHTML = q

        
        let risposteSbagliate = questions[random].incorrect_answers; // array risposte sbagliate della domanda random
        let rispostaCorretta = questions[random].correct_answer; // array risposte corrette della domanda random
        //let arrRisposteTotali = risposteSbagliate.concat(rispostaCorretta);
        let risposte = document.getElementById('risposte')
        risposte.innerHTML = questions[random].correct_answer + questions[random].incorrect_answers; 
        
        return random;
        return arrRisposteTotali;
    };
    
    location.href = '../risultati.html';
};
*/

/*let svuotaQuestions = () => {
    question.splice(questions[random], 1);
    array.push(questions[random]);
};
*/





