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


//Bonus 2
const string = process.argv.slice(2)[0];
const vocal = ["a", "e", "i", "o", "u"];
let count = 0;

for (let i = 0; i < string.length; i++) {
  const curChar = string[i];
  if (vocal.includes(curChar)) {
    count++;
  }
}

console.log(`Nella parola ${string} ci sono ${count} vocali`);