console.log("Hello World!");
console.log("Hello Boolean!");

// console.log(process.argv);
const class135 = process.argv.slice(2);
// console.log(class135);
console.log(`Hello ${class135}!`);


//Bonus 1
const number = parseInt(process.argv.slice(2));
if (number % 2 === 0) {
    console.log(`pari`);
} else {
    console.log(`dispari`);
}