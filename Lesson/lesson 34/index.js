// non - bloking and bloking

// bloking code == synchron code yani sinxron kod
// bloking kodlar - javascripda biror bir amal bajarishni kutib turadi yani birorta katta amal bajarilganda javascriptni osha kodni kutib qolgan kodlarni oqilishini tosib qoyadigan kod
//  console.log("start")
// for( let i = 1; i <=100000000; i ++){
//   console.log(i)
// }
// console.log("end")
// ===================================================================================================================================================================================================================================================================================
 
// non - bloking  === asynchron code yani bu asinxron kod
// non bloking  kodlar - javascrip biror bir amalni bajarilayotganda qolgan kodlarga ta sir qilamay  yani biror katta amal bajarilayotgan bolsa kodlarimzni oqilishini tosib qoymaydigan kod
// console.log("start")
//  setTimeout(() => {
//   console.log("bajarildi")
//  }, 5000)
//  console.log("end")
// ====================================================================================================================================================================================================================================================================================
// function start1(callback){
//   setTimeout(() =>{
//     console.log("start1")
//     callback()
//   },1000)
// }

// function start2(callback){
//   setTimeout(()=>{
//     console.log("start2")
//     callback()
//   },1000)
// }
// function start3(callback){
//   setTimeout(()=>{
//     console.log("start3")
//      callback()
//   } ,1000)
// }

// start1(()=>{
//   start2(() =>{
//     start3(() =>{
//       console.log("ishlar tugatildi")
//     })
//   })
// })
// ====================================================================================================================================================================================================================================================================================
// promise - bu  bizga callback hell degan narsani oldini olish uchun ishlatamiz va doim promise dan then, catch, finally qaytadi va promise  3 ta status bor boladi. 
// 1 pedding  yani promise bajarilyapti.
// 2 fullfiled  bajarilgan 
// 3 rejected bajarilmagan  
// qaytadi va promise da biz kodlarni resolve va reject da qayatamz 
//  resolve da togri kodlar 
//  rejecteda bolsa xatoliklarni qaytaramiz
// ===================================================================================================================
// then - promisedagi kodni qaytaradi yani resolve qaytadi
// catch  promisedagi xato kod qaytaradi yani reject
//  finally - promisedagi kod xato yoki togri bolsa ham ishlaydi
// ===================================================================================================================
// function start1(){
//   return new Promise((resolve, reject) =>{
//  let user = true;
//    if ( user ){
//     resolve ("bajarildi")
//    } else(
//     reject ("xatolik: bajarilmadi")
//    )
//   })
// }

// start1().then((value)  => console.log(value)).catch((err)=> console.log(err))

function start(){
  return new Promise((resolve) =>{
    setTimeout(()=>{
      resolve()
    })
  },1000)
}

// promise chaining 
// promise  chaining -  xuddi metod chainning kabi then dan song ishlatilishi boladi yani ketma ket  then , catch  ishlatilish usuli.
start()
.then((value) => console.log(value))
.then(() => console.log("staat1"))
.then(() => console.log("staat2"))
.then(() => console.log("staat3"))
.catch((err) => console.log(err))


// callback hell  
// bu biz bir  nechta  yoki sonini cheki yoq bolgan callback  function larimizni ichidagi xuddi nested array kabi  callback ichma ich yozilishi jarayonida bizz callback hell ga duch kelamz callback hell bizga  kodlarimzni oqitilishini qiyintilashtirdi , xatoliklar oqib olish yoki tuzatishda muammoga dush kelamz 





















