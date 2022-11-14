/*L'utente inserisce due numeri in succesione,con due prompt.
il software stampa il maggiore*/


let inputuno;
let inputdue;
do{
    inputuno= prompt("inserisci un numero");
}while(isNaN(inputuno=parseInt(inputuno))== true);

do{
    inputdue= prompt("inserisci un altro numero");
}while(isNaN(inputdue=parseInt(inputdue))== true);

if(inputuno>inputdue){
    console.log(inputuno+" è maggiore");
}else if(inputuno<inputdue){
    console.log(inputdue+" è maggiore");
}else if(inputuno==inputdue){
    console.log(inputdue+" sono uguali");
}else{
    console.log("Error unexpected behavior");
}
