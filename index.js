// questo è un file TypeScript!
// TS è un super-set di JS -> questo significa che tutto il codice JS è ammesso
// in un file TS, ma TS ci mette a disposizione una sintassi maggiorata per
// soprattutto specificare i TIPI delle VARIABILI!
console.log('HELLO TYPESCRIPT!');
// noi adesso scriveremo il nostro codice qui, nel file sorgente, e vedremo
// le modifiche direttamente applicate al browser!
// Perchè scriviamo codice in TS:
// - il codice è tipizzato e generalmente più robusto di JS
// - il compilatore TSC ci aiuterà a trasformare il nostro TS in JS super-ottimizzato
// -----
// la principale caratteristca di TS è permetterci di assegnare dei TIPI alle variabili
var counter = 0;
// come in JS l'operatore = rappresenta un'assegnazione di VALORE
// ma solo in TS potete anche utilizzare l'operatore : che rappresenta un'assegnazione di TIPO
counter = 50;
// counter = 'stefano' // <-- errore! non possiamo assegnare una stringa a counter
var myName = 'Stefano';
myName = 'Giangiorgio';
// myName = false
