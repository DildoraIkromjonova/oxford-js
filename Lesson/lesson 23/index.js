let count = document.querySelector(".count")
let btn = document.querySelector(".btn")
let remove = document.querySelector(".remove")
let clear = document.querySelector(".clear")

let sum = localStorage.getItem("miqdor")||0
getLocalStorage()

btn.addEventListener("click", () => {
  sum++
  let.textContent = sum
  localStorage.setItem("miqdor", sum)
});

function getLocalStorage() {
  let miqdor = localStorage.getItem("miqdor") || 0
  let.textContent = miqdor
};

remove.addEventListener("click", ()=> {
  localStorage.removeItem("miqdor")
});

clear.addEventListener("click", () => {
  localStorage.clear
});
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
let array = [
  { 
    name:"John",
    age:20,
  }
]

let jsonArray = JSON.stringify(array)
console.log(JSON.parse(jsonArray))

// JSON - Javascrip Object Notation 
// parse - JSON ni oddiy oqib olish uchun
// stringify- JSON ga ogirish uchun 