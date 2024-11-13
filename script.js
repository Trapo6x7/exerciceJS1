console.log("Hello world");
console.log("Bievenue dans le monde de la programmation");

console.log(" ");

let nombre1 = 5;
let nombre2 = 10;

console.log(nombre1 + nombre2);

console.log(" ");

let fruits = ["pomme", "banane", "cerise"];

for (let element of fruits) {
  console.log(element);
}

console.log(" ");

for (let i = 0; i <= 20; i = i + 2) {
  console.log(i);
}

console.log(" ");

const mot = "bonjour ca va bien?";
let count = 0;

for (let i = 0; i <= mot.length - 1; i = i + 1) {
  let letter = mot[i];
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u" ||
    letter === "y"
  ) {
    count = count + 1;
  }
}
console.log(count);

console.log(" ");

const mot2 = "autre chose";

const compte = {};

for (let i = 0; i < mot2.length; i = i + 1) {
  if (compte[mot2[i]] >= 1) {
    compte[mot2[i]] += 1;
  } else {
    compte[mot2[i]] = 1;
  }
}

console.log(compte);

console.log(" ");

let nombres = [5, -3, 12, -7, 0, 8, -2, 15, -10];

let postitif = [,];
let negatif = [,];

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] >= 0) {
    postitif.push(nombres[i]);
  } else {
    negatif.push(nombres[i]);
  }
}

console.log(" ");

console.log(postitif);
console.log(negatif);

console.log(" ");

let nombres2 = [3, 7, 12, 25, 18];

const plusGrand = Math.max(...nombres2);

console.log("Le plus grand nombre est " + plusGrand); 

console.log(" ");

let mot3 = "Bonjour"

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString(mot3));