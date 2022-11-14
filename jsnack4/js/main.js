/*In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.
Bonus: Controllate che i nomi scritti anche con lettere maiuscole o minuscole siano comunque accettati! Ad se esiste Giovanni, devo poter fare entrare anche GIOvanni e così via...*/

let arrayInvitati=["andrea","francesco","giovanni","alessandro","alessio","lorenzo"];
let nomeUtente=prompt("Vediamo se sei sulla lista");

for(let i=0;i<arrayInvitati.length;i++){
    nomeUtente=nomeUtente.toLowerCase();
    if(nomeUtente==arrayInvitati[i]){
        console.log("Sei sulla lista");
    }
}