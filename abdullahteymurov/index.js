// task 1

// let price = prompt("qiymeti daxil edin(xx.x seklinde)");

// let priceStr = String(price);

// let priceArray = priceStr.split(".");

// console.log(priceArray);

// let manat = priceArray[0];

// let qepik = priceArray[1];

// console.log(manat + " manat " + qepik + " qepik");

// task 2

// let salary = prompt("emek haqqi:");
// let vergisiz = salary * 0.87;
// console.log(vergisiz);

// task 3

// let user = prompt('soyad, ad, ata adi:');

// let tamArray = user.split(" ");
// console.log(tamArray);

// let soyad = tamArray[0];
// let adBash = tamArray[1][0];
// let ataadBash = tamArray[2][0];

// console.log(soyad + " " + adBash + "." + ataadBash);

// star task

// const mebleg = prompt("Əmanətin Məbləğini daxil edin:");
// const muddet = prompt("Əmanətin Müddətini daxil edin:");
// const faizdey = prompt("Əmanətin faiz dərəcəsini daxil edin:");
// const faiz = (+muddet * +faizdey) / 12;
// const menfeet = (Number(mebleg) * faiz) / 100;
// console.log(`${muddet} aydan sonra əmanət qazancınız ${menfeet} azn olacaq`);

// const il = prompt("İl sayını daxil edin:");
// const vurug = 12;
// const menfeetIl = Number(mebleg) * (1 + Number(muddet) / vurug) * vurug * il;
// console.log(`Investisya gəliri : ${menfeetIl}`);