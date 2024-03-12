// 1
let incoming=prompt('qiymet daxil edin','999.99');
console.log(
    `${incoming.split('.')[0]} manat ${incoming.split('.')[1]} kopuk`
)
// 2
let sallary=Number(prompt('massinizi qeyd edin'));
console.log(
    sallary*(87/100)
)
// 3
let fullName=prompt('soyad, ad və ata adını qeyd edin','İvanov Pyotr Sergeevich');
console.log(
 `${fullName.split(" ")[0]} ${fullName.split(" ")[1][0]}.${fullName.split(" ")[2][0]}.`
)
// 4
let deposit=Number(prompt('emanetin miqdarini qeyd edin'));
let month=Number(prompt('ayların sayıni qeyd edin'));
let annualInterest=Number(prompt('illik faiz dərəcəsini daxil edin'));
alert(`${month} aydan sonra əmanətdən qazancınız ${(deposit*((annualInterest*month)/12)/100)}`);
alert(`${month} aydan sonra əmanətdən qazancınız ${(deposit*(annualInterest/100)**(month/12))}`);