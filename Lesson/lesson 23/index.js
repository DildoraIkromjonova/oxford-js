// let count = document.querySelector(".count")
// let btn = document.querySelector(".btn")
// let remove = document.querySelector(".remove")
// let clear = document.querySelector(".clear")

// let sum = localStorage.getItem("miqdor")||0
// getLocalStorage()

// btn.addEventListener("click", () => {
//   sum++
//   let.textContent = sum
//   localStorage.setItem("miqdor", sum)
// });

// function getLocalStorage() {
//   let miqdor = localStorage.getItem("miqdor") || 0
//   let.textContent = miqdor
// };

// remove.addEventListener("click", ()=> {
//   localStorage.removeItem("miqdor")
// });

// clear.addEventListener("click", () => {
//   localStorage.clear
// });
// ==============================================
// localStorage - bu browserdagi qoshimcha xotira va unga kerakli data saqlaymiz va buni xotira 5 MB
// setItem - localStoragega ma'lumot saqlash
// getItem - localStoragega ma'lumot olish
// removeItem - localStorage dan key bo'yicha 1 ta malumot ochirish
// clear - localStorage ni Tozlash
// ==================================================
// sessionStorge  - bu browserdagi qoshimcha xotira va unga kerakli data saqlaymiz va buni xotira 5 MB
// setItem -   sessionStorgema'lumot saqlash
// getItem -  sessionStorge ma'lumot olish
// removeItem -  sessionStorge dan key bo'yicha 1 ta malumot ochirish
// clear - localStorage ni Tozlash
// ========================================================
// sessionStorge va localStorge farqi - sessionStorge browserdan chiqilsa yoki tab yopilsa sessionStorgdagi ma'lumot o'chib ketadi, localStorge da ma' lumot saqlanib qoladi
// ===========================================================
// JSON - javascript Object notation
//  stringfy - bu js dagi ma'lumotlarni Json formatga otkazish
// 3ta qiymat oladi 
// 1) jsonga o'girish kerk bolgan 
// 2) jsondan tanlab olingan key, [] yoki null
// 3) json bizga chiroyli ,korinishi uchun format
// =======================================================================
// parse - bu jsonni odddiy data korinishga otkazish 
// 1) callback funksiya va bu funksiya 2ta parametr oladi
// key , value parametr.
// ============================================================================
// let obj  = {
//   ism: "Aziz",
//   yosh: 2007,
//   moshina: "Nexia",
//   manzil: "namangan",
//   nomer: "+998901234567"
// } 

// let arr = [true, "Hello", 22]
// let jsonObj = JSON.stringify(obj,null, 2)
// let jsonObj2 = JSON.stringify(obj)
// let jsonArr = JSON.stringify(arr)
//  console.log(jsonObj)
//  console.log(jsonObj2)


// let parseObj = JSON.parse(jsonObj, (key, value)=>{
//     if(key === "yosh"){
//         return value
//     }

//     return value
// })

// console.log(parseObj);

// console.log(obj)
// console.log(arr)
// ==========================================================================================
// ============================================================================================
// =============================================================================================
// ===============================================================================================
// new Map /////
// new Set /////
// ------------------------------------------------------------------------------------
// // WeakMap ///// 
// let user = {
//   ism: "Ali",
//   yosh: 33,
// }

// let user2 = {
//   name:"John",
//   age : 22,
// }

// let admin = new WeakMap();
// admin.set(user,"bu yerda user obyekti")
// admin.set(user2,user2)

// admin.set - WeakMap ga ma'lumot qo'shish uchun va key ga obyekt berildi
// admin.get - WeakMap dan key obyekt bo'lgan ma'lumot olish
// admin.has - WeakMap da key obyekti bo'lgan qiymat bor yoki yo'qligini qaytaradi
// admin.delete - WeakMap dan key Obyekti bo'yicha qiymat o'chirish


// console.log(admin.get(user))
// console.log(admin.get(user2))
// console.log(admin.has(user2))
// admin.delete(user)
// console.log(admin.get(user))


// -----------------------------------------------------------------------------------
// WeakSet /////

// let arr = new WeakSet()
// arr.add - Weaksetga value obyekti bolgan qiymat berish
// arr.has - Weakset da value obyekti qiymati bor yoki yoqligini aniqlash uchun
// arr.delete - Weakset dan value obyekti boyicha qiymat ochiradi




