var handlerDocument= function(e){
    console.log(e.target.tagName);
    e.currentTarget.body.setAttribute("style", "background-color:rgba(210, 238, 160,0.7)");
    setTimeout( function(){ document.body.setAttribute("style", "background-color:white") },300)
}
document.addEventListener("click",handlerDocument)


var allImgs=document.querySelectorAll("img");
allImgs.forEach(function(item) {
    if(item.classList.contains("width300")===true){
        item.setAttribute("onclick","event.stopPropagation()")
    }
    var handlerImg=function(){
        item.classList.add("red")
        setTimeout(function(){ item.classList.remove("red")},300)  
    }
    item.addEventListener("click",handlerImg)
});

/**<body onclick="alert(`the bubbling doesn't reach here`)">

<button onclick="event.stopPropagation()">Click me</button>

</body> */