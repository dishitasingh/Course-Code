console.log('hhh');
var blah = document.getElementById("button");
blah.setAttribute("onclick", list);
function list() {
  var ul = document.getElementById("listArea");
  var message = document.getElementById("input").value;
  var li = document.createElement("li");
  var messageNode = document.createTextNode(message);

  li.appendChild(messageNode);

  li.style.backgroundColor = "rgba(241, 28, 28, 0.5)";

  var button = document.createElement("button");
  button.innerHTML = "<i class='fa fa-check' aria-hidden='true'></i>";
  button.setAttribute("id", "box");
  button.style.float = "left";
  button.style.backgroundColor = "transparent";
  button.setAttribute(
    "onclick",
    "this.parentElement.style.backgroundColor='rgba(69, 221, 48, 0.753)';this.parentElement.style.textDecoration='line-through'"
  );

  var button2 = document.createElement("button");
  button2.innerHTML = "<i class='fa fa-trash' aria-hidden='true'></i>";
  button2.style.float = "right";
  button2.style.fontSize = "20px";
  button2.style.marginRight = "0";
  button2.setAttribute("id", "trash");
  button2.setAttribute("onclick", "this.parentElement.style.display='none'");

  var button3 = document.createElement("button");
  button3.innerHTML = "<i class='fas fa-chevron-up'></i>";
  button3.style.float = "right";
  button3.setAttribute("id", "up");
  button3.setAttribute(
    "onclick",
    "this.parentElement.parentElement.insertBefore(this.parentElement, this.parentElement.previousElementSibling);"
  );

  li.append(button2);
  li.appendChild(button3);
  li.appendChild(button);
  ul.appendChild(li);
  document.getElementById("input").value = "";
}

var d = new Date();
var date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
document.getElementById("demo").innerHTML = date.toString();

var day = d.getDay();
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday"
];
document.getElementById("demo").innerHTML =
  daylist[day] + " , " + date.toString();
