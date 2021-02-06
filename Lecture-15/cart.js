const cartContainer = document.getElementById("productDisplay");
let total = document.getElementById("total");
let cart = {};

if (localStorage.getItem("cart") != null) {
       cart = JSON.parse(localStorage.getItem("cart"));
}

for (key in cart) {
       console.log(cart[key]);
}

console.log(products);
let prodQuanValue;
//
function displayCart(index) {
       if (cart.hasOwnProperty(products[index].id)) {
              const productList = document.createElement("tr");


              const productSlNo = document.createElement("th");
              productSlNo.setAttribute("scope", "row");
              productSlNo.innerText = index;

              const productName = document.createElement("td");
              productName.innerText = products[index].name;

              const addTd = document.createElement("td");
              const addBtn = document.createElement("button");
          
              const addIcon = document.createElement("i");

              addTd.appendChild(addBtn);

              addIcon.className = "fas fa-plus";

              addBtn.className = 'btn btn-link col-1';
              addBtn.onclick = addQuantity;
              addBtn.style.width = "150px";
              addBtn.style.padding = "10px";
              addBtn.appendChild(addIcon);

              const productPrice = document.createElement("td");
              productPrice.innerText = products[index].price;

              const productAmount = document.createElement("td");
              productAmount.innerText = products[index].price * cart[products[index].id];

              const productQuantity = document.createElement("td");
              prodQuanValue = cart[products[index].id];
              console.log(prodQuanValue)
              productQuantity.innerText = prodQuanValue;



              cartContainer.append(productList);
              productList.appendChild(productSlNo);
              productList.appendChild(productName);
              productList.appendChild(productPrice);
              productList.appendChild(productQuantity);
              productList.appendChild(productAmount);
              productList.appendChild(addTd);
       }
}

       function refreshTodos(){
              cartContainer.innerHTML = "";
       for (let i = 0; i < Object.keys(cart).length; i++) {
              displayCart(i);
       }}
var sumVal = 0;
for (var i = 0; i < cartContainer.rows.length; i++) {
       sumVal = sumVal + parseInt(cartContainer.rows[i].cells[4].innerHTML);
}

function addQuantity(event){
       const val = event.target.
       prodQuanValue++;
       console.log(prodQuanValue);
}

total.innerText = sumVal;

console.log(sumVal);
refreshTodos()