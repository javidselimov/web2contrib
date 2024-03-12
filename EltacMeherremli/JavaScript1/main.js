// İstifadəçidən qiyməti daxil etmək
var qiymet_str = prompt("Qiyməti daxil edin (nümunə: 530.90): ");

// Daxil edilmiş qiyməti ondalıq nöqtəsindən ayırmaq
var parts = qiymet_str.split('.');
var manat = parseInt(parts[0]);
var qepik = parseInt(parts[1]);

// Qiyməti formatlı şəkildə çıxarmaq
console.log(manat + " manat " + qepik + " qəpik");
