/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
//* funzione tradizionale

/**
 *
 * @param {Array} arr
 * @returns {Array}
 */
function firstLettersArr(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const firstLetter = arr[i][0];
    newArr.push(firstLetter);
  }
  return newArr;
}

const initialsArrow = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const firstLetter = arr[i][0];
    newArr.push(firstLetter);
  }
  return newArr;
};
// Invoca la funzione qui e stampa il risultato in console
const initials = firstLettersArr(names);
console.log("Tradizionale: " + initials);
console.log("Arrow: " + initialsArrow(names));
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
