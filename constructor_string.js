
const element = document.getElementById('demo');
const x = 'John'; // string
const y = new String('John'); // object
const z = new String('John'); // object

console.log(y)

element.innerHTML = typeof x + '<br/>' + typeof y + '<br>' + x === y;