var changeBCKG=function (){
   var bodyNode=document.querySelector("body");
    bodyNode.classList.toggle("whiteBCKG")
}
var handler=changeBCKG;

function deactivateButton(){
    var inputNode=document.querySelector("#yellowButton > input");
    if(inputNode.getAttribute("value")==="Turn Off"){
        handler=0;
        console.log(inputNode)
        inputNode.setAttribute("value","Turn On")
        console.log(inputNode.nodeValue)
    }else{
        handler=changeBCKG;
        inputNode.setAttribute("value","Turn Off")
    }
}
