// recursive va callback function
// ----------------------------------
// CALLBACK - bir funksiyaga argument sifatida boshqa funksiya berish

// let arr = [1,2,3,4,5]
// function juftSonniHisblash(even){
//  if (even % 2 ===0) return even
// }
// let result = arr.filter(juftSonniHisblash)
// console.log(result)

// function salomlashish(ism, mengakelayotganFunksiya){
//   console.log(`Mening ismim ${ism}`)
//   mengakelayotganFunksiya()
// }
// function mulozamat(){
//   console.log("Assalomu aleykum")
// }
// salomlashish("Aziz",mulozamat)
// ---------------------------------------------------
// ----------------------------------------------------
// // recursive - funksiya ichida ozini ozi chaqirish
// //  function number(n){
// //   if ( n === 0)  return;  // bace case
// //   console.log(n)
// //   number(n - 1) // recursive case
// //  }
// //   number(5)
// const companya = {
//   name: " Boss",
//   salary : 5000,
//   employees:[
//     {name: "Dev",salary:3000, employees:[]},
//     {
//       name: "Manager",salary: 4000, employees:[
//         { name: "Intern", salary: 1000,employees:[]}
//       ]
//     }
//   ]
// }
// function OylikniHisoblash(kompaniya){
//   let oylik = kompaniya.salary
//   for (let ishchi of kompaniya.employees){
//     oylik += OylikniHisoblash(ishchi)
//   }
//   return oylik
// }
// console.log(OylikniHisoblash(companya))
// ===============================================


