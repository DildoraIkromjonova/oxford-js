//         DOM - document object model

// let text = document.querySelector(".text")

// text.style.color = "red"
// console.log(text)
// =========================================================
//  1 usul - class orqali html ni chaqirish 
// let box = document.querySelector(".box");

//  2 usul - teng orqali html elementini chaqirish 
// let box = document.querySelector("div");

// 3 usul - barcha class va idlarni arrayda chaqirish
// let boxes = document.querySelectorAll(".box");

// // 4 usul - htmldagi id bilan berilgan elementni olish #
// let box = document.getElementById("box");

// 5 usul - htmldagi elementlarni class boyicha arrayda chaqirib olish 
//  let box = document.getElementsByClassName("box");

// ================================================================================

// dom manupulation - js dan dom ga ta'sir otkazish , ozgartirish

// textContent- html elementini ma'lumotini ozgartirish 

// innerHtml - element ma'lumotini yoki html elementini berish 

// style - html elementini style xossasida ozgartirish

// creatElement - jsda turib Html element yaratish 

// appendChild - jsdagi elementni htmlga biriktirish , qoshish

// ================================================================

// let text = document.querySelector(".text")
// let parent = document.querySelector(".parent")

// text.textContent = 'Hayr maktabim';

// text.innerHTML = '<i>Hayr Maktabim</i>';

// text.style.color = 'red';

// text.style.backgroundColor = 'blue';

// let  p = createElement('p');
// let  h3 = createElement('h3');

// p.textContent = 'Bizni js da yaraatilgan P';
// h3.textContent = 'Bizni H3';

// parent.appendChild(p);
// parent.appendChild(h3);

// console.log(parent);
// =========================================================
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let numbers = document.getElementById("numbers");
// arr.forEach((num ) => {
//   let b = document.createElement("p");
//   b.textContent = num;
//   if (num % 2 === 0) {
//     b.style.color = "red";
//   } else {
//     b.style.color = "blue";
//   }
//   numbers.appendChild(b);
// });
