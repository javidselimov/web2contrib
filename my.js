// 1.
let incoming = prompt('Qiymət daxil edin.','999.99');
let text = `${incoming.split('.')[0]} manat ${incoming.split('.')[1]} qəpik`;

console.log(text);

// 2.
let salary = prompt('Məbləği daxil edin');

console.log(
    `${salary*0.87}`
);
// 3.
let fullName = prompt('Ad, Soyad, Ata adı daxil edin.','İvanov Pyotr Sergeevich');
let namearr = `${fullName.split(' ')[0]} ${fullName.split(' ')[1][0]}.${ fullName.split(' ')[2][0]}`;
console.log(namearr);

// 4.
let amount = Number(prompt('Əmanətin məbləğini daxil edin'));
let month = Number(prompt('Ayların sayını daxil edin'));
let percentage = Number(prompt('İllik faizi daxil edin'));
let profit = ((amount*(percentage/100))/12)*month;
// let investment = amount*(1+ (percentage/month)** ())
console.log(`${month} aydan sonra əmanətdən qazancınız ${profit} AZN olacaq`);