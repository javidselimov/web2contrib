var emekHaqqi = prompt("Əmək haqqınızı daxil edin: ");
var vergisizEmekHaqqi = emekHaqqi * (1 - 0.13);

// Hesablanmış əmək haqqını konsola çıxarmaq
console.log("Vergi nəzərə alınmadan əmək haqqı: " + vergisizEmekHaqqi.toFixed(2));
