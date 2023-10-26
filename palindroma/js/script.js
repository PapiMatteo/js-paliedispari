// RACCOLTA DATI

const userStr    = prompt("Scegli una parola per controllare se e' palindroma");
const controlled =  palindromeCheck(userStr)

console.log(controlled);

// LOGICA

if (!controlled){
    console.log(`La parola ${userStr} non e' una parola palindroma`);
} else {
    console.log(`La parola ${userStr} e' una parola palindroma`)
}

/*********************/
// FUNZONI

function palindromeCheck(str) {
    let strLength = str.length;
    
    for (i = 0; i < strLength / 2; i++){
        if (str.charAt(i) !== str.charAt(strLength -1 - i)){
            return false   
        }
    }
    return true
}