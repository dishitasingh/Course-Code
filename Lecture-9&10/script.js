// Initialising all components
const list = document.getElementById("list");
const newTask = document.getElementById("newTaskInput");
const btnNewTask = document.getElementById("btnAddTask");
const tomLi = document.getElementById("list2");
const heading = document.getElementsByClassName("todayHead");

//Storing list items
let todos = JSON.parse(localStorage.getItem("todolist"));

if( todos === null ) {
    todos = [];
}
refreshTodos();

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
    refreshTodos();
}

// This function will show all the todos present in the array on the webpage
function refreshTodos() {
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
    li.classList.add("list-group-item");
    li.style.fontFamily = "Helvetica";
    li.style.fontSize = "15px";  
    li.style.backgroundColor = '#fad390';
    li.style.borderRadius = "4px";  

    const span = document.createElement("span");
    span.innerText = todoItem.task;
    span.setAttribute('todo-id', todoId);

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute('todo-id', todoId);
    checkbox.onclick = toggleCheckbox;
    checkbox.style.margin = "10px";  

    const buttonGroup = document.createElement("span");
    buttonGroup.setAttribute("class","btn-group");
    buttonGroup.setAttribute("role","group");
    buttonGroup.setAttribute("aria-label","Basic example"); 
    buttonGroup.style.float = "right";  

    const delBtn = document.createElement("button");
    delBtn.setAttribute("class","btn btn-danger");
    delBtn.onclick = deleteItem;
    const delIcon = document.createElement("i");
    delIcon.className = 'fa fa-trash';
    delBtn.appendChild(delIcon);

    const upBtn = document.createElement("button");
    upBtn.innerHTML = "<i class='fa fa-chevron-up' aria-hidden='true' height='30px' width='30px'></i>";
    upBtn.setAttribute("class","btn btn-info");
    upBtn.onclick = moveTodoUp;

    const downBtn = document.createElement("button");
    downBtn.innerHTML = "<i class='fa fa-chevron-down' aria-hidden='true'></i>";
    downBtn.setAttribute("class","btn btn-secondary");
    downBtn.onclick = moveTodoDown;

    if(todoItem.done) {
        checkbox.setAttribute('checked', true);
        span.style.textDecoration = 'line-through';
        span.style.color = 'rgb(37, 66, 7)';
        li.style.backgroundColor = 'rgba(69, 221, 48, 0.753)';
        
    }

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(buttonGroup);
    
    if(todoId !==  0) {
        buttonGroup.appendChild(upBtn);
    }
    if(todoId !== todos.length - 1) {
        buttonGroup.appendChild(downBtn);
    }
    buttonGroup.appendChild(delBtn);

    list.appendChild(li);
    
}


function toggleCheckbox(event){
    const checkboxIndex = parseInt(event.target.parentElement.getAttribute('todo-id'));
    console.log(checkboxIndex);
    todos[checkboxIndex].done = !todos[checkboxIndex].done;
    refreshTodos();
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
    refreshTodos();
}

function moveTodoUp(event) {
    let upIndex = parseInt(event.target.parentElement.parentElement.getAttribute('todo-id'));
    if(Number.isNaN(upIndex)){
        upIndex = parseInt(event.target.parentElement.parentElement.parentElement.getAttribute('todo-id'))
    }
    console.log(upIndex);
    if(upIndex !== 0) {
        swap(upIndex, upIndex - 1);
        refreshTodos();
    }
}

function moveTodoDown(event) {
    let downIndex = parseInt(event.target.parentElement.parentElement.getAttribute('todo-id'));
    if(Number.isNaN(downIndex)){
        downIndex = parseInt(event.target.parentElement.parentElement.parentElement.getAttribute('todo-id'))
    }
    console.log(downIndex);
    if(downIndex !== todos.length - 1) {
        swap(downIndex, downIndex + 1);
        refreshTodos();
    }
}

function swap(index1, index2){
    const todoIndex1 = todos[index1];
    const todoIndex2 = todos[index2];

    todos[index1] = todoIndex2;
    todos[index2] = todoIndex1;

}


    let answer = document.getElementById('quote');
    answer.addEventListener("mouseover", myFunction);
    answer.addEventListener("click", mySecondFunction);
    answer.addEventListener("mouseout", myThirdFunction);
    
    function myFunction() {
      document.getElementById("quote1").innerHTML = "'Just Do It'"
    }
    
    function mySecondFunction() {
      document.getElementById("quote1").innerHTML = "'Your only Limit is YoU'"
    }
    
    function myThirdFunction() {
      document.getElementById("quote1").innerHTML = "'Today you Will'"
    }