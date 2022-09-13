
// punto nr 1: impostare strutture var, let e const


let keyword_Var_Let = 'var/let';
const keywordConst= 'const';

// punto nr 2: Esempio differenza fra var/let e const

let log1=`Le keywords ${keyword_Var_Let} differenziano dalla keyword ${keywordConst} per il fatto che quest\'ultima è costante, una volta impostato il suo valore non può essere modificata mentre le prime si possono cambiare come nell\'esempio in basso`;
console.log(log1);

keyword_Var_Let = 'let ---> la più consona da usare';


//keywordConst= 'modifica'----> mi da errore
let log2=`Utilizzando lo stesso nome identificatore non ho più var/let ma ${keyword_Var_Let} mentre per il nome di const non si ha modifica ma rimane ${keywordConst}`;
console.log(log2);
//punti nr 3 e 4: Assegnare diversi tipi di dati alle variabili utilizzando anche dei tipi booleani da utilizzare in una stringa

let stringa = 'Il tipo stringa è solo testo e viene assegnato con gli apici \' o virgolette \"';
let numeri_int = 100;
let numeri_float = 45.50;
let Undefined;
let Null = null;

let log3=`${stringa}, posso assegnare alla variabile un dato di tipo numero come ${numeri_int} oppure ${numeri_float}, ma se diamo delle condizioni alle nostre variabili potremmo avere ${numeri_int > numeri_float || numeri_float<numeri_int} oppure ${stringa===Null}`;
console.log(log3)
let log4=`Inoltre esistono anche dei tipi di dato ${Undefined} quando nonn viene data alcun valore alla variabile, oppure ${Null}, un vero e proprio valore che può svuotare una variabile e definire un valore nullo`;
console.log(log4);

// punti nr 5 e 6: Operazioni somma e sottrazioni, direttive di ooutput

let numero1= 1

let numero2 = 10

let log5=`Potremmo formulare delle operazioni direttamente con le variabili e avere dei risultati come ${numero1 += 1} oppure ${numero2 -= 2}`;
console.log(log5);

document.getElementById('row1').innerHTML= log1
document.getElementById('row2').innerHTML= log2
document.getElementById('row3').innerHTML= log3
document.getElementById('row4').innerHTML= log4
document.getElementById('row5').innerHTML= log5