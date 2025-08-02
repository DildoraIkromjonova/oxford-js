// dom events

// input
// click
// mouseenter
// mouseout
// mousemove

// addEventListener => elementga qandaydir hodisa (event) bo'lganda qaysidir funksiya ishlashi uchun

// myBtn.addEventListener("click", createTodo);

// function createTodo() {
//     console.log("ishladi");

//     // myInput.value = "";
// }

// myInput.addEventListener("input", () => {
//     console.log(myInput.value);
// });

// submit event - bu hodisa form tegi bilan foydalanganda ishlatamiz
// event.preventDefault() - form tegiga addEventListener ishlatganda saytga refresh berishni oldini olish uchun

// jsda 

const myInput = document.querySelector(".myInput");
const myBtn = document.querySelector(".myBtn");
const list = document.querySelector(".list");
const form = document.querySelector(".form");
const clear_btn = document.querySelector(".clear_btn")

const allTodos = [];

getTodo();

form.addEventListener("submit", createTodo);

function createTodo(event) {
    event.preventDefault();

    const data = {
        id: `item-${allTodos.length + 1}`,
        title: myInput.value,
    };

    allTodos.push(data);
    getTodo();
    myInput.value = "";
}

function getTodo() {
    if (allTodos.length === 0) {
        return;
    }

    const item = document.createElement("div");
    item.className = "item";
    allTodos.forEach((todo) => {
        item.innerHTML = `
        <p class="item_title">${todo.title}</p>

        <button type="button" class="item_delete_btn">
            <i class="fa-solid fa-trash"></i>
        </button>
        `;
    });
    list.appendChild(item);
  }

  let value = myInput.value.trim();

  if (value === "") {
    console.log("Bo‘sh matn kiritib bo‘lmaydi!");
    return;
}

value = value[0].toUpperCase() + value.slice(1);




