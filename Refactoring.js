var ab = "Halo saya anak baik";


function jumlahVolumekubus(a, b) {
    var total;
    var cuy = globalThis.ab;
    total = a * a * a * b * b * b;
    console.log(cuy);


    return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // toString adalah fungsi method untuk merubah tipe data selain string menjadi string

    // replace adalah fungsi method pencarian string untuk nilai tertentu atau ekspresi regular dan mengembalikan string baru di mana nilai yang di tetapkan di ganti
    
}

alert(jumlahVolumekubus(8, 3));