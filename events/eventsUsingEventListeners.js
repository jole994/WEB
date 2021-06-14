var playerNode=document.querySelector("img");
var field=document.querySelector(".footbalField");
var fieldClickFUNC=function(e){
var x=e.clientX-90;
var y=e.clientY-50;
if(clickHandler===fieldClickFUNC){
    var style="top:" + y + "px; left:" + x + "px;";
        playerNode.setAttribute("style",style);
}
}
var clickHandler=fieldClickFUNC;

var buttonNode=document.querySelector(".buttonOnOff");
var buttonHandler=function(){
    if(clickHandler===fieldClickFUNC){
        clickHandler=0;
        console.log(clickHandler)
    }else{
        clickHandler=fieldClickFUNC;
        console.log(clickHandler)
    }
}
buttonNode.addEventListener("click",buttonHandler);
field.addEventListener("click",clickHandler);



