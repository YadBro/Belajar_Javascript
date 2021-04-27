// Tipe Data String dalam javascript digunakan untuk mengepresikan data tekstual

/*
    Dalam pembuatan string bisa dilakukan dengan:
    [1]  Double Quote = " "
    [2]  Single Quote = ' '
*/


var contohString1 = '"(double quote)Saya adalah seorang programmer professional"'
var contohString2 = "'(single quote)Saya adalah seorang programmer professional'"
console.log(contohString1)
console.log(contohString2)
console.log("\n")

/*

    Penulisan salah string:
     "Kegitan pungut sampah dilakukan pada hari jum'at"
     'Kegitan pungut sampah dilakukan pada hari jum"at'

    Apabila ingin menambahkan quote yang berbeda di perlukan escape character!
    terdiri dari:

    [1] \0  <-Hasil: Null
    [2] \'  <-Hasil: '  (Menambahkan single quote string pada double quote string)
    [3] \"  <-Hasil: "  (Menambahkan double quote string pada single quote string)
    [4] \\  <-Hasil: \  (Menambahkan \ pada double quote string dan juga single qoute string)
    [5] \n  <-Hasil: new line/baris baru  (Membuat baris baru dalam string)
    [6] \t  <-Hasil: tab (Membuat jarak agak jauh dalam string)
    [7] \b  <-Hasil: \b (Menghapus / backspace)
    [8] \uxxxx <-Hasil: unicode

    -----UNICODE-----
    [1] \u00A9  ©
    [2] \u00AE  ®
    [3] \u00B1  ±
    [4] \u2122  ™

    Dan masih banyak lagi, untuk melihatnya lihat di:



*/

// **CONTOH**

console.log("ini adalah Null(tidak ada apa-apa) \0")
console.log("ini adalah menambahkan single quote (Jum\'at)")
console.log("ini adalah menambahkan double quote (Jum\"at)")
console.log("ini adalah menambahkan garis miring (5\\6)")
console.log("ini adalah new line\\baris baru \n hey aku ada di bawah!")
console.log("ini adalah jarak \t jauh")
console.log("ini adalah jarak \b dekat")
console.log("ini adalah simbol karakter copyright \u00A9")
console.log("ini adalah simbol karakter r \u00AE")
console.log("ini adalah simbol karakter kurang lebih \u00B1")
console.log("ini adalah simbol karakter tm \u2122")


// Memasukkan variable ke tengah tengah character tanpa penghubung +

// syarat penggunaan menggunakan ``(akses kubur), $(dollar), dan {}(kurung kurawal)


console.log(`ini contoh string 1= ${contohString1}`)