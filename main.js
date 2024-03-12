//task1//
let price=prompt('«530.90» formatında qiymət daxil edin');
let price1=price.split('.');
let value=('manat');
let value1=('qepik');
console.log(price1[0] +' '+value+' '+price1[1]+' '+value1);
//task2//
let value=prompt('əmək haqqı məbləğin daxil edin');
console.log(value-value*13/100);
//task3//
let ad=prompt(' ad daxil edin');
let soyad=prompt(' soyad daxil edin');
let ataadi=prompt('Ata adi daxil edin');
let ad1=ad.split(" ");
let soyad1=soyad.split(" ");
let ataadi1=ataadi.split(" ");
console.log(soyad1[0]+" "+soyad[0]+" "+ad[0]+" "+ataadi[0]);
//task4//
let a=prompt('əmanətin məbləğini daxil edin ');
let b=prompt('ayların sayını daxil edin ');
let c=prompt('illik faiz dərəcəsin daxil edin');
 let faiz=(Number(b)*Number(c)/12);
 let gelir=(Number(a)*Number(faiz)/100);
 let umumi=(b+" "+"aydan sonra əmanətdən qazanciniz"+' '+gelir+"AZN"+" "+"olacaq");
 console.log(b+" "+"aydan sonra əmanətdən qazanciniz"+' '+gelir+"AZN"+" "+"olacaq");
alert(umumi);
