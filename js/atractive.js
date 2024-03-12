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
// if 1
let value =10;
console.log(value<15);
console.log(value>5);
console.log(value>5 && value<15);
console.log(value<5||value<15);
console.log(value===10);
 value =20;
console.log(value<15);
console.log(value>25);
console.log(value>25 && value<15);
console.log(value<5||value<15);
console.log(value===21);
// 2
let age = Number(prompt('yasinizi qeyd edin'));
if (age<18){
    alert('Access denied');
}else{
    alert('Access granted');
}
// 3
let nums=prompt('3 dene vergule ayrilmis 2 reqemli eded daxil edin','11,22,33');
let num1= Number(nums.split(',')[0]);
let num2= Number(nums.split(',')[1]);
let num3= Number(nums.split(',')[2]);
if(num1<num2 && num2<num3||num1>num2 && num2>num3){
    console.log(`Orta ədəd - ${num2}`);
}
else if(num2<num1 && num1<num3||num2>num1 && num1>num3){
    console.log(`Orta ədəd - ${num1}`);
}
else if(num1<num3 && num3<num2||num1>num3 && num3>num2){
    console.log(`Orta ədəd - ${num3}`);
}
else if(num1===num3 || num3===num2 || num1===num2){
    console.error("orta eded yoxdur")
}
else{
    console.error('error')
}
// ulduz 4
let year=Number(prompt('ildaxil edin'));
if(year%4===0){
    if(year%100===0 && !year%400===0){
    console.log('İl uzun il deyil')
    }else{
    console.log('İl uzun ildir')
    }
}else{
    console.log('İl uzun il deyil')

}