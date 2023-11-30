/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  return l1 + l2;
};
console.log(area(10, 10));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (num1, num2) {
  somma = num1 + num2;
  if (num1 === num2) {
    somma = somma * 3;
  } else {
    somma = somma;
  }
  return somma;
};

console.log(crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (num1) {
  const mulSet = num1 % 19;
  if (mulSet === 0) {
    return "differenza";
  } else if (num1 > 19) {
    return mulSet * 3;
  }
};

console.log(crazyDiff(100));

// const crazyDiff = function (num1) {
//   somma = num1 - 19;
//   if (num1 > 19) {
//     somma = somma * 3;
//   } else {
//     somma = somma;
//   }
//   return somma;
// };
// console.log(crazyDiff(100));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (num1) {
  if ((num1 < 19 && num1 < 101) || num1 === 400) {
    return true;
  } else return false;
};
console.log(boundary(20));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const agg = "EPICODE";
const epify = function (str) {
  if (str === agg) {
    return agg;
  } else return agg + str;
};
console.log(epify(" è una scuola."));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (num1) {
  const mulTre = num1 % 3;
  const mulSet = num1 % 7;
  if (mulTre === 0) {
    return "multiolo di 3";
  } else if (mulSet === 0) {
    return "multiplo di 7";
  } else return "non è multiplo di 3 o di 7";
};

console.log(check3and7(9));
console.log(check3and7(14));
console.log(check3and7(1));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (str) {
  return str.split().reverse().join();
};
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (uno) {
  return uno
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
console.log(upperFirst("è una giornata nuvolosa"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (and) {
  return and.slice(1, 6);
};
console.log(cutString("ANDIAMO"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (nume) {
  return Math.floor(Math.random() * 11);
};
console.log(giveMeRandom(10));
