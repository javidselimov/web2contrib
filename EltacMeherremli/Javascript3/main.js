const fullName = prompt("Soyad, Ad, Ata adi qeyd edin:")

const fullNameArray = fullName.split(" ")

const surname = fullNameArray[0]
const firstLetterOfName = fullNameArray[1][0]
const firstLetterOfParanomic = fullNameArray[2][0]

const newFullName = `${surname} ${firstLetterOfName}. ${firstLetterOfParanomic}.`

console.log(newFullName);