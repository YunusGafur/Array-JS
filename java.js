let favFilm = ["Avatar","Matrix","Toy Story"];

const hobbies = new Array("Climbing","Hanging out","Video Games");
const luckyNumbers = new Array(1,2,3);

const cars = ["toyota","Nissan","Ford"];
let myNewCar = cars[2];

const fortune = ["yes","no","maybe","ask again"];

console.log(fortune[2]);
fortune[0] = "Absolutely!";
fortune[1] = "NO! WRONG!";
fortune[2] = "Diddy 67 Perhaps";
fortune[3] = "I couldn't hear you";
console.log(fortune[0]);
console.log(fortune[1]);
console.log(fortune[2]);
console.log(fortune[3]);

const superlong = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let length = superlong.length;
console.log(superlong.length)

superlong[superlong.length-1] = 1000000;

console.log(fortune.length);
console.log(fortune[fortune.length - 1]);
fortune.push("sometimes");
console.log(fortune[fortune.length - 1]);
fortune.pop();
console.log(fortune[fortune.length - 1]);

function printFirstAndThird(arr) {
    console.log(arr[0]);
    console.log(arr[2]);
}
printFirstAndThird(arr);