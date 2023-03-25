// Basic types
let myTypeString: string = 'Josep';
let myTypeNumber: number = 45;
let myTypeBoolean: boolean = true;

const pepe = 'Jossid';

myTypeString = pepe;

console.log(`Hello world!! My name is ${myTypeString} and i'm ${myTypeNumber} years old`);

// Array
let arrayNumber: number[] = [1, 2, 3];
let arrayNumber2: Array<number> = [1, 2, 3];

let arrayStrings: string[] = ['Josep', 'Valls', 'Valls'];

let arrayAny: any[] = [1, 'Josep', true];

// Tupla
let tuplaPlayers: [string, number, boolean] = ['Josep', 2, true];

// Tupla array
let players: [number, string][];

players = [
    [1, 'Josep'],
    [2, 'Pepe'],
    [3, 'Toni']
];