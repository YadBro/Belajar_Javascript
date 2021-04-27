// **OPERATOR LOGIC atau OPERATOR LOGIKA**

/*

    Terdiri dari:
    [1] &&  <-AND
    [2] ||  <-OR
    [3] !   <-NOT

    Gunakan if elseif

    if      = Jika
    else if  = Selain itu jika
    else    = daripada itu / lain


*/

// **CONTOH**
var Bilangan1 = 5;
var Bilangan2 = 6;

var cekHasil = 11;

// Mengecek apa kah Bilangan1 di tambah Bilangan2 Sama dengan Sama dengan 15 Jika iya maka Benar Jika iya maka Benar Jika tidak maka salah
console.log("(<) "+Bilangan1+"+"+Bilangan2+" Sama Dengan "+cekHasil+" = "+"Hasilnya "+(Bilangan1+Bilangan2))
if (Bilangan1 + Bilangan2 == cekHasil) {
    console.log("Benar")
}else{
    console.log("Salah")
}

/* 
    Mengecek apa kah Bilangan1 di tambah Bilangan2 Hasilnya 11 ATAU Bilangan1 Sama Dengan 11 Jika iya maka Benar Jika tidak maka salah.
 Kalau ATAU(OR) berarti kemungkinan kalau salah satunya yang benar maka muncul benar atau true walaupun salah satu yang lainnya salah.
 Apabila keduanya salah maka hasilnya salah atau false. 
 
*/
console.log("(||) "+Bilangan1+"+"+Bilangan2+" Hasilnya Sama dengan "+cekHasil+" ATAU "+Bilangan1+" Sama Dengan "+cekHasil+" = "+"Hasil1: "+(Bilangan1+Bilangan2)+", Hasil2: "+Bilangan1+"=="+cekHasil)
if(Bilangan1 + Bilangan2 == cekHasil || Bilangan1 == cekHasil){
    console.log("Benar")
}else{
    console.log("Salah")
}

/* 
    Mengecek apa kah Bilangan1 di tambah Bilangan2 Hasilnya 15 DAN Bilangan1 Sama Dengan 15 Jika iya maka Benar Jika tidak maka salah
  Kalau DAN(AND) berarti Harus kedua duanya bernilai benar(true) atau salah(false), tidak bisa salah satunya true atau false.

*/
console.log("(&&) "+Bilangan1+"+"+Bilangan2+" Hasilnya Sama dengan "+cekHasil+" DAN "+Bilangan1+" Sama Dengan "+cekHasil+" =")
if(Bilangan1 + Bilangan2 == cekHasil && Bilangan1 == cekHasil){
    console.log("Benar")
}else{
    console.log("Salah")
}


/* 
    Mengecek apa kah variable Bilangan1 Nilainya 15 Jika iya maka Benar Jika tidak maka salah
  Kalau BUKAN(NOT) bukan yang ditentukan.

*/
console.log("(!) "+Bilangan1+" Bukan Sama dengan "+cekHasil+" =")
if(!Bilangan1 == cekHasil){
    console.log("Benar")
}else{
    console.log("Salah")
}


console.log("(<) "+Bilangan1+" Kurang dari "+cekHasil+" =")
if(!Bilangan1 == cekHasil){
    console.log("Benar")
}else{
    console.log("Salah")
}