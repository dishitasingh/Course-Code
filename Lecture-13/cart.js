console.log("Hey");
let list = document.getElementById("listArea");
let Items = JSON.parse(localStorage.getItem("Orders"));

    
        list.innerHTML = '';
        for(let i = 0; i < Items.length ; i++) {
            // Add each todo item to list
            addItemsToCart(Items[i], i);
        }
    
    
    function addItemsToCart(todoItem, todoId) {
        const li = document.createElement("li");
        li.setAttribute('todo-id', todoId);
        li.className = 'list-group-item';

    
        const span = document.createElement("span");
        span.innerText = todoItem.product;
        span.className = 'col-2'

        const span2 = document.createElement("span");
        span2.innerText = todoItem.Quantity;
        span2.className = 'col-2'
        list.appendChild(li);
        li.appendChild(span);
        li.appendChild(span2);
        
    }
