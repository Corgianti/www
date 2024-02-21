const divNowy = document.getElementById("divNowy");
var x = 0;

setInterval(() => {
    x += 10;
    divNowy.style.left = x + "px";
}, 33);