console.log("hey")
const list = document.getElementById("list");
const newTask = document.getElementById("newTaskInput");
const btnNewTask = document.getElementById("btnAddTask");

let todos = JSON.parse(localStorage.getItem("todolist"));
if( todos === null ) {
    todos = [];
}
showTodos();

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
    localStorage.setItem("todolist", JSON.stringify(todos));
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
    li.className = 'list-group-item';

    const span = document.createElement("span");
    span.innerText = todoItem.task;
    span.className = 'col-2'

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.className = 'col-1';
    checkbox.onclick = toggleCheckbox;

    const dltIcon = document.createElement("i");
    dltIcon.className = 'fa fa-trash';
    const dltBtn = document.createElement('button');
    dltBtn.className = "btn btn-link col-1 red-color";
    dltBtn.appendChild(dltIcon);
    dltBtn.onclick = deleteItem;

    const upIcon = document.createElement("i");
    upIcon.className =  'fa fa-chevron-up';
    const upBtn = document.createElement("button");
    upBtn.className = 'btn btn-link col-1';
    upBtn.appendChild(upIcon);
    upBtn.onclick = itemUp;

    const downIcon = document.createElement("i");
    downIcon.className =  'fa fa-chevron-down';
    const downBtn = document.createElement("button");
    downBtn.className = 'btn btn-link col-1';
    downBtn.appendChild(downIcon);
    downBtn.onclick = itemDown;

    if(todoItem.done) {
        checkbox.setAttribute('checked', true);
        span.style.textDecoration = 'line-through';
        span.style.color = 'green';
    }

    list.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(dltBtn);
    if(todoId !==  0) {
        li.appendChild(upBtn);
    }
    if(todoId !== todos.length - 1) {
        li.appendChild(downBtn);
    }
    li.appendChild(dltBtn);

    list.appendChild(li);
}



function toggleCheckbox(event){
    const checkboxIndex = parseInt(event.target.parentElement.getAttribute('todo-id'));
    todos[checkboxIndex].done = !todos[checkboxIndex].done;
    console.log(checkboxIndex);
    showTodos();
}

function deleteItem(event){
    let deleteIndex = parseInt(event.target.parentElement.getAttribute('todo-id'));
    if(Number.isNaN(deleteIndex)){
        deleteIndex = parseInt(event.target.parentElement.parentElement.getAttribute('todo-id'))
    }
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
    let upIndex = parseInt(event.target.parentElement.getAttribute('todo-id'));
    if(Number.isNaN(upIndex)){
        upIndex = parseInt(event.target.parentElement.parentElement.getAttribute('todo-id'))
    }
    if(upIndex !== 0){
        swap(upIndex, upIndex -1);
    console.log(upIndex);
    showTodos();
    }
}

function itemDown(event){
    let downIndex = parseInt(event.target.parentElement.getAttribute('todo-id'));
    if(Number.isNaN(downIndex)){
        downIndex = parseInt(event.target.parentElement.parentElement.getAttribute('todo-id'))
    }
    if(downIndex !== todos.length-1){
        swap(downIndex, downIndex +1);
    showTodos();
    }
    

}

function swap(index1, index2){
    const todoIndex1 = todos[index1];
    const todoIndex2 = todos[index2];

    todos[index1] = todoIndex2;
    todos[index2] = todoIndex1;

}

console.log(todos)