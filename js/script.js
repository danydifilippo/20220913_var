/* let nome = "Mirtilla";
console.log(nome);
var utente = "cliente";
console.log(utente);
const PI = 3.14;
console.log(PI);

//nome = "Lilla";
console.log(nome);
utente = "amministratore";
console.log(utente);
//PI = 4;
//console.log(PI);

let primoLavoro = "developing";
let secondoLavoro = "formazione";

let lavoro = primoLavoro + " e " + secondoLavoro;

console.log('io mi occupo di: ' + lavoro);
console.log('io mi occupo di: ' + primoLavoro + " e " + secondoLavoro);

let JS = true;
console.log('Let JS: ' + JS);

let anno;
console.log(anno);

anno = 1991;

const annoAttuale = 2021;

let anniMirtilla = annoAttuale - anno;
console.log(anniMirtilla);

console.log(nome + " ha: " + anniMirtilla + " anni");

let a = 10 + 5;
let b = 3;
let c = 10;
let somma = b + c + 2;
console.log(somma);

c++;
console.log(c);
a--;
console.log(a);

let nomePet = "Billo";
let colorePet = "rosso";
const pet = "il nome del pet: " + nomePet + "e il suo colore è: " + colorePet;
console.log(pet);

// sintassi letterale con backtick -> apice inverso
const pet1 = `il nome del pet: ${nomePet}  e il suo colore è: ${colorePet}`;
console.log(pet1);

console.log('string con \n\ righe \n\ multiple');
console.log(`string con 
righe 
multiple`); */


//racchiudo il tutto in un commento per creare qualcosa di nuovo
//ho dovuto creare sia un console.log per i commenti in console e sia una variabile con lo stesso commento per riportare lo stesso in html, non sapendo al momento se c'è altro modo


// punto nr 1: impostare strutture var, let e const


let keyword_Var_Let = 'var/let';
const keywordConst= 'const';

// punto nr 2: Esempio differenza fra var/let e const

console.log('Le keywords '+keyword_Var_Let+' differenziano dalla keyword '+keywordConst+' per il fatto che quest\'ultima è costante, una volta impostato il suo valore non può essere modificata mentre le prime si possono cambiare come nell\'esempio in basso');
let log1=`Le keywords ${keyword_Var_Let} differenziano dalla keyword ${keywordConst} per il fatto che quest\'ultima è costante, una volta impostato il suo valore non può essere modificata mentre le prime si possono cambiare come nell\'esempio in basso`;

keyword_Var_Let = 'let ---> la più consona da usare';


//keywordConst= 'modifica'----> mi da errore
console.log('Utilizzando lo stesso nome identificatore non ho più var/let ma '+keyword_Var_Let+' mentre per il nome di const non si ha modifica ma rimane '+keywordConst);
let log2=`Utilizzando lo stesso nome identificatore non ho più var/let ma ${keyword_Var_Let} mentre per il nome di const non si ha modifica ma rimane ${keywordConst}`;
//punti nr 3 e 4: Assegnare diversi tipi di dati alle variabili utilizzando anche dei tipi booleani da utilizzare in una stringa

let stringa = 'Il tipo stringa è solo testo e viene assegnato con gli apici \' o virgolette \"';
let numeri_int = 100;
let numeri_float = 45.50;
let Undefined;
let Null = null;

console.log(`${stringa}, posso assegnare alla variabile un dato di tipo numero come ${numeri_int} oppure ${numeri_float}, ma se diamo delle condizioni alle nostre variabili potremmo avere ${numeri_int > numeri_float || numeri_float<numeri_int} oppure ${stringa===Null}`)
let log3=`${stringa}, posso assegnare alla variabile un dato di tipo numero come ${numeri_int} oppure ${numeri_float}, ma se diamo delle condizioni alle nostre variabili potremmo avere ${numeri_int > numeri_float || numeri_float<numeri_int} oppure ${stringa===Null}`;
console.log(`Inoltre esistono anche dei tipi di dato ${Undefined} quando nonn viene data alcun valore alla variabile, oppure ${Null}, un vero e proprio valore che può svuotare una variabile e definire un valore nullo`);
let log4=`Inoltre esistono anche dei tipi di dato ${Undefined} quando nonn viene data alcun valore alla variabile, oppure ${Null}, un vero e proprio valore che può svuotare una variabile e definire un valore nullo`;

// punti nr 5 e 6: Operazioni somma e sottrazioni, direttive di ooutput

let numero1= 1

let numero2 = 10

console.log(`Potremmo formulare delle operazioni direttamente con le variabili e avere dei risultati come ${numero1 += 1} oppure ${numero2 -= 2}`);
let log5=`Potremmo formulare delle operazioni direttamente con le variabili e avere dei risultati come ${numero1 += 1} oppure ${numero2 -= 2}`;

document.getElementById('row1').innerHTML= log1
document.getElementById('row2').innerHTML= log2
document.getElementById('row3').innerHTML= log3
document.getElementById('row4').innerHTML= log4
document.getElementById('row5').innerHTML= log5