// Fungsi Luas LINGKARAN
function luaslingkaran() {
    var jarijari = Number(document.getElementById("jarijari").value)
    var hasilluas = Number(22/7 * (jarijari*jarijari))
    document.getElementById("hasilluas").innerHTML = hasilluas.toFixed(2);
}

// Fungsi Keliling LINGKARAN
function kelilinglingkaran() {
    var jarijari = Number(document.getElementById("jarijari").value)
    var hasilkeliling = Number(2 * 22/7 * jarijari)
    document.getElementById("hasilkeliling").innerHTML = hasilkeliling.toFixed(2);
}

// FUNGSI RESET
function reset() {
    document.getElementById("jarijari").value = "0";
    document.getElementById("hasilluas").innerHTML = "0";
    document.getElementById("hasilkeliling").innerHTML = "0";
}