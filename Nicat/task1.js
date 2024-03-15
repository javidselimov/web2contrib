let qiymetmetn=prompt("qiymet daxil ed");
let qiymetparts=qiymetmetn.split(".");
let manatmetn=qiymetparts[0];
let qepikmetn=qiymetparts[1];
let manat=Number(manatmetn);
let qepik=Number(qepikmetn);
console.log(manat+" manat "+qepik+" qepik")
//1
let a=+prompt("iki reqemlli eded daxil et");

while(a < 100){
    console.log(a);
    a +=7;
    
}
//2
let  n = prompt("Neçə dəfə konsola çıxarılsın?");
n = Number(n);
while(n <= 0){
    console.log("Səhvdir")
}
    let a = 0
while(a < n){
    a++
    console.log(" know how to use cycles")
   
    
}
//3
for(let i=100;i<1000;i++){
    if(i%10===0){
        console.log(i);
    }
}
//4
let cem=0;
for( let i=10;i<100;i++){
   if(i%2===1){
       cem=cem+i;
   }
}
console.log(cem);
//5
let eded = prompt("Ədəd daxil edin (müsbət və 999-dan kiçik olmalıdır):");
let cemi = 0;

if (eded !== null) {
  
  if (!isNaN(eded)) {
    eded = Number(eded);
    if (eded > 0 && eded <= 999) {
      
      for (let i = 100; i <= 999; i++) {
        if (i % eded === 0) {
          cemi += i;
        }
      }
      console.log(eded + " ədədinin bölünəni olan üçrəqəmli ədədlərin cəmi: " + cemi);
    } else {
      console.log("Xəta: Ədəd müsbət və 999-dan kiçik olmalıdır.");
    }
  } else {
    console.log("Xəta: Düzgün ədəd daxil etməlisiniz.");
  }
}
//bonus
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function edelerinyoxlansi(n) {
    for (let i = n; i >= 2; i--) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

const n = parseInt(prompt("ədəd daxil edin:"));
    console.log(`0-dan ${n}-ə olan sadə ədədlər: `);
    edelerinyoxlansi(n);