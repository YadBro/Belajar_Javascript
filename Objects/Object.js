// Make an empty object
let objectConstructor = new Object(); // "object constructor" syntax
let objectLiteral = {}; // "object literal" syntax

console.info("===== OBJECT CONSTRUCTOR (START)")

objectConstructor.hi = "Hi";

objectConstructor.user = {
  name: "Yadi",
  class: 12,
}

console.info(objectConstructor);

// validation
console.info(objectConstructor.noSuchProperty === undefined)
console.info("===== OBJECT CONSTRUCTOR (END)\n\n")

console.info("\n\n===== OBJECT Literal (START)")

// Multiword (using square brackets)
// objectLiteral."My Bird" // bad
objectLiteral['my bird'] = "pupi"
objectLiteral['my uwu'] = "UwU"

delete objectLiteral['my bird'];

console.info(objectLiteral);

objectLiteral.__proto__ = "PROTOs"
console.info(objectLiteral.__proto__);
console.info(objectLiteral.noSuchProperty === undefined)
console.info("===== OBJECT Literal (END)\n\n")



// Computed Properties
// let fruit = prompt('Which fruit to buy?', 'apple');

// let bag = {
//   [fruit]: 5
// }

// alert(bag.apple)
// alert(bag.banana)

function makeUser(name, age) {
  return {name, age,}
}

let yadi = makeUser("Yadi", 19);
let udin = makeUser("Udin", 19);
console.info(yadi);

delete yadi.age; // delete property

const data = JSON.stringify(yadi);
console.info(data);
console.info(udin);

// Validation
console.info("name in yadi", "name" in yadi); // true
console.info("age in yadi", "age" in yadi); // false
console.info("is name yadi", yadi.name === "yadi"); // true
console.info("is age yadi \"19\"?", yadi.age === "19"); // true
console.info("is age yadi 19?", yadi.age === 19); // false, because property has been deleted
console.info("is age udin \"19\"?", udin.age === "19"); // false
console.info("is age udin 19?", udin.age === 19); // true

let user1 = {
  name: 'John',
  age: 30,
  isAdmin: true,
}

console.info('\n\n===== get all data in loop');
for (let key in user1) {
  console.info(key); // property
  console.info(user1[key]); // value
  console.info(key + ": " + user1[key]);
}


const user2 = ['yadi', 12, 'smk'];

// Iterable used for of (STRINGS, ARRAY)
// Enumerable used for in (OBJECT)

let user3 = [
  {
    name: 'Yadi',
    class: 12,
  },
  {
    name: 'Apriyadi',
    class: 12,
  },
]

console.log("============= USER2");
for (const val of user2) {
  console.log(val);
}
console.log("============= USER2");
console.log("\n\n============= USER");
for (const [key, val] of Object.entries(user3)) {
  console.log(val.name);
}
console.log("============= USER3");

for (const val in user) {
  console.log(user[val])
}