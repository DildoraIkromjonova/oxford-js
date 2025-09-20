// let sana = new Date()

// let hozirgiSoat = sana.getHours()
// console.log(hozirgiSoat)

// let hozirgiDaqiqa = sana.getMinutes()
// console.log(hozirgiDaqiqa)

// let hozirgiYil = sana.getFullYear()
// console.log(hozirgiYil)

// let hozirgiSana = sana.getDay()
// console.log(hozirgiSana)

// let bugungiSana = sana.getDate()
// // console.log(bugungiSana)

// let oy = sana.getMonth()
// // console.log(oy)

// let toliqVaqt = sana.getTime()
// // console.log(toliqVaqt)

// let hozirgiSekund = sana.getSeconds()
// // console.log(hozirgiSekund)

// console.log(sana.toDateString())
// console.log(sana.toISOString())
// console.log(sana.toLocaleDateString())
// console.log(sana.toLocaleString())
// console.log(sana.toTimeString())
// console.log(sana.toLocaleDateString().split("/").join(":"))
// let user = {
//   ism:"Ali",
//   yosh:20,
// }

// let jsonUser = JSON.stringify(user)
// console.log(jsonUser)
// let parseUser =JSON.parse(jsonUser)
// console.log(parseUser)
// ===================================
  
// let user = {
//     ism:"Ali",
//   yosh:20,
// }

// let objn =  new Map()
// objn.set(22,"yigirma ikki")
// objn.set(user,20)



// console.log(objn.get(22))
// console.log(objn.get(user))
// console.log(objn.size)
// console.log(objn.has(22))
// console.log(objn.delete(22))
// console.log(objn.clear())

// set-mapga ma'lumot qoshish
// get-map dan key boyicha ma'lumot olish
// size- mapdagi ma'lumotlar soni
// has- mapdagi key boyicha malumolar bor yoki yoqligini borligini tekshirish
// delete- mapdan key boyicha  1ta ma'lumot ochirish 
// clear-mapni tozalash
// =====================================================

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






