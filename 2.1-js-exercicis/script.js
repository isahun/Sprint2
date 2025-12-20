"use strict"

// Exercici 1.1: ARROW FUNCTIONS

// Nivell 1
        
// Exercici 1: Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.

const add = (a, b) =>  a + b;
console.log(add(22, 11));

//Exercici 2: Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.

const randomNumber = () => parseInt(Math.random() * 100);
console.log(randomNumber())

//Exercici 3: Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.

class Person {
    constructor (clientName) {
        this._clientName = clientName;
    }

    get clientName() { return this._clientName}

    greet = () => {
        console.log (`Hola, ${this.clientName}.`);
    }
}

    const person = new Person("Mark");
    person.greet();

//Nivell 2: 

//Exercici 4 Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.

const array = [1, 3, 6, 8, 10, 13, 16, 19, 21];

const printNumbers = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

printNumbers(array);

//Nivell 3

//Exercici 5: Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.

const printMessage = (message) => {
    setTimeout(() => { console.log(message)}, 3000);
};

printMessage("Tulips");

// Exercici 1.2: OPERADOR TERNARI

//Nivell 1

//Exercici 1: Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.

function potConduir (edat) {
    let majorEdat = edat > 18;
    
    return majorEdat ? "Pots conduir" : "No pots conduir";
}

console.log(potConduir(14));
console.log(potConduir(19));

//Exercici 2: Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.

function numGran (num1, num2) {
    let num1gran = num1 > num2;
    
    if (num1 !== num2) {
        return num1gran ? "num1 és més gran" : "num2 és més gran";
    } else { return "Els dos nombres són iguals"; }
}

console.log(numGran(42, 43));

//Nivell 2

//Exercici 3 Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.

function whatSign (num) {
    let numNeg = 
    num < 0 ? "El número és negatiu." : 
    num > 0 ? "El número és positiu." : "El número és 0.";

    return numNeg;
}

console.log(whatSign(-14));

//Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.

function trobarMaxim (a, b, c) {
    let maxValue = Math.max(a,b,c);

    let message =
    (maxValue == a) ? `El nombre més gran és ${a}.` : 
    (maxValue == b) ? `El nombre més gran és ${b}.` : `El nombre més gran és ${c}.`;

    return message;    
}    

console.log(trobarMaxim(4, 6, 15));

//Nivell 3

//Exercici 4: Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.

function parellOSenar (array) {
    let message = null;

    for (let i = 0; i < array.length; i++) {
        let pairNum = (array[i] % 2);

        message = (pairNum == 0) ? `El número ${array[i]} és parell.` : `El número ${array[i]} és senar.`;

        console.log(message);
    }
}

const array2 = [3, 5, 9, 12, 33, 56, 73];
parellOSenar(array2);

//EXERCICI 1.3: CALLBACKS

//Nivell 1

//Exercici 1. Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

function processar (num, imprimir) {
    imprimir(num)
}

function imprimir(num) {
    console.log(num);
}

processar(3, imprimir);

//Exercici 2. Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.

function calculadora(num1, num2, suma) {
    suma(num1, num2);
}

function suma(num1, num2) {
    const resultat = num1 + num2;
    console.log(resultat);
}

calculadora(17, 39, suma);

//Nivell 2

//Exercici 3. Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.

function esperarISaludar (nom, cridarNom) {
    cridarNom(nom);
}

function cridarNom(nom) {
setTimeout(() => { console.log(nom)}, 2000)
}

esperarISaludar("Cristina", cridarNom);

//Exercici 4. Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.

function processarElements(array, mostraElement) {
    array.forEach(mostraElement);
}

function mostraElement(element) {
    console.log(element);
}

const array3 = [3, 7, 13, 17, 23, 27];

processarElements(array3, mostraElement);

//Nivell 3

//Exercici 5. Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.

function processarCadena (cadena, processarMajus) {
    const novaCadena = cadena.toUpperCase();
    
    processarMajus(novaCadena);
}

function processarMajus (novaCadena) {
    console.log(novaCadena);
}

const cadenaInput = "APTX4869";
processarCadena(cadenaInput, processarMajus);

//EXERCICI 1.4: REST & SPREAD OPERATORS

//Nivell 1

//Exercici 1. Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

const arr1 = [-4, 70, 43, 56];
const arr2 = ["Croquetes", "Olives", "Aperol", "Truita de patates"];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

//Exercici 2. Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

function suma(a, b, ...c) {
    let resultat2 = a + b;

    c.forEach(n => {
        resultat2 += n;
    });

    return resultat2;
}

console.log(suma(1,2,3,5,17));

//Nivell 2

//Exercici 3. Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

const objecte1 = {
    size: 4,
    weight: 3
};

console.log(objecte1);

const objecte2 = {...objecte1} //spread creates a shallow copy

objecte2.size = 45;

console.log(objecte2);

//Exercici 4. Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.

const fellowship = ["Frodo", "Gandalf", "Aragorn", "Merry", "Pippin", "Gimli", "Legolas"];

const [frodo, gandalf, ...mellon] = fellowship;

console.log(frodo);
console.log(gandalf);
console.log(mellon);

//Nivell 3

//Exercici 5. Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.

function triple (a, b, c) {
    console.log(a, b, c);
}

const fruites = ["Maduixa", "Cirera", "Mandarina"];
triple(...fruites);

//Exercici 6. Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.

const peonia = {
    color: "Rosa",
    familia: "Paeoniaceae"
};

const rosa = {
    espines: true,
    fulla: "aspra"
};

const flors = {... peonia, ...rosa};
console.log(flors);

//EXERCICI 1.5: ARRAY TRANSFORMATIONS

//Nivell 1

//Exercici 1. Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.

