var button_circle = document.getElementById("circle_btn");
var button_square = document.getElementById("square_btn");
var button_triangle = document.getElementById("triangle_btn");
var circle = document.getElementById("circle");
var square = document.getElementById("square");
var triangle = document.getElementById("triangle");

button_circle.onclick = function() {
    circle.setAttribute("class", "circle");
}
button_square.onclick = function() {
    square.setAttribute("class", "square");
}
button_triangle.onclick = function() {
    triangle.setAttribute("class", "triangle");
}