let div = document.createElement('div');
let div2 = document.createElement('div');
let monDiv1 = document.createElement('div');
let monDiv2 = document.createElement('div');
let monDiv3 = document.createElement('div');
let monDiv4 = document.createElement('div');
let a = $("a");
document.body.appendChild(div);
document.body.appendChild(div2);

div2.appendChild(monDiv1);
div2.appendChild(monDiv2);
div2.appendChild(monDiv3);
div2.appendChild(monDiv4);
div.id = "monDiv";

let monDiv = $('#monDiv').html("Hello World !");
a.attr("href", "hello");

