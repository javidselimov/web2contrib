// // ### Qiyməti mətn halına salan proqram tərtib edin.
// //İstifadəçidən «530.90» formatında qiymət daxil etməyi xahiş edən və qiyməti «530 manat 90 qəpik» formatında konsola çıxaran proqram tərtib edin. 



// let sum = prompt('Qiymet daxil edin','530.90');
// sum = sum.split('.');
// console.log(`${sum[0]} manat ${sum[1]} qepik`);


// // ### Vergi nəzərə alınmadan əmək haqqı məbləğini hesablayan proqram tərtib edin.
// // Vergi nəzərə alınmadan əmək haqqı məbləğini hesablayan proqram tərtib edin. Proqram istifadəçidən əmək haqqı məbləğin soruşur və 13% vergi istisna olmaqla məbləği konsola çıxarır.


// let salary = prompt(`Maaşınızı daxil edin: `,`400`);
// let salaryWithoutTaxes = +salary - Number(salary)*0.13;
// // console.log(salaryWithoutTaxes);


// // ### İstifadəçidən soyad, ad və ata adını istəyən, soyadı və baş hərfləri konsola çıxaran proqram tərtib edin.
// // İstifadəçidən soyad, ad və ata adını istəyən, soyadı və baş hərfləri konsola çıxaran proqram tərtib edin.
// // Məsələn, «İvanov Pyotr Sergeevich» — «İvanov P.S.».

// let fullName = prompt(`Soyad, ad, ata adı daxil edin: `,`İvanov Pyotr Sergeevich`);
// fullName = fullName.split(` `);
// let firstName = fullName[1];
// let lastName = fullName[0];
// let fatherName = fullName[2];
// // console.log(`${lastName} ${firstName.split(``)[0]},${fatherName.split(``)[0]}.`);



// // ### Depozitdən mənfəətin hesablanması üçün proqram yazın.
// // Proqram istifadəçidən əmanətin məbləğini, müddətini və faiz dərəcəsini daxil etməsini istəyir və gözlənilən mənfəəti hesablayır.

// let depositSum = prompt(`Əmanətin məbləği: `);
// let depositMonth = prompt(`Əmanətin ayların sayı: `);
// let annualInterest = prompt(`İllik faiz dərəcəsi: `);
// let gain =  (Number(depositSum) * (Number(annualInterest)/(12*100)))*Number(depositMonth);
// // alert(`${depositMonth} aydan sonra əmanətdən qazancınız ${gain} olacaq`);

