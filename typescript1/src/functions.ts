function great (name: string) {
    console.log(`Hello ${name.toUpperCase()} !!`)
};

great('Josep');

function getNumber (): number {
    return Math.floor(Math.random() * 100);
};

console.log(getNumber());

const printPosition = (position: {lat: number, long?: number}) => {
    if(!position.long){ position.long = 3}
    console.log(`Latitude & Longitude are: LAT: ${position.lat} LONG: ${position.long}`)};

printPosition({lat: 9, long: 8})