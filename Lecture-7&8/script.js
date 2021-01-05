console.log("hey")
const list = document.getElementById("list");
const newTask = document.getElementById("newTaskInput");
const btnNewTask = document.getElementById("btnAddTask");

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
    span.setAttribute("class", "checkSpan");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "myBox");
    checkbox.onclick = toggleCheckbox;

    const delBtn = document.createElement("button");
    delBtn.innerText = "x";
    delBtn.onclick = deleteItem;

    const upBtn = document.createElement("button");
    upBtn.innerHTML = "^";
    upBtn.onclick = itemUp;

    const downBtn = document.createElement("button");
    downBtn.innerHTML = "v";
    downBtn.onclick = itemDown;

    if(todoItem.done) {
        checkbox.setAttribute('checked', true);
        span.style.textDecoration = 'line-through';
        span.style.color = 'green';
    }

    list.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(upBtn);
    li.appendChild(downBtn);
}


function toggleCheckbox(event){
    const checkboxIndex = parseInt(event.target.parentElement.getAttribute('todo-id'));
    todos[checkboxIndex].done = !todos[checkboxIndex].done;
    console.log(checkboxIndex);
    showTodos();
}

function deleteItem(event){
    const deleteIndex = parseInt(event.target.parentElement.getAttribute('todo-id'));
    console.log(deleteIndex);
    const newTodos = [];
    for(let i = 0; i < todos.length; i++){
        if(i !== deleteIndex){
            newTodos.push(todos[i]);
        }
    }
    todos = newTodos;
    showTodos();
}

function itemUp(event){
    const upIndex = parseInt(event.target.parentElement.getAttribute('todo-id'));
    if(upIndex !== 0){
        swap(upIndex, upIndex -1);
    console.log(upIndex);
    showTodos();
    }
}

function itemDown(event){
    const downIndex = parseInt(event.target.parentElement.getAttribute('todo-id'));
    if(downIndex !== todos.length-1){
        swap(downIndex, downIndex +1);
    console.log(downIndex);
    showTodos();
    }
    

}

function swap(index1, index2){
    const todoIndex1 = todos[index1];
    const todoIndex2 = todos[index2];

    todos[index1] = todoIndex2;
    todos[index2] = todoIndex1;

}