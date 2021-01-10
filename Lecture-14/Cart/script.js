console.log("Hey");
let list = document.getElementById("listArea");
let Items = JSON.parse(localStorage.getItem("Orders"));



for (let i = 0; i < Items.length; i++) {
    // Add each todo item to list
    addItemsToCart(Items[i], i);

}


function addItemsToCart(productInf, productId) {
    const li = document.createElement("li");
    li.setAttribute('todo-id', productId);
    li.className = 'list-group-item';
    console.log(productInf)


    const span = document.createElement("span");
    span.innerText = productInf.product;
    span.className = 'col-2'


    const addIcon = document.createElement("i");
    addIcon.className = 'fas fa-plus-circle';
    const addBtn = document.createElement('button');
    addBtn.className = "btn btn-link col-1 red-color";
    addBtn.appendChild(addIcon);
    addBtn.onclick = addQuantity;

    const subIcon = document.createElement("i");
    subIcon.className = 'fas fa-minus-circle';
    const subBtn = document.createElement("button");
    subBtn.className = 'btn btn-link col-1';
    subBtn.appendChild(subIcon);

    const span2 = document.createElement("span");
    span2.innerText = productInf.Quantity;
    span2.className = 'col-2';
    span2.setAttribute("id","")

    list.innerHTML = '';
    list.appendChild(li);
    li.appendChild(span);
    li.appendChild(span2);
    li.appendChild(subBtn);
    li.appendChild(addBtn);

}

function addQuantity(){

console.log(addIndex+1);
}
