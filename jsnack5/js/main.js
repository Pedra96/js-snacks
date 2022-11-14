/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l'array alla fine.
Al posto di stampare solo i numeri dispari, stampate anche i pari, ma suddivisi! 
Ossia prima dico che stampo tutti i numeri pari e poi stampo anche tutti i numeri dispari!*/

let newArray=[];
let newArraydispari=[];
let userinput;
for(let i=0;i<6;i++){

do{
    userinput=prompt("dammi il "+i+" numero");
}while(isNaN(userinput=parseInt(userinput))== true);
if(userinput%2==0){
    newArray.push(userinput);
}
else{
    newArraydispari.push(userinput);
}

}
console.log("stampo tutti i numeri pari "+newArray+" stampo tutti i numeri dispari "+newArraydispari);