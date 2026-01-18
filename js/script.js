/*
# ToDo
- 5 numeri casuali
- timer di 30 secondi
- i numeri scompaiono
- 5 input per l'utente
    - validazione: no caratteri diversi da numeri, no numeri uguali
    - segnala in caso di input non valido
- verifica dei numeri
- responso
*/

function randomNumbers(quantity, max = 50, min = 1) {
  if (!(max - min > quantity)) {
    console.error("error");
    return [];
  }

  const numbers = [];

  while (numbers.length < 5) {
    const number = Math.floor(Math.random() * (max - min) + min);
    if (!numbers.includes(number)) numbers.push(number);
  }

  return numbers;
}

//selectors
const countdown = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");
const inputFields = document.querySelectorAll("input");
const result = document.getElementById("result");

// inserisci 5 numeri casuali in numbers lists:
const numbers = randomNumbers(5);
for (let i = 0; i < numbers.length; i++) {
  numbersList.innerHTML += `<li>${numbers[i]}</li>`;
}

// timer di 30 secondi
let seconds = 30;
countdown.innerText = seconds;

// OGNI SECONDO
const intervalId = setInterval(() => {
  seconds--;

  if (seconds > 0) {
    countdown.innerText = seconds;
  } else {
    // rimozione gli elementi
    countdown.classList.add("d-none");
    instructions.classList.add("d-none");
    numbersList.classList.add("d-none");
    // mostra il form per le risposte
    answersForm.classList.remove("d-none");
    clearInterval(intervalId);
  }
}, 1000);

//validazione degli imput
inputFields.forEach((input) => {
  input.addEventListener("input", () => {
    input.setCustomValidity("");
  });

  input.addEventListener("keyup", () => {
    inputFields.forEach((field) => field.setCustomValidity(""));

    const values = [];

    inputFields.forEach((field) => {
      if (field.value !== "") {
        if (values.includes(field.value)) {
          field.setCustomValidity("Numero già inserito!");
          field.reportValidity();
        }
        values.push(field.value);
      }
    });
  });
});

// INVIO DEL FORM
answersForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // rimozione del form
  answersForm.classList.add("d-none");

  // controllo delle risposte
  let guessedNumbers = [];
  for (const field of inputFields) {
    const number = eval(field.value);
    if (numbers.includes(number)) {
      guessedNumbers.push(number);
    }
  }

  // creazione messaggio del risultato finale
  if (guessedNumbers.length === 5) {
    result.innerText = `hai indovinato tutti i numeri: ${guessedNumbers.toString()}`;
  } else if (guessedNumbers.length > 0) {
    result.innerText = `hai indovinato questi numeri:${guessedNumbers.toString()}`;
  } else {
    result.innerText = "Non hai indovinato alcun numero";
  }

  // mostra il risultato finale
  result.classList.remove("d-none");
});
