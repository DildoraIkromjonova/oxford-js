// scope 3 xil boladi 
// 1. Global scope - tashqarida ochilgan scope
// 2. local scope - funksiya ichida ochilgan  scope,funksiya orab turgan joyi
// 3. block scope - faqat ifni ichida ochilgan scope
// ==============================================================
// hoisting //
// tepaga kotarish manosini beradi
//--------------------------------------------------------------------
//-------------------------------------------------------------------
//TDZ - tempirol  dead zon
// =====================================================================
// var block scopeni etiborga olmaydi shuning uchun var verable ishlamaydi
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
// IIFE- CHAQIRMASAGAM ISHLAYDIGAN FUNKSIYA
// (function(){
//   console.log("mening ismim qobil")
// })()
// =========================================================================
//AFE- anonymous function exspression bu expression function bilan bir xil..
// const alik  = function(){
//   console.log("salom")
// }
// alik()
// -----------------------------------------------------------------------
// NFE - named function exspression funksiyaga name berish
// const alik = function hey(num){
//   if ( num === 0) return
//   hey ( num - 1)
//   console.log(num)
// }
// alik(5)
// =====================================================================
/// global objects
// window - brauzerga tegishli katta obyekt
// global -() node ga tegishli katta obyekti
// this - hozirgi kontekstni bildiradi
// globalthis - brouzerga va node ga tegishli katta obyekt
// ========================================================================
// new function
// let hisoblash = new Function("a","b", "return a + b")
// console.log(hisoblash(1 ,2 ))
