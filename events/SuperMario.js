var background = document.documentElement;
var moveBckg;
var image=document.querySelector("img");
var x=0;

var handlerFunction=function(){
    if(image.getAttribute("alt")==="superMarioPic"){

        moveBckg=setInterval(function(){
        background.style.backgroundPositionX= x + 'px ';
            x--;
        }, 3);

        image.setAttribute("alt","superMarioGIF")
        image.setAttribute("src","./mario_running.gif")
        image.classList.toggle("img");
    }else{   
 
        clearInterval(moveBckg);
        x=0;
        image.setAttribute("alt","superMarioPic");
        image.setAttribute("src","./mario.png");
        image.classList.toggle("img");
    }
}
document.body.addEventListener("click",handlerFunction);
