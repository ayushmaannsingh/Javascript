// String in javascript..

const name = "Ayush"
const repocount = 10;
// console.log(name + repocount + "value"); // dont use this type of console
console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gameName = new String('Ayush');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = " Ayush "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ayushsingh.com/Ayush*50Singh"

console.log(url.replace('*50', '_'));
console.log(url.includes('Ayush'));

const person = new String(`Ayush-Man-com`);
console.log(person.split('-'));











