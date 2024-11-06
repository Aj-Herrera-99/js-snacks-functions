/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
//* funzione tradizionale
function greet(personName){
    return "ciao " + personName;
}

// Invoca la funzione qui e stampa il risultato in console
console.log("Tradizionale: " + greet(name));


//Risultato atteso se si passa 'Mario': // ciao Mario