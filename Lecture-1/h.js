var list = document.getElementById('list');
var submit = document.getElementById('sub');
function printFizzBuzz () {
for(let i=1;i<1001;i=i+1){
    if(i%15===0){
        document.write("fizzbuzz");
    } else if(i%3===0){
        document.write("fizz");
    } else if(i%5===0){
        document.write("buzz");
    } else{
        document.write(i);
  }
    document.write("<br>")
}}

document.getElementById(submit).addEventListener("click", printFizzBuzz)