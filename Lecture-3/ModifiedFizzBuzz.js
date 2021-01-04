console.log("heloop")

var input = document.getElementById("box");
var submit = document.getElementById("sub");
var list = document.getElementById("list");
var here = document.getElementById("main");

submit.addEventListener('click', function(){
    var value = input.value ;
    console.log(value);
    printFizzBuzz(value)
    if(typeof value === "string"){
      here.innerHTML= "Please type a number";
    }
    input.value = "";
})

function printFizzBuzz(n){
    list.innerHTML = "";
for (let i = 1; i < n; i = i + 1) {
  if (i % 15 === 0) {
    list.innerHTML+= "<li>"+"fizzbuzz"+"</li>";
  } else if (i % 5 === 0) {
    list.innerHTML+="<li>"+"buzz"+"</li>";
  } else if (i % 3 === 0) {
    list.innerHTML+="<li>"+"fizz"+"</li>";
  } else {
    list.innerHTML+= "<li>"+i+"</li>";
  }
}}