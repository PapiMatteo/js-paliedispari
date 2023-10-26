// RACCOLTA DATI 

const userChoice     = prompt("Scegli pari o dispari");
const userNumber     = parseInt(prompt("Scegli un numero da 1 a 5"));
const computerNumber = generateRndNumber(1, 5);
const sum            = userNumber + computerNumber;
const message        = oddEven(sum);

console.log(userNumber, computerNumber, sum);
console.log(message)

// LOGICA

if (userChoice === message){
    console.log("Hai vinto!!")
} else {
    console.log("Hai perso! Vince il computer");
}

/***********************************************/
// FUNZIONI
function generateRndNumber(min, max) {
    const rndNumber = Math.floor(Math.random() * (max - min)) + min;
    return rndNumber;
}

function oddEven (numberToTest) {
    let result = "";
    if (numberToTest % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari";
    }
    return result;
}