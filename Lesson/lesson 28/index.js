
// let sum = 0
// for(let i=0; i<arr.length;i++){
// let num = parseFloat(arr[i])
// if(!isNaN(num))
//   sum +=num
// }
// console.log(sum)
// ==================================================================
// reduce - arraydagi qiymatlarni yigindisini hisoblab berish uchun .
// let arr1 = arr.reduce((sum,current,index,array)=>{
//   if(current % 2 === 0){
//     return sum += current
//   }
//   return sum
// },0)
// console.log(arr1)
// =========================================================
// let arr = [2,5,1,4,8,10]
// let arr1 = arr.reduce ((sum,current,index,array) =>{
// if(current % 2 === 0){
//   sum.juft.push(current)
// }else{
//   sum.toq.push(current)
// }
// return sum
// },{juft:[],toq:[]})
// console.log(arr1)
// ============================================================
// mutable va imutable
// mutable - asl arrayga tasir qiladigan metod
// imutable - asl arrayga tasir qilmaydigan metodlar
// ==============================================================
// let user = {name:"john",age:20}
// let fruits = ["apple","orange"]
// let obj = new Map()

// obj.set("true",true)
// obj.set (user,20)
// obj.set(fruits,"mevalar")
// obj.delete("true")
// obj.clear()
// //  console.log(obj.forEach())
// //  obj.forEach((value)=> console.log(value))

// obj.set - mapga qiymat qoshadi
// obj.get - mapdan key boyiyicha qiymat oladi
// obj.delete- mapdan key boyicha faqat bitta qiymatni ochiradi
// // obj.clear- mapdagi qiymatlarni tozalash uchun
// // obj.has-mapda biz bergan key bor yoki yoqligini tekshiradi
// // obj.size- mapdagi qiymatlar sonini qaytaradi
// // obj.keys- mapdagi barcha keylarni qaytaradi
// // obj.values- mapdagi barcha  valuelarni qaytaradi
// // ===============================================================
// let arr1= [1,2,3,4,1,2,3,4,5]
// let unique = new Set (arr1)
// console.log(unique)
// // set - berilgan qiymatlarni (unique ) yagona qib beradi
// let arr = new Set()
// let mevalar = ["apelsin","olma"]
// arr.add("salom")
// arr.add("xayr")
// arr.add(mevalar)
// arr.delete("salom")
// arr.clear()
// console.log(arr.size)
// // arr.add - setga qiymat qoshadi
// // arr.delete - setdan value boyicha faqat bitta qiymat ochiradi
// // arr.clear - setdagi qiymatlarni tozalash uchun
// // arr.size - setdagi barcha qiymatlar soni
// // arr.has- setda biz bergan qiymat bor yoki yoqligini tekshiradi




