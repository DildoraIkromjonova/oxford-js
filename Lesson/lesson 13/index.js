// obj = {
//     name: "Ali",
//     surName: "Valiyev",
//     age: 40,
//     child: {
//         name: "Salim",
//         surName: "Alimov",
//         age: 20,
//         getFullName() {
//             console.log(
//                 `Bu o'quvchining ismi: ${this.name},familyasi: ${this.surName}`
//             )
//         }
//     }
// }
// let newObj = Object.assign({}, obj, {
//     child: Object.assign({}, obj.child)
//   });
//   newObj.child.name = "Eshmat"
//   newObj.child.surName = "Toshmatov"
//   obj.child.getFullName()
//   newObj.child.getFullName()
// =============================================
// let str = "Algoritm_6 and Oxford_2.!"
// let newstr = str.toLowerCase()
// let result = ""
// for(let value of newstr){
//     if((value.toUpperCase() !== value) || (value=== " ")){
//         result+=value
//     }
// }
//  result = result.replace("a", "A")
//  console.log(result)