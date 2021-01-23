console.log("hey");

const container = document.getElementById("Container");

let ProductList = [{
    Name: Laptop,
    ProductId: 0,
    Price: Rs_22900
}, {
    Name: Smartwatch,
    ProductId: 1,
    Price: Rs_22900,
}, {
    Name: Tablet,
    ProductId: 2,
    Price: Rs_22900
},{
    Name: Headphone,
    ProductId: 3,
    Price: Rs_22900
},{
    Name: PowerBank,
    ProductId: 4,
    Price: Rs_22900
},{
    Name: HeadphoneStand,
    ProductId: 5,
    Price: Rs_22900
},{
    Name: hey,
    ProductId: 6,
    Price: Rs_22900
}
]
console.log(ProductList)
for(let i = 0; i<ProductList.length; i++){
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img-top");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");

    const cardBtn = document.createElement("button");
    cardBtn.classList.add("btn").add("btn-primary");


    container.append("card");
    card.appendChild("cardImg");
    card.appendChild("cardBody");
    cardBody.appendChild("cardTitle");
    cardBody.appendChild("cardBtn");
}
//web-1(task add) //Click on buton creates/updates array
//web2(task show) //Todos key array ko uthana hai and paste here

