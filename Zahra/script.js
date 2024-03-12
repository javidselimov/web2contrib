// TAKS1
const priceSt = prompt("Qiymət daxil edin ==> 530.90 :");
const price = Number(priceSt);
const manat = Math.floor(price);
const qepik = Math.round((price - manat) * 100);
console.log(`Qiymət ${manat} manat ${qepik} qəpik`);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// TASK2
const salary = prompt("Əmək haqqınızı daxil edin:");
console.log(Number(salary) - Number(salary) * 0.13);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// TASK3
const fullName = prompt("Tam adınızı daxil edin ==> Soyad Ad Ata adı");
const fullNameArr = fullName.split(" ");
console.log(
  `${fullNameArr[0]} ${fullNameArr[1].slice(0, 1)}.${fullNameArr[2].slice(
    0,
    1
  )}`
);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// TASK4
const mebleg = prompt("Əmanətin Məbləğini daxil edin:");
const muddet = prompt("Əmanətin Müddətini daxil edin:");
const faizdey = prompt("Əmanətin faiz dərəcəsini daxil edin:");
const faiz = (+muddet * +faizdey) / 12;
const menfeet = (Number(mebleg) * faiz) / 100;
console.log(`${muddet} aydan sonra əmanət qazancınız ${menfeet} azn olacaq`);

const il = prompt("İl sayını daxil edin:");
const vurug = 12;
let menfeetIl = Number(mebleg) * (1 + Number(muddet) / vurug) * vurug * il;
alert(`Investisya gəliri : ${menfeetIl}`);
