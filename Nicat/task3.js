let a=prompt("soyad ad ve ata adinizi daixl edin numune İvanov Pyotr Sergeevich");
let basadlar=a.split(" ");
let ad=basadlar[0];
let soyad=basadlar[1];
let ataadi=basadlar[2];
console.log(ad+" "+soyad.charAt(0)+"."+ataadi.charAt(0));