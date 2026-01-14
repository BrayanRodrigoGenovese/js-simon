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

function randomNumbers(quantity, max = 100, min = 0) {
  const numbers = [];
  for (let i = 0; i < quantity; i++) {
    numbers.push(Math.floor(Math.random() * (max - min) + min));
  }
  return numbers;
}

//selectors
const numbersList = document.getElementById("numbers-list");

// 5 numeri casuali
const numbers = randomNumbers(5);
// inserisci i numeri in numbers lists:
for (let i = 0; i < numbers.length; i++) {
  numbersList.innerHTML += `<li>${numbers[i]}</li>`;
}

// timer di 30 secondi
let countdownSeconds = 5;
const intervalId = setInterval(() => {
  countdownSeconds--;

  if (countdownSeconds <= 0) {
    console.log("fine");
    clearInterval(intervalId);
  } else {
    console.log(countdownSeconds);
  }
}, 1000);

console.log(randomNumbers(5));
