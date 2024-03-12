let qiymetmetn=prompt("qiymet daxil ed");
let qiymetparts=qiymetmetn.split(".");
let manatmetn=qiymetparts[0];
let qepikmetn=qiymetparts[1];
let manat=Number(manatmetn);
let qepik=Number(qepikmetn);
console.log(manat+" manat "+qepik+" qepik")