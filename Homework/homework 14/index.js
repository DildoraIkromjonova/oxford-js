// let styles = ["Jazz", "Blues"];
// console.log(styles);
// // =======================
// styles.push("Rock-n-Roll");
// console.log(styles);
// // =========================
// styles[Math.floor(styles.length / 2)] = "Classics";
// console.log(styles);
// // ===================
// styles.unshift("Rap", "Reggae");
// console.log(styles);

// terminalda chiqadigan javb  

// [ 'Jazz', 'Blues' ]
// [ 'Jazz', 'Blues', 'Rock-n-Roll' ]
// [ 'Jazz', 'Classics', 'Rock-n-Roll' ]
// [ 'Rap', 'Reggae', 'Jazz', 'Classics', 'Rock-n-Roll' ]
// ====================================================================
// ======================================================================
// ======================================================================
// let fruits = ["Apples", "Pear", "Orange"];
// let shoppingCart = fruits;
// shoppingCart.push("Banana");
// console.log(fruits);

// terminalda chiqadigan javb

// [ 'Apples', 'Pear', 'Orange', 'Banana' ]

// ====================================================
// ====================================================
// ====================================================
// let arr = ["a", "b"];
// arr.push(function() {
//   console.log(this);
// });
// arr[2]();

// javobda [ 'a', 'b', [Function]] chiqadi 

// ===============================================================
// ================================================================
// ================================================================
// function sumInput() {
//     let arr = []
//     let sum = 0
//     while (true) {
//         let value = prompt("Raqam qiymat kiriting")
//         if (value && !value.includes(" ")) arr.push(value);
//         else break
//     }
//     for (let value of arr) sum += Number(value)
//     return sum
// }
//  console.log(sumInput())

// javobi  45 chiqadi 