//1
let hasil=1
for(let i=1;i<10;i++){
   
   hasil *=i;
}

console.log(hasil);
//2
let metn = prompt("Mətn daxil edin:");
let tersinecevrilmis = "";
for (let i=metn.length - 1;i >= 0;i--) {
    tersinecevrilmis += metn[i];
}
console.log(tersinecevrilmis);
//3
function firstdotindex(text) {
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ".") {
        return i;
      }
    }
    return -1;
  }
  
  let metn = "asdfghjkl.";
  let ilknoqteindex = firstdotindex(metn);
  
  if (ilknoqteindex !== -1) {
    console.log(ilknoqteindex);
  } else {
    console.log("Mətndə nöqtə yoxdur.");
  }
  //4
  let metn = prompt("Mətn daxil edin:");
let reqemVar = false;

for (let i = 0; i < metn.length; i++) {
  if (metn[i] >= "0" && metn[i] <= "9") {
    reqemVar = true;
    break;
  }
}

if (reqemVar) {
  console.log("Sətrdə rəqəmlər var.");
} else {
  console.log("Sətrdə rəqəmlər yoxdur.");
}
//bonus
function fibonacci(n) {
    if (n <= 0) return "0dan boyuk";
    if (n === 1) return 0;
    if (n === 2) return 1;
   let a = 0, b = 1;
    for (let i = 3; i <= n; i++) {
    let temp = b;
    b = a + b;
    a = temp;
}

    return b;
}

const n = +(prompt("n daxil ed"));
console.log(n,fibonacci(n));
