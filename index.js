import { addTodo, deleteTodo, toggleTodo } from "./Redux/actions.js";
import { store } from "./Redux/store.js";

store.subscribe(() => renderTodos(store.getState().todos));
const todos_container = document.getElementById("todos");
document.getElementById("add-btn").addEventListener("click", () => {
  const title = document.getElementById("todo-input").value;
  if(title=== "") return;
  store.dispatch(addTodo({ title }));
});

function renderTodos(todos) {
  todos_container.innerText = "";

  console.log(todos);
  todos.forEach((todo) => {
    let container = document.createElement("div");
    container.classList.add("todo-item");

    let title = document.createElement("div");
    title.innerText = todo.title;
    title.classList.add("title");

    if (todo.status) {
      title.classList.add("strike");
    }
    container.append(title);

    let toggle = document.createElement("button");
    toggle.innerText = "toggle"; // todo.status ? "Mark as Done" : "Mark as not done";
    toggle.addEventListener("click", function () {
      store.dispatch(toggleTodo({ id: todo.id }));
    });
    container.append(toggle);

    let del = document.createElement("div");
    del.innerHTML = `<button class="ui compact icon red button">
            <i class="trash icon"></i>
          </button>`;
    del.addEventListener("click", function () {
      console.log("del clicked");

      store.dispatch(deleteTodo({ id: todo.id }));
    });
    container.append(del);

    todos_container.append(container);
  });
}
