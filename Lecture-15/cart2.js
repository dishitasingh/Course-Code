console.log("hey");

let productBox = document.getElementById("productDisplay");

let cart = {}

if(localStorage.getItem("cart")!=null){
    cart = JSON.parse(localStorage.getItem("cart"));
}

for(key in cart){
    let productName, productPrice;
    for(let i = 0; i < products.length; i++){
        if(products[i].id===parseInt(key)){
            productName = products[i].name;
            productPrice = products[i].price;
            productQuantity = products[i].id;
            
            console.log(products[i].id);
            let idV = products[i].id;
            for(idV in cart){
                console.log(idV);
            }
        productBox.innerText = "Name: " + productName + ";" + " Price:" + productPrice +";"+ " Quantity:" + idV;
        }
    }
}