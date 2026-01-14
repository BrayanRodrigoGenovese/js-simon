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
  const numbers = [];
  for (let i = 0; i < quantity; i++) {
    numbers.push(Math.floor(Math.random() * (max - min) + min));
  }
  return numbers;
}

//selectors
const countdown = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");
const inputFields = document.querySelectorAll("input");

countdown.innerText = 3;

// 5 numeri casuali
const numbers = randomNumbers(5);
// inserisci i numeri in numbers lists:
for (let i = 0; i < numbers.length; i++) {
  numbersList.innerHTML += `<li>${numbers[i]}</li>`;
}

// timer di 30 secondi
let countdownSeconds = 3;
const intervalId = setInterval(() => {
  countdownSeconds--;

  if (countdownSeconds <= 0) {
    // nascondi gli elementi
    countdown.classList.add("d-none");
    instructions.classList.add("d-none");
    numbersList.classList.add("d-none");

    // mostra il form
    answersForm.classList.remove("d-none");

    clearInterval(intervalId);
  } else {
    countdown.innerText = countdownSeconds;
  }
}, 1000);

inputFields.forEach((input) => {
  input.addEventListener("input", () => {
    input.setCustomValidity("");
  });

  input.addEventListener("change", () => {
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
/*answerForm.addEventListener("submit", function (e) {
  e.preventDefault();
    const userNumbers = [];
    for (let i = 0; i < inputFields.length; i++) {
        const number = inputFields[i];
        if (number === numbers [i]) {
        }
        
    }
});*/
