let todos = [];

document.getElementById("add-btn").addEventListener("click", addTodo);
document.getElementById("clear-btn").addEventListener("click", clearAll);
  document.getElementById()


function addTodo() {
  const input = document.getElementById("todo-input");
  const value = input.value.trim();
  if (value !== "") {
    todos.push(value);
    input.value = "";
    renderTodos();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function clearAll() {
  todos = [];
  renderTodos();
}

function renderTodos() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${todo}
      <button class="delete-btn" onclick="deleteTodo(${index})">🗑️</button>
    `;
    list.appendChild(li);
  });

  document.getElementById("task-count").innerText = 
    `You have ${todos.length} pending ${todos.length === 1 ? "task" : "tasks"}`;
}



