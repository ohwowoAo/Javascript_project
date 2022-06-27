const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");
const todoChart = document.getElementById("todoChart");

let todos = [];

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos))
}
function deleteTodo(event){
    const delLi = event.target.parentElement;
    delLi.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(delLi.id));
    saveTodos();
}
function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoChart.appendChild(li);
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value ="";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem("todos");
console.log(savedTodos);
if(savedTodos !== null ){
    const parsedToDos = JSON.parse(savedTodos);
    todos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}