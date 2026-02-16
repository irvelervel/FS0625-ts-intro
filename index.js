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
// counter.toUpperCase()
// questo errore in JS non verrebbe evidenziato nell'editor ma esploderebbe a "run time"
// quali sono i TIPI di dato primitivi in TS?
// - string
// - number
// - boolean
// - undefined
// - null
// - any -> "qualunque cosa" -> dare un tipo "any" ad una variabile equivale a "spegnere" il controllo di TS
var host = 'topogigio';
// host.forEach() <-- questa riga nel browser esplode! ma se mettiamo "any" come tipo, TS non interferirà
// in genere "any" si utilizza ogni tanto come tipo "temporaneo" per capire meglio la situazione o quando sappiamo
// di avere ragione ma non conosciamo ancora perfettamente la sintassi per farlo capire a TS
var loading = true;
// con l'operatore : è possibile in TS assegnare un TIPO ad una variabile.
// però da un po' di versioni TS possiede una caratteristica particolare: TYPE INFERENCE
// TS, in molte occasioni, riesce AUTOMATICAMENTE a dedurre il TIPO di una risorsa
// TS riesce a dedurre il TIPO di una risorsa grazie al SUO VALORE (di ritorno)
var mySurname = 'Casasola';
// mySurname.toFixed() // <-- perchè toFixed() non appartiene ai metodi delle stringhe
var anotherNumber = 100;
// AD UNA VARIABILE NON SI PUÒ RIASSEGNARE IL TIPO DOPO LA SUA CREAZIONE
// anotherNumber: string
// FUNZIONI
var sayHello = function () {
    return 'Ciao!';
};
console.log(sayHello().length);
var creaNumero = function () {
    return Math.floor(Math.random() * 11); // numero da 0 a 10
};
var sum = function (n1, n2) {
    return n1 + n2;
};
var concatenate = function (s1, s2) {
    return s1 + s2;
};
// sum(10, '20') // in JS farebbe '1020, in TS non compilerebbe proprio!
concatenate('ciao ', 'stefano'); // ritorna 'ciao stefano'
// concatenate('ciao') // errore, voleva 2 argomenti ma ne ha ricevuto solo uno
// indicando un parametro con '?' noi specifichiamo a TS che quel parametro è OPZIONALE (cioè potrebbe essere undefined)
// in quel caso dovreste predisporre il vostro codice per aspettarsi anche un valore undefined
var greet = function (persona, saluto) {
    return (saluto || 'ciao') + ', ' + persona;
};
greet('gianni', 'buongiorno'); // 'buongiorno, gianni'
greet('simone'); // 'ciao, simone'
// volendo possiamo integrare il valore di "fallback" ("rimpiazzo") direttamente nella definizione del parametro
// in quel caso un valore di tipo stringa arriverà SEMPRE a saluto, quindi non necessita di '?'
var greet2 = function (persona, saluto) {
    if (saluto === void 0) { saluto = 'ciao'; }
    return saluto + ', ' + persona;
};
greet2('gianni', 'buongiorno'); // 'buongiorno, gianni'
greet2('simone'); // 'ciao, simone'
// creiamo ora una funzione in cui specifico personalmente il tipo del valore di ritorno
var anotherSum = function (n1, n2) {
    return n1 + n2;
};
// TYPE UNION
// "unione di tipi" significa prevedere per una variabile un tipo appartenente a più "insiemi"
var mixed = 'ciao';
mixed = 10; // POSSIBILE, perchè il suo tipo appartiene all'unione di due insiemi, string e number
var mixed2 = 100;
var mixed3 = '50';
var y = 'ciao';
var giornoSettimana = 'Domenica';
console.log(giornoSettimana);
giornoSettimana = 'Venerdì';
giornoSettimana = 'Domenica';
// giornoSettimana = 'bobo' // <- dà errore perchè 'bobo' non è una delle possibilità espresse in WeekDay
var specialNumber = 99;
// specialNumber = 100 // <-- problema, 100 non fa parte dell'insieme dei tipi possibili
// ARRAY
var namesOrNumbers = [
    'francesco',
    'giulia',
    'giorgia',
    'giuseppe',
];
// oppure
// const namesOrNumbers: PersonalType[] = ['francesco', 'giulia', 'giorgia', 'giuseppe']
namesOrNumbers.push('davide');
namesOrNumbers.push(100);
// creiamo un array di sole stringhe
var names = ['topo', 'gigio', 'coccole'];
// modo alternativo
var names2 = ['topo', 'gigio', 'coccole'];
names.forEach(function (n) {
    console.log(n.toUpperCase());
});
// trasformiamo names in un nuovo array fatto con le lunghezze delle stringhe
var lengths = names.map(function (n) {
    return n.length;
});
// lengths vale [4, 5, 7]
// PersonalType era il nostro tipo custom per string | number
var arrayX = ['ciao', 100];
arrayX.push(200);
arrayX.push('giorgia');
arrayX.forEach(function (x) {
    if (typeof x === 'string') {
        // vuol dire che x è stringa
        console.log('ho trovato una stringa', x.toUpperCase());
    }
    else {
        // vuol dire che x è numero
        console.log('ho trovato un numero', x.toPrecision(2));
    }
});
var normalArray = ['ciao', 100, 'addio'];
// nuovo tipo di dato in TS -> TUPLE
var tupleArray = ['topo', 'gigio', 100];
// una tupla richiede un numero di elementi predefinito e che ogni elemento abbia un tipo predefinito
// una tupla non vincola l'array in fase successive: è comunque possibile espandere o ridurre la lunghezza dell'array
// const addToArr = function(p1: string, p2: string, p3: number){
//     return [p1, p2, p3]
// }
// OGGETTI
// gli oggetti in TS sono la stessa struttura di JS
var smartphone = {
    brand: 'Apple',
    model: 'iPhone 17',
    color: 'green',
    storage: 256,
    activated: false,
    configuration: {
        onlinePurchase: true,
        date: '2026-02-16',
    },
    availableStorages: [256, 512, 1024],
};
smartphone.availableStorages.forEach(function (as) {
    console.log(as.toString());
});
// console.log(smartphone.store) // <-- errore, non esiste la proprietà "store"
var dog1 = {
    breed: 'Shepard',
    age: 3,
    personality: 'Playful',
};
var dog2 = {
    breed: 'Retriever',
    age: 6,
    personality: 'Sleeper',
};
// PedegreeDog è un'interfaccia dotata di 4 proprietà: breed, age e personality le ha ereditate dall'interfaccia
// Dog mentre pedegreeType l'ha dichiarata lei
var dog3 = {
    breed: 'Poddle',
    age: 3,
    personality: 'Diva',
    pedegreeType: 1,
};
var epicodeAddress = {
    civicNumber: 16,
    street: 'Via dei Magazzini Generali',
    city: 'Rome',
    zipCode: '00154',
};
var anotherAddress = {
    civicNumber: '25/A',
    street: 'Via Roma',
    city: 'Trieste',
    zipCode: '00011',
};
// ora, l'interfaccia GenericAddress NON SA quale sarà il tipo di civicNumber!
// sarà l'UTILIZZO dell'interfaccia (quando creeremo gli oggetti) che fornirà a GenericAddress il tipo per civicNumber
var simpleAddress = {
    civicNumber: 100,
    street: 'Corso Italia',
    city: 'Bologna',
    zipCode: '23232',
};
var complexAddress = {
    civicNumber: '100/C',
    street: 'Via Roma',
    city: 'Napoli',
    zipCode: '34433',
};
