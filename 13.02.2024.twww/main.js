const divNowy = document.getElementById("divNowy");
var x = 0;

setInterval(() => {
    x++;
    divNowy.style.left = x + "px";
}, 33);