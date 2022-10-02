let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(txt);
console.log('Length from txt', txt.length);


let str = 'Apple, Banana, Kiwi';


// Slice
let part1 = str.slice(7, 13);
console.log(part1); // Banana;

let part2 = str.slice(-12, -6);
console.log(part2); // Banana;

let part3 = str.slice(7);
console.log(part3); // Banana, Kiwi;

let part4 = str.slice(-12);
console.log(part4); // Banana, Kiwi;


// Substring
let part5 = str.substring(7, 1);
console.log(part5);

let part6 = str.substring(-12, -1);
console.log(part6);


let str2 = 'Please visit Microsoft!';

// Replace
// By default replace is case sensitive and return new string. Does not change main string!;

let part7 = str2.replace('Microsoft', 'W3Schools');
console.log(part7);

// use regex (Regular Expression) for replace all string.
let part8 = str2.replace(/MICROSOFT/i, 'W3Schools');
console.log(part8); // work

let part9 = str2.replace(/MICROSOFT/, 'W3Schools');
console.log(part9); // does not work



let str3 = 'Please visit Amazon and Amazon!';

let part10 = str3.replace(/Amazon/g, 'W3Schools');
console.log(part10);

let part11 = str3.toLocaleUpperCase();
console.log(part11);

let part12 = str3.toLocaleLowerCase();
console.log(part12);

let part13 = str3.toUpperCase();
console.log(part13);

let part14 = str3.toLowerCase();
console.log(part14);


let text1 = 'Hello';
let text2 = 'Yadi';

// Concanating a string
let part15 = text1.concat(' ' + text2);
console.log(part15);


let str4 = '  Hello Yadi Ganteng  ';

// Removes whitespace from both sides of a string.
let part16 = str4.trim();
console.log(part16);

// Removes whitespace but removes whitespace only from the start of a string.
let part17 = str4.trimStart();
console.log(part17);

// Removes whitespace but removes whitespace only from the end of a string.
let part18 = str4.trimEnd();
console.log(part18);

// Padding

let text3 = '5';
let padded1 = text3.padStart(4, 'x'); // xxx5
console.log(padded1);

let padded2 = text3.padStart(4, '0'); // 0005
console.log(padded2);

let padded3 = text3.padEnd(4, 'x'); // 5xxx
console.log(padded3);

let padded4 = text3.padEnd(4, '0'); // 5000
console.log(padded4);