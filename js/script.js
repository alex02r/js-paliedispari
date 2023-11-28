/* 
    SOLUZIONE PALINDROMA
    1 - Chiedere all'utente di inserire una parola.
    2 - Creiamo una funzione ChechkPalindroma(parola) e gli passiamo come parametro la parola che abbiamo inserito in precedenza.
        3 - invertiamo la parola con la funzione .slpit('').reverse('').join(''), e la inseriamo nell'array;
        4.A - ? la parola invertita == parola inserita
            5 - Allora la parola è palindroma return true;
        6 - return false (possiamo mettere il return anche fuori dall if, perchè se entra trova il primo return ed esce.)

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



//applicazione della funzione CheckPalindroma(word);
let parola = prompt('Inserisci una parola e ti dirò se è palindroma: ');

if (CheckPalindroma(parola)) {
    //siamo quì perchè la parola è palindroma
    console.log('La parola che hai inserito è palindroma.');
} else {
    //siamo quì perchè la parola NON è palndroma
    console.log('La parola che hai inserito NON è palindroma.');
}