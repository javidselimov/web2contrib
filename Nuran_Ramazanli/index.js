// task 5.1
// var price = prompt("qiymeti daxil edin(xx.x seklinde)");
// var priceStr = String(price);
// var priceArray = priceStr.split(".");
// console.log(priceArray);
// var manat = priceArray[0];
// var qepik = priceArray[1];
// console.log(manat + " manat " + qepik + " qepik");

// task 5.2
// let salary = prompt("emek haqqi:");
// let vergisiz = salary * 0.87;
// console.log(vergisiz);

// task 5.3
// let user = prompt('soyad, ad, ata adi:');
// let tamArray = user.split(" ");
// console.log(tamArray);
// let soyad = tamArray[0];
// let adBash = tamArray[1][0];
// let ataadBash = tamArray[2][0];
// console.log(soyad + " " + adBash + "." + ataadBash);

// task 5.bonus
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

// task 6.1
// const value = prompt("deyer daxil et:");
// console.log(Number(value)<11);
// console.log(Number(value)==10);
// console.log(Number(value)!=20);
// console.log(Number(value)<19);
// console.log(Number(value)<=15);

// task 6.2
// const yas =prompt("yas daxil et: ");

// if(yas<18){
//     alert("Acces denied");
// }
// else{
//     alert("Acces Granted")
// }

// task 6.3
// const eded = prompt("Uc 2 reqemli eded daxil edin(meselen:20,30,40)");
// const array = eded.split(",");
// const a =Number(array[0]);
// const b = Number(array[1]);
// const c = Number(array[2]);
// if (a===b || b===c || a===c){
//     alert("Eyni eded daxil etmisiz");
// }
// else if(b<a && a<c || b>a && a>c){
//     alert(`orta eded=${a}`);
// }
// else if(a<b && b<c || a>b && b>c){
//     alert(`orta eded=${b}`);
// }
// else{
//     alert(`orta eded=${c}`);
// }