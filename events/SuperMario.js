var background = document.documentElement;
var image=document.querySelector("img");

var handlerFunction=function(){
    console.log(image.getAttribute("alt"));
    if(image.getAttribute("alt")==="superMarioPic"){
        image.setAttribute("alt")="superMarioGIF";
        image.setAttribute("src")="./mario_running.gif";
    }else{
        image.setAttribute("alt")="superMarioPic";
        image.setAttribute("src")="./mario.png";
    }
}
image.addEventListener("click",handlerFunction);