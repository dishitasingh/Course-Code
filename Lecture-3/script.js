var list = document.getElementById("list");
var input = document.getElementById("input");
var submit = document.getElementById("submit");


submit.addEventListener('click', function () {
    var value = input.value;
    value = parseInt(value);
    printFizzBuzz(value);
})


function printFizzBuzz(n) {
    list.innerHTML = "";
    var start = new Date().getTime();
    var str = "";
    for(let i = 1; i <= n; i=i+1) {
        if(i % 15 == 0) {
            str += "<li>" + "FizzBuzz" + "</li>";
        } else if ( i % 5 == 0) {
            str += "<li>" + "Buzz" + "</li>";
        } else if ( i% 3 == 0 ){
            str += "<li>" + "Fizz" + "</li>";
        } else {
            str += "<li>" + i + "</li>";
        }
    }
    list.innerHTML = str;
    var end = new Date().getTime();
    console.log("Time taken: " + (end - start));
}