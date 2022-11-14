/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Bonus: Oltre alla somma, vi chiedo il maggiore, il minore e la media.*/

let numeroUtente;
let arrayNumero=[];
let somma=0;
let numeroMaggiore=0;
let arrayMassimaLunghezza=prompt("quante volte loppiamo?");



for(let i=0;i<arrayMassimaLunghezza;i++){
    numeroUtente=prompt("Inserisci un numero");
    arrayNumero[i]=numeroUtente;
    numeroUtente=parseInt(numeroUtente);
    somma+=numeroUtente;
}
console.log('la somma di tutti i numeri è '+somma);
console.log('il numero massimo è '+Math.max(...arrayNumero));
console.log('il numero minore è '+ Math.min(...arrayNumero));
console.log("la media è "+(somma/arrayMassimaLunghezza).toFixed(2));