const primeNums = [1, 3, 5, 7, 11];
const primeSq = primeNums.map(square);

function square(number) {
    return number * number;
}

console.log(primeNums);
console.log(primeSq);

//Exercici 2. Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.

const arrayFour = [1, 2, 3, 4];
const arrayPair = arrayFour.filter(findPairs);

function findPairs (number) {
    return number % 2 == 0;
}

console.log(arrayFour);
console.log(arrayPair);

//Exercici 3. Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.

const arrayTen = [1, 10 , 8, 11];
const arrayOverTen = arrayTen.find(findTen);

function findTen (number) {
    return number > 10;
}

console.log(arrayTen);
console.log(arrayOverTen);

//Exercici 4. Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.

const arrayReduce = [13, 7, 8, 21];

const result = arrayReduce.reduce(numberSum);

function numberSum (total, number) { //total és el valor començant x l'esquerra
    return total + number;
}

console.log(arrayReduce);
console.log(result);

//Nivell 2

//Exercici 5. Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent: 
//- Filtra els nombres majors o iguals a 10. 
// - Multiplica cada nombre filtrat per 2. 
// - Calcula la suma dels nombres filtrats i multiplicats per 2. 
// - La funció ha de retornar el resultat de la suma.

const arrayEx5 = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9]; 

function processNums (array) {
    return ((array.filter((number) => number >= 10)).map((number) => number * 2)).reduce((total,  number) => total + number);
}

console.log(processNums(arrayEx5));

//Nivell 3

//Exercici 6. Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament.

const arrayEx6 = [11, 12, 13, 14];

function checkTen (number) {
    return number > 10;
}

console.log(arrayEx6.every(checkTen));

//EXERCICI 1.6: ARRAY LOOPS

//Nivell 1

//Exercici 1. forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];

let noms = ["Anna", "Bernat", "Clara"];

noms.forEach(printNames);

function printNames(nom) {
    console.log(nom);
}

//Exercici 2. for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];

let print = "";
for (let x of noms) {
    print += x + "\n";
}

console.log(print);

//Exercici 3. filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6];

let numeros =  [1, 2, 3, 4, 5, 6];

const numerosPair = numeros.filter((number) => number % 2 === 0)

console.log(numerosPair);

//Nivell 2

//Exercici 4. for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.

let obj = {
    nom: "Ona",
    edat: 25,
    ciutat: "Barcelona"
}

let message = "";

for (let x in obj){
    message += `${x}: ${obj[x]} \n`;
}

console.log(message);

//Exercici 5. for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];

let anotherNumArray = [1, 2, 3, 4, 5, 6];

for (let x of anotherNumArray) {
    console.log(x);
    if (x === 5) break;
}

//Nivell 3

//Exercici 6. for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara']

const arrayNomsEx6 = ["Anna", "Bernat", "Clara"];
let i = -1;

for (let x of arrayNomsEx6) {
    i++
    let toPrint = `${x} [${i}] \n`
    console.log(toPrint)
}

//solució pro
for(let [index, x] of arrayNomsEx6.entries()) { //entries genera parella d valors index-element, primer assignem noms a aquestes 2 vars
    console.log(`${x} [${index}] \n`)
}


//EXERCICI 1.7: PROMISES I ASYNC/AWAIT

//Nivell 1

//Exercici 1: Creació d'una promesa. Crea una promesa que es resolgui després de 2 segons i retorni el text 'Hola, món'.

let promesa = new Promise(function(resolve) {
    setTimeout(() => {
        resolve("Hola món");
    }, 2000);
});

//Exercici 2: Utilització d'una promesa. Utilitza .then per imprimir el resultat a la consola.

promesa.then(
    resultat => console.log(resultat)
)

//Exercici 3: Promesa amb reject. Crea una promesa que es resolgui si l'input és 'Hola' i es rebutgi en qualsevol altre cas.

let input = "Adéu";

let promesa2 = new Promise (function(resolve, reject) {
    if (input === "Hola") {
        resolve("Input correcte: " + input);
    } else {
        reject("Input incorrecte");
    }
})

promesa2.then (
    ok => console.log(ok),
    err => console.log(err)
)

//Exercici 4: async / await. Escriu una funció asíncrona que esperi la promesa i imprimeixi el resultat.

/*
async function imprimirPromesa(promesa) {
    let toPrint4 = await promesa;
    console.log(toPrint4);
}

imprimirPromesa(promesa2);
*/

//Nivell 2

//Exercici 5: Gestió d'errors amb try / catch. Modifica la funció anterior per capturar errors.

async function imprimirPromesa(promesa) {
        try {
            let printOk = await promesa;
            console.log(printOk);
        } catch (error){
            console.log(error);
        }
}

imprimirPromesa(promesa2);

//Exercici 6: Exercici 6: Promise.all. Crea dues promeses que es resolguin en 2 i 3 segons i espera-les amb Promise.all.

const promesa3 = new Promise(function(resolve) {
    setTimeout(() => {
        resolve("Dos segons");
    }, 2000);
});

const promesa4 = new Promise(function(resolve) {
    setTimeout(() => {
        resolve("Tres segons");
    }, 3000);
});

//Versió amb then i check:

/*
Promise.all([promesa3, promesa4])
    .then((ok) => {
        console.log(`Promeses complertes amb èxit`, ok);
    })

    .catch((error) => { 
        console.log(`Promeses no complertes`, error); });
*/

async function funcioImprimir(promesa00, promesa01) {
    try {
        const resultats = await Promise.all([promesa00, promesa01]);
        console.log(`Promeses complertes amb èxit`, resultats)
    } catch (error) {
        console.log(`Promeses no complertes`, error)
    }
}

funcioImprimir(promesa3, promesa4); 