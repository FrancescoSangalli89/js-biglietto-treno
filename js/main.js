const kmDaPercorrere = parseInt(prompt('Quanti Km devi percorrere?'));

const costoXKm = 0.21;

const costoTotaleXKm = kmDaPercorrere * costoXKm;


const annoNascita = parseInt(prompt('Inserisci il tuo anno di nascita'));

const adesso = new Date();

const annoCorrente = adesso.getFullYear();
const eta = annoCorrente - annoNascita;

if ( (eta >= 18) && (eta <= 65) ) {
    alert(`Il prezzo del tuo biglietto è: ${Math.round((costoTotaleXKm) * 100) / 100}`);
} else if ( (eta >= 0) && (eta < 18) ) {
    alert(`Il prezzo del tuo biglietto è: ${Math.round((costoTotaleXKm - costoTotaleXKm*20/100) * 100) / 100}`);
} else if (eta > 65) {
    alert(`Il prezzo del tuo biglietto è: ${Math.round((costoTotaleXKm - costoTotaleXKm*40/100) * 100) / 100}`);
} else {
    alert(`Devi ancora nascere!`);
}