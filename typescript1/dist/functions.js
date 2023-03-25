"use strict";
function great(name) {
    console.log(`Hello ${name.toUpperCase()} !!`);
}
;
great('Josep');
function getNumber() {
    return Math.floor(Math.random() * 100);
}
;
console.log(getNumber());
const printPosition = (position) => {
    if (!position.long) {
        position.long = 3;
    }
    console.log(`Latitude & Longitude are: LAT: ${position.lat} LONG: ${position.long}`);
};
printPosition({ lat: 9, long: 8 });
