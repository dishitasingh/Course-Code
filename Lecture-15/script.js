let cart = {};
if (localStorage.getItem("cart") != null) {
    cart = JSON.parse(localStorage.getItem("cart"));
}
console.log(cart);
const productContainer = document.getElementById("products-container");

function showProducts(index) {

    const cardDiv = document.createElement("div");
    cardDiv.className = "card col-4";

    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", "blank-img (1).jpg");
    cardImg.className = "card-img-top";

    const productDetails = document.createElement("div");
    productDetails.className = "card-body";

    const productName = document.createElement("h5");
    productName.className = "card-title";
    productName.innerText = products[index].name;

    const productPrice = document.createElement("p");
    productPrice.className = "card-text";
    productPrice.innerText = products[index].price;

    const addToCartBtn = document.createElement("button");
    addToCartBtn.className = "btn btn-primary";
    addToCartBtn.innerText = "Add to Cart";
    addToCartBtn.addEventListener("click", function () {
        let productId = products[index].id;
        if (cart.hasOwnProperty(productId)) {
            cart[productId] += 1;
        } else {
            cart[productId] = 1;
        }
        console.log(cart);
        
        refreshCatalogue();
    })

    console.log(cart);

    let productQuantity = document.createElement("span");
    if (cart.hasOwnProperty(products[index].id)) {
        productQuantity.innerText = cart[products[index].id] + "in cart";
    }
    saveCart();


    productContainer.appendChild(cardDiv);
    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(productDetails);
    productDetails.appendChild(productName);
    productDetails.appendChild(productPrice);
    productDetails.appendChild(addToCartBtn);
    productDetails.appendChild(productQuantity);
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function refreshCatalogue() {
    productContainer.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        showProducts(i);
    }
}
refreshCatalogue();
for(key in cart){
    console.log(cart);
    console.log(key);
    console.log(cart[key]);
    console.log(cart[key]);
}