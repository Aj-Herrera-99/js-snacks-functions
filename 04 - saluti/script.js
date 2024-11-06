/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
//* funzione tradizionale
function greet(personName){
    return "ciao " + personName;
}

//* arrow function
const greetSomeone = (someone) => "ciao " + someone;

// Invoca la funzione qui e stampa il risultato in console
console.log("Tradizionale: " + greet(name));
console.log("Arrow version: " + greetSomeone("Aj"));
//Risultato atteso se si passa 'Mario': // ciao Mario