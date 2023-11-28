/* 
    SOLUZIONE PALINDROMA
    1 - Chiedere all'utente di inserire una parola.
    2 - Creiamo una funzione ChechkPalindroma(parola) e gli passiamo come parametro la parola che abbiamo inserito in precedenza.
        3 - invertiamo la parola con la funzione .slpit('').reverse('').join(''), e la inseriamo nell'array;
        4.A - ? la parola invertita == parola inserita
            5 - Allora la parola è palindroma return true;
        6 - return false (possiamo mettere il return anche fuori dall if, perchè se entra trova il primo return ed esce.)

*/

/* 
    SOLUZIONE PARI O DISPARI
    1 - l'utente sceglie pari o dispari.
    2 - L'utente sceglie un numero da 1 a 5.
    3 - funzione che genera un numero da 1 a 5 (per il computer)
        3.A - funtion GenerateRandom5()
            3.A.1 - inizializziamo una variabile e gli asseggnamo la funzione che genera un numero da 1 a 5
            3.A.2 - return variabile inizializzata prima
    4 - sommiamo i due numeri
    5 - funzione che stabilisce se il numero è pari o dispari.
        5.A - funtion OddOrEven(add)
            5.A.1 ? add % 2 == 0
                5.A.1 il numero è pari return true;

            5.A.2 return false;
    6 - dichiariamo chi ha vinto. 
                
*/



//PALINDROMA
function CheckPalindroma(word) {
    //assegnamo alla variabile word_reverse la parola inversa
    let word_reverse = word.split('').reverse().join();
    //facciamo lo split anche di word in modo tale che risoluano le stesse.
    word = word.split('').join();
    if (word == word_reverse) {
        //Allora laparola inserita è uguale alla parola invertita (ossia è palindroma)
        return true;
    }
    //se non entra nell'if significa che non è palindroma 
    return false;
}


//NUMERO DA 1 A 5
function GenerateRandom5() {
    let num = Math.floor(Math.random()* 5 + 1);
    return num;
}

//PARI O DISPARI
function OddOrEven(num) {
    if (num % 2 == 0) {
        //Allora il numero è pari 
        return true;
    }

    //il numero è dispari perchè non è uscito dalla funzione dopo il controllo dell'if
    return false;
}


//applicazione della funzione CheckPalindroma(word);
let parola = prompt('Inserisci una parola e ti dirò se è palindroma: ');

if (CheckPalindroma(parola)) {
    //siamo quì perchè la parola è palindroma
    console.log('La parola che hai inserito è palindroma.');
} else {
    //siamo quì perchè la parola NON è palndroma
    console.log('La parola che hai inserito NON è palindroma.');
}

//pali  doispari

let choise = prompt('Scegli pari o dispari');
let num_user = parseInt(prompt('Inserisci un numero da 1 a 5'));

let num_cpu = GenerateRandom5();
