//task1//
let price=prompt('530.90 daxil edin');
let price1 = price.split('.');
console.log(price1[0]+ ' ' + 'manat' + ' ' + price1[1] + ' '+ 'qəpik');


//task2//
let emekhaqqi=prompt('Emek haqqinizi daxil edin');
console.log(emekhaqqi * 87 / 100);


//task3//
let ad=prompt('Adinizi daxil edin');
let soyad=prompt('Soyadinizi daxil edin');
let ataAdi=prompt('Ata adini daxil edin');
console.log(soyad, ad[0], ataAdi[0]);


//task4//
let emanetinMeblegi=prompt('Əmanətin məbləğini (AZN) daxil edin');
let aylarinSayi=prompt('Əmanəti saxlayacağınız müddəti (ay) daxil edin');
let illikFaiz=prompt('İllik faizi daxil edin');

let faiz=(Number(aylarinSayi) * Number(illikFaiz) / 12);
let gelir=(Number(emanetinMeblegi) * Number(faiz) / 100);

let umumi=(aylarinSayi + ' aydan sonra əmanətdən qazancınız'+ ' ' + gelir + 'AZN'+' ' + 'olacaq');
console.log(aylarinSayi + ' aydan sonra əmanətdən qazancınız'+ ' ' + gelir + 'AZN'+' ' + 'olacaq');
alert(umumi);