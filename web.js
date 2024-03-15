//TASK 1
const num = prompt("Rəqəm daxil edin məsələn <<530.90>>");
const num1 = num.split('.');
console.log(`${num1[0] + " " + 'manat'} ${num1[1] + " " + 'qəpik'}`);

//TASK 2
const price = prompt("əməkhaqqı məbləğini daxil edin");
const salary = price - (price * 13)/100;
console.log(salary); 

//TASK 3
const fullName = prompt("Soyad,ad və ata adı daxil edin");
const name = fullName.split(" ");
console.log(`${name[0]} ${name[1].slice(0,1)}.${name[2].slice(0,1)}.`);


//TASK 4
const mebleg = prompt("Əmanətin Məbləğini daxil edin:");
const muddet = prompt("Əmanətin Müddətini daxil edin:");
const faizdey = prompt("Əmanətin faiz dərəcəsini daxil edin:");
const faiz = (+muddet * +faizdey) / 12;
const menfeet = (Number(mebleg) * faiz) / 100;
console.log(`${muddet} aydan sonra əmanət qazancınız ${menfeet} azn olacaq`);

const il = prompt("İl sayını daxil edin:");
const vurug = 12;
const menfeetIl = Number(mebleg) * (1 + Number(muddet) / vurug) * vurug * il;
console.log(`Investisya gəliri : ${menfeetIl}`);
