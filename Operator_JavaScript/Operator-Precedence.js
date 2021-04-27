// **OPERATOR PRECEDENCE atau URUTAN OPERASI MATEMATIKA**

/*
    Dalam JavaScript Operator Aritmatika yaitu: [ + - * / ] dan yang pertama kali di eksekusi
    adalah:

    [1] Kurung buka ()
    [2] Kali *
    [3] Bagi /
    [4] Tambah +
    [5] Kurang -

*/

// **CONTOH**

var Bilangan1   = 10;
var Bilangan2   = 5;
var Bilangan3   = 25;
var Bilangan4   = 30;
var Bilangan5   = 15;

console.log("Bilangan 1= "+Bilangan1+"  Bilangan 2= "+Bilangan2+"  Bilangan 3= "+Bilangan3+"  Bilangan 4= "+Bilangan4+"  Bilangan 5= "+Bilangan5)

// Urutan yang akan di eksekusi javascript
console.log(Bilangan1 * Bilangan2 / Bilangan3 + Bilangan4 - Bilangan5)

// Urutan yang akan di eksekusi javascript apabila ada kurung buka (), yang kurung buka terlebih dahulu yang akan di eksekusi
console.log((Bilangan3 * Bilangan4) + Bilangan1 * Bilangan2 / Bilangan3 + Bilangan4 - Bilangan5)

// Ini kalau acak, Tapi tetap saja seperti yang bilang di awal JavaScript itu memiliki urutan dalam pengeksekuisan Aritmatikanya!
console.log(Bilangan1 + Bilangan2 * Bilangan3 - Bilangan4 / Bilangan5)

