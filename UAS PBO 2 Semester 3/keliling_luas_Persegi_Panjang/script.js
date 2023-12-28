// Fungsi Luas PP
function luaspp() {
    var panjang = Number(document.getElementById("panjang").value);
    var lebar = Number(document.getElementById("lebar").value);
    var hasilluas = panjang * lebar;
    document.getElementById("hasilluas").innerHTML = hasilluas;
}

// Fungsi Keliling PP
function kelilingpp() {
    var panjang = Number(document.getElementById("panjang").value);
    var lebar = Number(document.getElementById("lebar").value);
    var hasilkeliling = 2 * (panjang + lebar);
    document.getElementById("hasilkeliling").innerHTML = hasilkeliling;
}

// FUNGSI RESET
function reset() {
    document.getElementById("panjang").value = "0";
    document.getElementById("lebar").value = "0";
    document.getElementById("hasilluas").innerHTML = "0";
    document.getElementById("hasilkeliling").innerHTML = "0";
}