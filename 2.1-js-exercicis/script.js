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

printMessage("Irene");

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
console.log(parellOSenar(array2));





