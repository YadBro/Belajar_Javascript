let sym1 = Symbol("Yadi");
console.log(sym1.description);

let user = {
  name: 'Yadi',
}

let id = Symbol('id');

user[id] = 124214123;

console.log(user['id']); // wrong
console.log(user[id]); // correct