/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// saluti
const morningText = "Buongiorno ";
const afternoonText = "Buon pomeriggio ";
const eveningText = "Buonasera ";
// hours
const hours = new Date().getHours();

// Dichiara la funzione qui.
//* funzione tradizionale
function greetBonus(name) {
  if (hours >= 0 && hours < 13) {
    return morningText + name;
  } else if (hours >= 13 && hours < 17) {
    return afternoonText + name;
  } else if (hours >= 17 && hours <= 24) {
    return eveningText + name;
  } else {
    return "Error";
  }
}

//* arrow function
const greetBonusArrow = (personName) => {
  if (hours >= 0 && hours < 13) {
    return morningText + personName;
  } else if (hours >= 13 && hours < 17) {
    return afternoonText + personName;
  } else if (hours >= 17 && hours <= 24) {
    return eveningText + personName;
  } else {
    return "Error";
  }
};

// Invoca la funzione qui e stampa il risultato in console
console.log("tradizionale: " + greetBonus(name));
console.log("arrow version: " + greetBonusArrow("Pincopallino"));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
