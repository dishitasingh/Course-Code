const list = document.getElementById("list");
const newTask = document.getElementById("newTask");
const btnNewTask = document.getElementById("btnNewTask");

let todos = [];

btnNewTask.addEventListener('click', addNewTodoToArray);




function addNewTodoToArray() {
    if(newTask.value === '') {
        return;
    }

    let todoItem = {
        task: newTask.value,
        done: false
    };

    todos.push(todoItem);
    newTask.value = '';
    showTodos();
}

// This function will show all the todos present in the array on the webpage
function showTodos() {
    list.innerHTML = '';
    for(let i = 0; i < todos.length ; i++) {
        // Add each todo item to list
        addTodoToList(todos[i], i);
    }
}

// This function will add the given task to the todo list on our webpage
function addTodoToList(todoItem, todoId) {
    const li = document.createElement("li");
    li.setAttribute('todo-id', todoId);

    const span = document.createElement("span");
    span.innerText = todoItem.task;

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.onclick = toggleCheckbox;
    console.log(todoItem);

    const delButt = document.createElement("button");
    delButt.innerText = "x";
    delButt.onclick = deleteItem;
    
    if(todoItem.done) {
        checkbox.setAttribute('checked', true);
        span.style.textDecoration = 'line-through';
        span.style.color = 'green';
    }
    list.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delButt);
}
function toggleCheckbox(event){
    const index = parseInt(event.target.parentElement.getAttribute('todo-id'));
    todos[index].done = !todos[index].done;
    console.log(index);
    showTodos();
}

function deleteItem(event){
    const deleteIndex = parseInt(event.target.parentElement.getAttribute('todo-id'));
    console.log(deleteIndex);
}