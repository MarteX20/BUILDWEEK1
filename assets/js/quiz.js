window.addEventListener('load', function () {
  if (localStorage.getItem('cb') !== 'checked') {
      location.href = '../errore.html';
  };
});

const questions = [
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
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
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

var count = 0;
var result = 0;

window.onload = () => {

  populateForm(count);
  setupCounter();
  startTimer();

  let btn = document.getElementById('btn1');
  btn.disabled = true;
  btn.onclick = () => {
    check();
    next();
  };
};

var currentSelection = [];

function populateForm(index) {
  if (index >= questions.length) {
    nextPage();
    return;
  }
  let title = document.getElementById('question');
  title.innerText = questions[count].question;
  let form = document.querySelector('form > fieldset > div');
  let element = questions[index];
  let lista = [...element.incorrect_answers, element.correct_answer];
  lista.sort();
  form.innerHTML = '';
  for (var i = 0; i < lista.length; i++) {
    let item = lista[i];
    let element = document.createElement('input');
    element.setAttribute('type', 'radio');
    element.setAttribute('value', item);
    element.classList = ['radio'];
    element.setAttribute('id', 'radio' + i);
    form.appendChild(element);
    let lbl = document.createElement('label');
    lbl.setAttribute('for', 'radio' + i);
    lbl.classList = ['label'];
    lbl.innerText = item;
    form.appendChild(lbl);
    element.onclick = () => {
      let btn = document.getElementById('btn1');

      let lista = document.querySelectorAll('.radio');
      if (element.checked) {
        btn.disabled = false;
        currentSelection = [element.getAttribute('id')];
      } else {
        btn.disabled = true;
      }
      for (var i = 0; i < lista.length; i++) {

        let listElement = lista[i];
        if (currentSelection.indexOf(listElement.getAttribute('id')) == -1) {
          listElement.checked = false;
        }

      }
      // let btn = document.getElementById('btn');

    };
  }
}

function setupCounter() {
  let element = document.getElementById('counter');
  element.innerHTML = "   QUESTION " + (count + 1) + "<span class=\"purple\"> / " + questions.length + "</span>";
}

var interval;

function startTimer() {
  var time = 30;
  let bar = document.querySelector('#pBar');
  bar.setAttribute('style', `--value:${30}`);
  interval = setInterval(() => {
    time--;
    if (time == 0) {

      next();

      return;
    }
    bar.setAttribute('style', `--value:${time}`);
  }, 1000);
}

function nextPage() {
  localStorage.setItem('risultato', result);
  console.log('risultato');
  console.log(result);
}

function next() {
  count++;
  clearInterval(interval);
  if (count >= questions.length) {
    nextPage();
    return;
  }

  populateForm(count);
  setupCounter();
  startTimer();
}

function check() {
  let elements = document.querySelectorAll('input[type=\"radio\"]');
  let correct = questions[count].correct_answer;
  let answer = [];
  for (var i in elements) {      
    let element = elements[i];
    if (element.checked) {
      let value = element.getAttribute('value');
      answer.push(value);
    }
  }
  console.log('risposte');
  console.table(answer);
  if (answer.every(element => correct.indexOf(element) != -1)) {
    console.log('correct answer.');
    console.log('counter: ' + (count + 1));
    result++;
  } else {
    console.log('wrong answer.');
    console.log('counter: ' + (count + 1));
  }
}