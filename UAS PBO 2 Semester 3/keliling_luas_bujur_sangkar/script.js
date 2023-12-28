// Fungsi Luas PP
function luaspp() {
    var sisi = Number(document.getElementById("sisi").value);
    var hasilluas = sisi * sisi;
    document.getElementById("hasilluas").innerHTML = hasilluas;
}

// Fungsi Keliling PP
function kelilingpp() {
    var sisi = Number(document.getElementById("sisi").value);
    var hasilkeliling = 4 * sisi;
    document.getElementById("hasilkeliling").innerHTML = hasilkeliling;
}

// FUNGSI RESET
function reset() {
    document.getElementById("sisi").value = "0";
    document.getElementById("hasilluas").innerHTML = "0";
    document.getElementById("hasilkeliling").innerHTML = "0";
}