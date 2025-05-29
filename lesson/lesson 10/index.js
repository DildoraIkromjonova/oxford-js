// let obj ={
//     name: "Toshmat",
//     age: 20,
// }
 
// let newObj = structuredClone(obj)
// newObj.name = "Urmat";
// console.log(obj)

let obj ={
    id:1,
    name:"toshmat",
    status:"talaba",
    age:20,
   address:"center",
} 

for(let key in obj){
    console.log(obj[key])
}




// let newObj=Object.assign(obj, {id:1,status:"Ishchi" }, )
// newObj.age =10
// console.log(obj)

// let obj2 ={
//     name: "Eshmat",
//     age: 21,
// }


// let newObj=obj
// console.log(newObj===obj)

// obj.name = "Eshmat";
// obj["name"] = "Gulmat"
// console.log(obj);


// let newObj = obj
// newObj.name ="Gulmat"
// console.log(newObj)
// console.log(obj)
 
// biz js ni xotirasini ikkiga ajratib olamiz!
// 1) stack 2) heap.
// avval primitive ozgaruvchi ochib olamiz va u js miyyasida stackda joylashadi.!!!!!
// nanprimitive ozgaruvchi ochsak u qiymzt togridan togri js xotirasiga borib qoymaydi,
// heap borish uchun stackda link paydo boladi va osh link heapda joylashadi...
  