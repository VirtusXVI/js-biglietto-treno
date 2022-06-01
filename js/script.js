// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// VARIABLES
let userKilometers = prompt("inserisci quanti chilometri vuoi percorrere");
let userAge = prompt("inserisci la tua età");

// EXECUTING ACTIONS
let userPrice = userKilometers * 0.21;
if(userAge > 65){
    userPrice = userPrice - (userPrice * 0.4)
} else if(userAge < 18){
    userPrice = userPrice - (userPrice * 0.2)
}
document.getElementById("price").innerHTML = "il prezzo del biglietto è:" + userPrice.toFixed(2);
