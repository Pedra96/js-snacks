/*Fate generare un numero random da 0 a 10 al computer, e chiedete
all'utente di inserire un suo numero. Se il numero scelto dall'utente è
uguale al numero del computer informate l'utente che ha vinto, altrimenti
ha perso.
Al posto di giocare con numeri da 0 a 10, prima di giocare chiedete all'utente il numero massimo
consento (n) e fate estrarre a caso un numero da 0 a n, il resto rimane invariato.*/

let numeroMax;
let userNumero;

do{
    numeroMax=prompt("dammi il numero massimo");
}while(isNaN(numeroMax=parseInt(numeroMax))== true);
do{
    userNumero=prompt("dammi il tuo numero");
}while(isNaN(userNumero=parseInt(userNumero))== true);

let numeroRandomico=Math.floor(Math.random() * numeroMax) + 1;
userNumero=parseInt(userNumero);
if(userNumero==numeroRandomico){
    console.log("Hai vinto");
}else{
    console.log("Hai perso il numero scelto del computer era "+numeroRandomico+" tu hai scelto "+userNumero);
}
