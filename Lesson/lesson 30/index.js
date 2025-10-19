const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const clearBtn = document.getElementById("clear-btn");

let todos = [];

function readTodos() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;

    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑";
    delBtn.className = "delete-btn";
    delBtn.onclick = () => deleteTodo(index);

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return alert("Iltimos, biror narsa yozing!");
  todos.push(text);
  input.value = "";
  readTodos(); 
});


function deleteTodo(index) {
  todos.splice(index, 1);
  readTodos();
}

clearBtn.addEventListener("click", () => {
  todos = [];
  readTodos();
});
readTodos();