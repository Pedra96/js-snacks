/*Fate generare un numero random da 0 a 10 al computer, e chiedete
all'utente di inserire un suo numero. Se il numero scelto dall'utente è
uguale al numero del computer informate l'utente che ha vinto, altrimenti
ha perso.
Al posto di giocare con numeri da 0 a 10, prima di giocare chiedete all'utente il numero massimo
consento (n) e fate estrarre a caso un numero da 0 a n, il resto rimane invariato.*/



do{
    numeroMin=prompt("dammi il primo numero");
}while(isNaN(numeroMin=parseInt(numeroMin))== true);

do{
    numeroMax=prompt("dammi il secondo numero");
}while(isNaN(numeroMax=parseInt(numeroMax))== true);