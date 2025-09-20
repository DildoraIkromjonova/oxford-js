// function squareSum(numbers){
//   let sum = numbers.reduce((acc,current)=> {
//     return acc +current **2
//   } , 0)
//   return sum
//   }

// console.log(squareSum([]))
// =======================================
// function findSmallestInt(arr){
//   return Math.min(...arr)
// }
// console.log(findSmallestInt([34,15,88,2]))
// ===============================================
// const stringToNumber = function(str){
//   let num = Number(str)
//   return num
// }
// console.log(stringToNumber("1234"))
// =============================================
// var summation = function (num) {
//   let sum = 0
//   for(let i = 1; i <= num; i++){
//     sum += i
//   }
//   return sum
// }
// console.log(summation(8))
// ======================================
// function countSheeps(sheep) {
//   return sheep.filter(Boolean).length
// }
// console.log(countSheeps([true,true,false]))
// =============================================
// function noSpace(x){
//    return x.replaceAll(" "," ")
//   }
//   console.log(noSpace("8 j 8  mBliB8g imjB8B8 jl B"))
// =================================================
// function booleanToString(b){
//   return b.toString()
// }
// console.log(booleanToString(true))
// =====================================================
// function sum (numbers) {
//   return numbers.reduce((acc,current)=> acc +current ,0)
// }
// console.log(sum([1,2,3,4]))
// ==============================
// function digitize(n) {
//   return String(n)     
//     .split("")        
//     .map(Number)       
//     .reverse();       
// }
// console.log(digitize(35231))
// ============================================
// function lovefunc(flower1, flower2){
//   return(flower1 % 2 !== flower2 % 2)
// }
// console.log(lovefunc(1,4))