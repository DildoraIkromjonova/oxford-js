// hositing

// let,const,var
/////////////////////////////////
// console.log(a)
// var a = 10;

// console.log(b)
// let b = 15;

// console.log(c)
// let c = 20;

//  let ism = "ali"
//  function sum(){
//   console.log(ism);
//  }
// sum()

// sum2()
// const sum2 = function(){
//   console.log("sum2 is working");
// }
// ///////////////////////////////////////////////////////////////////////////////////////////////////
// scopes

//global scope//
// const admin = "admin123@gmail.com";
// console.log(admin);
// ///////////////////////////////////////////
// function greet(){
//   const admin = "hello admin";
//   console.log(admin);
// }
// greet()

///////////////////////////////////////////////////////////
// if (true){
//   const admin = "if admin";
//   console.log(admin);
// }
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// local scope//
// function salom(){
//   let car = "Bobur"
//   console.log(car)
// }
// salom()
// ///////////////////////////////////////////////////////
// block scope//
// if(true){
//   let komanda = "Navbahor"
//   console.log(komanda)
// }
// ///////////////////////////////////////////////////////
// all scope//
// let laptop = "Macbook Pro"

// function pc(){
//   let laptop = "Asus"
//   console.log(laptop);

//   if(true){
//     let laptop = "Acer"
//     console.log(laptop);
//   }
// }
// pc()

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// closures- tashqi functiondagi ozgaruvchini ichki function bilan ozgartirish uchun ishlatiladi

// const incBtn = document.getElementById("inc")
// const decBtn = document.getElementById("dec")


// function oshirish(){
//   let count= 0;


//   function increment(){
//     count++
  
//     return count
//   }

//   function decrement(){
//     count--

//     return count
//   }

//   return{
//     increment,decrement
//   }
// }
// oshirish()

// let plus = oshirish().increment
// let minus = oshirish().decrement

// intBtn.addEventListener("click",function(){
//   console.log(plus())
// });
// decBtn.addEventListener("click",function(){
//   console.log(minus())
// });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function other(){
//   let count = 0;
//   return function inner(){
//     count++
//     return count
//   }
// }

// let inc = other ()

// console.log(inc());
// console.log(inc());
// console.log(inc());


// function tashqiFunksiya (){
//   let hisob = 0;

//   return function ichkiFunksiya (){
//     hisob+=1
//     return hisob
//   }
// }

// let count = tashqiFunksiya()
// console.log(count());
// console.log(count());


