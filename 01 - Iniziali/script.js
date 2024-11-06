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
//* arrow function
const initialsArrow = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const firstLetter = arr[i][0];
    newArr.push(firstLetter);
  }
  return newArr;
};

//* arrow function and map
const initialsMap = (arr) => {
    return arr.map(value => value[0])
}
// Invoca la funzione qui e stampa il risultato in console
const initials = firstLettersArr(names);
console.log("Tradizionale: " + initials);
console.log("Arrow version: " + initialsArrow(names));
console.log("Arrow + map: " + initialsMap(names));
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
