/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
//* funzione tradizionale
/**
 * 
 * @param {string} letter 
 * @param {Array} arr 
 * @returns {Array}
 */
function namesStartWith(letter, arr){
    let newArr = []; 
    // map method per convertire il nome in minuscolo;
    arr = arr.map(val => val.toLocaleLowerCase());
    // converto in minuscolo anche letter
    letter = letter.toLocaleLowerCase();
    for(let i=0; i<arr.length; i++){
        if(arr[i][0] === letter){
            newArr.push(arr[i]);
        }
    }   
    // map method per riconvertire in maiuscolo la prima lettera di ogni nome del nuovo array
    newArr = newArr.map(val => {
        val = val.replace(val[0], val[0].toLocaleUpperCase());
        return val;
    });
    return newArr;
}

//* arrow function
const sameInitialsArrow = (letter, arr) => {
    let newArr = []; 
    // map method per convertire il nome in minuscolo;
    arr = arr.map(val => val.toLocaleLowerCase());
    // converto in minuscolo anche letter
    letter = letter.toLocaleLowerCase();
    for(let i=0; i<arr.length; i++){
        if(arr[i][0] === letter){
            newArr.push(arr[i]);
        }
    }   
    // map method per riconvertire in maiuscolo la prima lettera di ogni nome del nuovo array
    newArr = newArr.map(val => {
        val = val.replace(val[0], val[0].toLocaleUpperCase());
        return val;
    });
    return newArr;
} 

//* filter method e startsWith method
//! assunzione: input lettera sempre maiuscolo (per semplicità);
const sameInitialsFilter = (letter, arr) => {
    return arr.filter(value => value.startsWith(letter));
}

// Invoca la funzione qui e stampa il risultato in console
const sameInitials = namesStartWith("a", names);
console.log("Tradizionale: " + sameInitials);
console.log("Arrow version: " + sameInitialsArrow("l", names));
console.log("(Assumi iniziale sempre maiuscolo)\nArrow + filter method: " 
    + sameInitialsFilter("M", names));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]