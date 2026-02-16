// questo è un file TypeScript!
// TS è un super-set di JS -> questo significa che tutto il codice JS è ammesso
// in un file TS, ma TS ci mette a disposizione una sintassi maggiorata per
// soprattutto specificare i TIPI delle VARIABILI!

console.log('HELLO TYPESCRIPT!')
// noi adesso scriveremo il nostro codice qui, nel file sorgente, e vedremo
// le modifiche direttamente applicate al browser!

// Perchè scriviamo codice in TS:
// - il codice è tipizzato e generalmente più robusto di JS
// - il compilatore TSC ci aiuterà a trasformare il nostro TS in JS super-ottimizzato

// -----
// la principale caratteristca di TS è permetterci di assegnare dei TIPI alle variabili
let counter: number = 0
// come in JS l'operatore = rappresenta un'assegnazione di VALORE
// ma solo in TS potete anche utilizzare l'operatore : che rappresenta un'assegnazione di TIPO
counter = 50
// counter = 'stefano' // <-- errore! non possiamo assegnare una stringa a counter

let myName: string = 'Stefano'
myName = 'Giangiorgio'
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

let host: any = 'topogigio'
// host.forEach() <-- questa riga nel browser esplode! ma se mettiamo "any" come tipo, TS non interferirà
// in genere "any" si utilizza ogni tanto come tipo "temporaneo" per capire meglio la situazione o quando sappiamo
// di avere ragione ma non conosciamo ancora perfettamente la sintassi per farlo capire a TS

let loading: boolean = true

// con l'operatore : è possibile in TS assegnare un TIPO ad una variabile.
// però da un po' di versioni TS possiede una caratteristica particolare: TYPE INFERENCE
// TS, in molte occasioni, riesce AUTOMATICAMENTE a dedurre il TIPO di una risorsa
// TS riesce a dedurre il TIPO di una risorsa grazie al SUO VALORE (di ritorno)

let mySurname = 'Casasola'
// mySurname.toFixed() // <-- perchè toFixed() non appartiene ai metodi delle stringhe

let anotherNumber = 100

// AD UNA VARIABILE NON SI PUÒ RIASSEGNARE IL TIPO DOPO LA SUA CREAZIONE
// anotherNumber: string

// FUNZIONI
const sayHello = function () {
  return 'Ciao!'
}

console.log(sayHello().length)

const creaNumero = function () {
  return Math.floor(Math.random() * 11) // numero da 0 a 10
}

const sum = function (n1: number, n2: number) {
  return n1 + n2
}

const concatenate = function (s1: string, s2: string) {
  return s1 + s2
}

// sum(10, '20') // in JS farebbe '1020, in TS non compilerebbe proprio!

concatenate('ciao ', 'stefano') // ritorna 'ciao stefano'
// concatenate('ciao') // errore, voleva 2 argomenti ma ne ha ricevuto solo uno

// indicando un parametro con '?' noi specifichiamo a TS che quel parametro è OPZIONALE (cioè potrebbe essere undefined)
// in quel caso dovreste predisporre il vostro codice per aspettarsi anche un valore undefined
const greet = function (persona: string, saluto?: string) {
  return (saluto || 'ciao') + ', ' + persona
}

greet('gianni', 'buongiorno') // 'buongiorno, gianni'
greet('simone') // 'ciao, simone'

// volendo possiamo integrare il valore di "fallback" ("rimpiazzo") direttamente nella definizione del parametro
// in quel caso un valore di tipo stringa arriverà SEMPRE a saluto, quindi non necessita di '?'
const greet2 = function (persona: string, saluto: string = 'ciao') {
  return saluto + ', ' + persona
}

greet2('gianni', 'buongiorno') // 'buongiorno, gianni'
greet2('simone') // 'ciao, simone'

// creiamo ora una funzione in cui specifico personalmente il tipo del valore di ritorno
const anotherSum = function (n1: number, n2: number): number {
  return n1 + n2
}

// TYPE UNION
// "unione di tipi" significa prevedere per una variabile un tipo appartenente a più "insiemi"

let mixed: string | number = 'ciao'
mixed = 10 // POSSIBILE, perchè il suo tipo appartiene all'unione di due insiemi, string e number

let mixed2: string | number = 100

// TYPE ALIAS
type PersonalType = string | number // d'ora in poi, scrivere PersonalType equivale a scrivere string | number

let mixed3: PersonalType = '50'

type Francesco = string // ho creato un tipo personalizzato per richiamare string

const y: Francesco = 'ciao'

type WeekDay =
  | 'Lunedì'
  | 'Martedì'
  | 'Mercoledì'
  | 'Giovedì'
  | 'Venerdì'
  | 'Sabato'
  | 'Domenica'

let giornoSettimana: WeekDay = 'Domenica'
console.log(giornoSettimana)

giornoSettimana = 'Venerdì'
giornoSettimana = 'Domenica'

// giornoSettimana = 'bobo' // <- dà errore perchè 'bobo' non è una delle possibilità espresse in WeekDay

let specialNumber: 33 | 66 | 99 = 99
// specialNumber = 100 // <-- problema, 100 non fa parte dell'insieme dei tipi possibili

// ARRAY
const namesOrNumbers: (string | number)[] = [
  'francesco',
  'giulia',
  'giorgia',
  'giuseppe',
]
// oppure
// const namesOrNumbers: PersonalType[] = ['francesco', 'giulia', 'giorgia', 'giuseppe']
namesOrNumbers.push('davide')
namesOrNumbers.push(100)

// creiamo un array di sole stringhe
const names: string[] = ['topo', 'gigio', 'coccole']
// modo alternativo
const names2: Array<string> = ['topo', 'gigio', 'coccole']

names.forEach((n) => {
  console.log(n.toUpperCase())
})

// trasformiamo names in un nuovo array fatto con le lunghezze delle stringhe
const lengths: number[] = names.map((n) => {
  return n.length
})
// lengths vale [4, 5, 7]

// PersonalType era il nostro tipo custom per string | number
const arrayX = ['ciao', 100]
arrayX.push(200)
arrayX.push('giorgia')
arrayX.forEach((x) => {
  if (typeof x === 'string') {
    // vuol dire che x è stringa
    console.log('ho trovato una stringa', x.toUpperCase())
  } else {
    // vuol dire che x è numero
    console.log('ho trovato un numero', x.toPrecision(2))
  }
})

const normalArray: (string | number)[] = ['ciao', 100, 'addio']
// nuovo tipo di dato in TS -> TUPLE
const tupleArray: [string, string, number] = ['topo', 'gigio', 100]
// una tupla richiede un numero di elementi predefinito e che ogni elemento abbia un tipo predefinito
// una tupla non vincola l'array in fase successive: è comunque possibile espandere o ridurre la lunghezza dell'array

// const addToArr = function(p1: string, p2: string, p3: number){
//     return [p1, p2, p3]
// }

// OGGETTI
// gli oggetti in TS sono la stessa struttura di JS
const smartphone = {
  brand: 'Apple',
  model: 'iPhone 17',
  color: 'green',
  storage: 256,
  activated: false,
}

// console.log(smartphone.store) // <-- errore, non esiste la proprietà "store"

// INTERFACCE
// GENERICS
