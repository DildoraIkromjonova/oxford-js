// // distructure
// // array example - arraydagi elementlarni nomlab olib ishlatish usuli
// let arr = [10, 'john', true,'22']
// // ... spread operatori arraydaan nusxa olish uchun
// let [ten, boleanTrue, ...hammasi] = arr;
// console.log(boleanTrue)
// =============================================
// object example 
// let obj = {
//     name:"john",
//     age: 28 ,
//     status:"active"
// }
// //  ... spread operatori - objectdan nusxa olish uchun ishlatiladi
// //  object distructuring - objekdagi qiymatlarni ozimiz nomlab olishimiz  yoki obyektdagi qiymatni olish usuli
//  let {... hammasi} = obj
//  console.log(hammasi)
// ====================================================
// // nested distructure 
// let arr = [1,[2, 3]]
// let [ bir, [ikki, uch]] = arr
// console.log(uch)
// function engKattasi(... array){
//   return Math.max(...array)
// }
// console.log(engKattasi(1,2,3,4,5,))
// let arr = [1,2,3,4,5,]
// let katta = arr [0]
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > katta) {
//       katta = arr[i];
//   }
// }
// console.log(katta);



