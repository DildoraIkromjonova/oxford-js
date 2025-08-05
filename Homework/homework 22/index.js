const myInput = document.querySelector(".myInput");
const myBtn = document.querySelector(".myBtn");
const list = document.querySelector(".list");
const form = document.querySelector(".form");
const clearBtn = document.querySelector(".clear_btn");
const countTitle = document.querySelector(".all_items_title");

let allTodos = JSON.parse(localStorage.getItem("todos")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let value = myInput.value.trim();
  if (value === "") {
    alert("Bo‘sh matn kiritib bo‘lmaydi!");
    return;
  }

  value = value[0].toUpperCase() + value.slice(1);

  const data = {
    id: `item-${allTodos.length + 1}`,
    title: value,
  };

  allTodos.push(data);
  saveToLocalStorage();
  renderTodos();
  myInput.value = "";
});

function renderTodos() {
  list.innerHTML = "";

  allTodos.forEach((todo, index) => {
    const item = document.createElement("div");
    item.className = "item";

    const p = document.createElement("p");
    p.className = "item_title";
    p.innerText = todo.title;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "item_delete_btn";
    deleteBtn.innerText = "O‘chirish";
    deleteBtn.addEventListener("click", () => deleteTodo(index));

    item.appendChild(p);
    item.appendChild(deleteBtn);
    list.appendChild(item);
  });

  const length = allTodos.length;
  countTitle.innerText = `Sizda ${length} ta task${length != 1 ? "lar" : ""} mavjud`;
}

function deleteTodo(index) {
  allTodos.splice(index, 1);
  saveToLocalStorage();
  renderTodos();
}

clearBtn.addEventListener("click", () => {
  allTodos = [];
  localStorage.removeItem("todos");
  renderTodos();
});

function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(allTodos));
}

renderTodos();
