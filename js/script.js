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

function randomNumbers(quantity, max = 10, min = 0) {
  const numbers = [];
  for (let i = 0; i < quantity; i++) {
    numbers.push(Math.floor(Math.random() * (max - min) + min));
  }
  return numbers;
}

console.log(randomNumbers(5));
