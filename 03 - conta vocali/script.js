/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
//* funzione tradizionale
/**
 *
 * @param {string} word
 * @returns {number}
 */
function vowelCounter(word) {
  const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      counter++;
    }
  }
  return counter;
}

//* arrow function
const vowelCountArrow = (word) => {
  const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      counter++;
    }
  }
  return counter;
};

// Invoca la funzione qui e stampa il risultato in console
const vowelCount = vowelCounter(word);
console.log("Tradizionale: " + vowelCount);
console.log("Arrow version: " + vowelCountArrow("BoOlEan"));
//Risultato atteso se si passa 'javascript': 3 (a, a, i)
