console.log("hey");
const btnAddCart = document.getElementById("add");
btnAddCart.addEventListener('click', saveItem);
let quantityCount = 0;
let ProductArray=[];
function saveItem(){
    quantityCount=quantityCount+1;
    localStorage.setItem("total",quantityCount);
    this.nextElementSibling.innerHTML = localStorage.getItem("total")+" in cart";
    const productName = this.previousElementSibling.innerHTML;
    let Product = {
        product: productName,
        Quantity:quantityCount
    }
    console.log(Product);
    ProductArray.push(Product);
    console.log(ProductArray);
    showTodos();
}
function showTodos() {
    localStorage.setItem("Orders", JSON.stringify(ProductArray));
}
// This function will add the given task to the todo list on our webpage


//web-1(taskadd) //Click on buton creates/updates array 
//web2(taskshow) //Todos key array ko uthana hai and paste here

