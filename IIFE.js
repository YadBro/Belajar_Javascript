(() => {
  console.log('first');
})();

(function() {
  console.log('second');
})();

(function() {
  console.log('third');
}());

(test = function(num = 4) {
  console.log(num);
})();

test(5);

let a = 8;

(function() {
  var a = 7;
  console.log(a);
})();
console.log(a);