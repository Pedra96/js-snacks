/*L'utente inserisce due parole in successione,con due prompt.
Il software stampa prima la parola più corta,poi la parola più lunga.*/

let parolaUno=prompt("inserisci una parola");

while(!isNaN(parseInt(parolaUno))){
    parolaUno=prompt("Input errato reinserisci una parola");
}
let parolaDue=prompt("inserisci una seconda parola");

while(!isNaN(parseInt(parolaDue))){
    parolaDue=prompt("Input errato reinserisci la parola");
}

if(parolaUno.length<parolaDue.length){
    console.log(parolaUno +' è una parola più corta di '+parolaDue);
}else if(parolaUno.length==parolaDue.length){
    console.log(parolaUno +' ha la stessa lunghezza di '+parolaDue);
}else if(parolaUno.length>parolaDue.length){
    console.log(parolaDue +' è una parola più corta di '+parolaUno);
}else{
    console.log("Unexpected behavior");
}