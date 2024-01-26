/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  const area = l1 * l2;
  return "l'area del triangolo è = " + area;
}
console.log("esercizio 1 ", area(2, 2));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(int1, int2) {
  if (int1 === int2) {
    return (int1 + int2) * 3;
  } else {
    return int1 + int2;
  }
}

console.log("esercizio 2 ", crazySum(5, 2));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(int1) {
  let differenza = Math.abs(int1 - 19);
  if (int1 > 19) {
    differenza = differenza * 3;
  }
  return differenza;
}
console.log("esercizio 3 ", crazyDiff(18));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
  if (n === 400) {
    return console.log("il numero fornito è 400");
  } else if (n >= 20 && n <= 100) {
    return console.log("il numero fornito è compreso tra 20 e 100");
  } else {
    return console.log("il numero fornito è inferiore a 20 o superiore a 100");
  }
}
boundary(2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(string = "") {
  let string2 = string;
  if (string2.startsWith("EPICODE")) {
    return string2;
  } else {
    return (string2 = "EPICODE " + string2);
  }
}
console.log("esercizio 5 ", epify("eEPICODE ciao"));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(int) {
  if (int <= 0) {
    return "Il numero deve essere positivo.";
  }

  if (int % 3 === 0 || int % 7 === 0) {
    return int + " è un multiplo di 3 o di 7.";
  } else {
    return int + " non è un multiplo né di 3 né di 7.";
  }
}
console.log("esercizio 6 ", check3and7(7));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(stringa = "") {
  return stringa.split("").reverse().join("");
}
console.log("esercizio 7 ", reverseString("ciao"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(string) {
  let words = string.split(" ");
  let words2 = [];
  let lastletters;

  for (let index = 0; index < words.length; index++) {
    lastletters = words[index].slice(1);
    words2.push(words[index].charAt(0).toUpperCase() + lastletters);
  }
  return words2;
}
console.log("esercizio n8 = ", upperFirst("Ciao sono alfio"));

// console.log("esercizio 8 ", upperFirst("Ciao sono alfio"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(string = "") {
  let nuovaStringa = string.split("");

  nuovaStringa.pop();
  nuovaStringa.shift();
  return console.log("esercizio 9 ", nuovaStringa.join(""));
}
cutString("frontend");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(numero) {
  let numeriCasuali = [];
  for (let i = 0; i < numero; i++) {
    numeriCasuali.push(Math.floor(Math.random() * 11));
  }
  return console.log(
    "esercizio 10 " + "array numeri casuali : ",
    numeriCasuali
  );
}
giveMeRandom(5);

