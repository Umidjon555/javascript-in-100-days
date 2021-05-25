const body = document.getElementsByTagName("body")[0];

const button = document.getElementById("btn");

const colors = ["green", "blue", "red", "tomato", "aqua"];

button.addEventListener("click", change_color);

function change_color(){
    let random = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[random];
}