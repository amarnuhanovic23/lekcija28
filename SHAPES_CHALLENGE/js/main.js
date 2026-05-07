var shape1 = document.getElementById("circle_btn");
var shape2 = document.getElementById("square_btn");
var shape3 = document.getElementById("triangle_btn");
var circle = document.getElementById("circlediv");
var square = document.getElementById("squarediv");
var triangle = document.getElementById("trianglediv");

shape1.onclick = function() {
    circle.removeAttribute("class", "hide");
    circle.setAttribute("class", "first");
}
shape2.onclick = function() {
    square.removeAttribute("class", "hide");
    square.setAttribute("class", "second");
}
shape3.onclick = function() {
    triangle.removeAttribute("class", "hide");
    triangle.setAttribute("class", "third");
}

shape1.onmouseleave = function() {
    circle.removeAttribute("class", "first");
    circle.setAttribute("class", "hide");
}
shape2.onmouseleave = function() {
    square.removeAttribute("class", "second");
    square.setAttribute("class", "hide");
}
shape3.onmouseleave = function() { 
    triangle.removeAttribute("class", "third");
    triangle.setAttribute("class", "hide");
}