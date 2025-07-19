
//   let users = [
//     { id: 2, name: "Ali", age: 25 },
//     { id: 1, name: "Sardor", age: 27 },
//     { id: 3, name: "Bek", age: 23 }
//   ];
// //   ==========================
//   users.sort((a, b) => a.age - b.age);
//   console.log("Age", users);
// //   ==========================
//   users.sort((a, b) => a.name.localeCompare(b.name));
//   console.log("Name", users);
// //   ========================
//   users.sort((a, b) => a.id - b.id);
//   console.log("ID", users);
// ========================================================================
// let obj = [
//     { name: "Bek", status: 1 },
//     { name: "Sardor", status: 1 },
//     { name: "Abu", status: 1 },
//   ];
//   let obj2 = obj.filter(user => user.status === 1 && user.name.length < 4);
//   console.log(obj2);
// ===========================================================================
// function User(a1, a2) {
//     let arr = a1.concat(a2).sort((a, b) => a - b);
//     let arr2 = arr.length;

//     if (arr2 === 0) return 0;
//     if (arr2 % 2 === 1) return arr[Math.floor(arr2 / 2)];
//     return (arr[arr2 / 2 - 1] + arr[arr2 / 2]) / 2;
// }
// console.log(User([1, 3], [2]));
// console.log(User([1, 3], []));
// console.log(User([], [2, 4]));
// console.log(User([1], []));
// console.log(User([1, 2], [3, 4]));