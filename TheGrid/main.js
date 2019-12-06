var divMenu = document.getElementById("divMenu");
var divGame = document.getElementById("divGame");
var canvas = document.getElementById("myCanvas");

divMenu.style.top = "-1000px";
divMenu.style.top = 0;
divGame.style.top = "-1000px";
function btnStart(){
    divMenu.style.transition = "all 1s ease-in-out";
    divMenu.style.top = "-1000px";
    divGame.style.top = "0";
}
function btnMenu(){
    divGame.style.transition = "all 1s ease-in-out";
    divGame.style.top = "-1000px";
    divMenu.style.top = "0";
}