"use strict";
// Basic types
let myTypeString = 'Josep';
let myTypeNumber = 45;
let myTypeBoolean = true;
const pepe = 'Jossid';
myTypeString = pepe;
console.log(`Hello world!! My name is ${myTypeString} and i'm ${myTypeNumber} years old`);
// Array
let arrayNumber = [1, 2, 3];
let arrayNumber2 = [1, 2, 3];
let arrayStrings = ['Josep', 'Valls', 'Valls'];
let arrayAny = [1, 'Josep', true];
// Tupla
let tuplaPlayers = ['Josep', 2, true];
// Tupla array
let players;
players = [
    [1, 'Josep'],
    [2, 'Pepe'],
    [3, 'Toni']
];
// Inferencia de tipos
let myVariable;
let myVariable1;
let myVariable2 = 'Jossid';
//myVariable2 = 3; No se puede asignar un numero aqui por la inferencia de tipos
myVariable = 3;
myVariable = 'Hola';
// Unions
let myVariable3;
myVariable3 = 'hola';
// myVariable3 = false; esto va a fallar por que solo puede tener un valor de tipo string, numero o null;
