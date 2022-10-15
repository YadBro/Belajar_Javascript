// How to convert any type to boolean

// good
const good = Boolean('true');
const good2 = !!('true');
const good3 = new Boolean(true);
const good4 = !!(1); // true (convert number to boolean);

// bad
const bad = new Boolean('true'); // this is bad, don't use keyword new. Work but bad way (Not recomendation);

if (good && good2 && good3 && good4) {
  console.log('good');
}

if (bad) {
  console.log('Work but bad way');
}


// any object

if ([]) {
  console.log('[] is true');
}

if ([] == false) {
  console.log('[] == false are falsy');
}

console.log(typeof good.toString());
console.log(typeof good2.toString());
console.log(typeof good3.toString());
console.log(typeof good4.toString());

// bonus
console.log(eval('1+2+3*5'));