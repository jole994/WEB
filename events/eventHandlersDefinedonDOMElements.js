var button=document.querySelector("#submit");
button.onclick=function send(e){
    e.preventDefault();
    var txt=document.querySelector("#message").value;
    var txtArea=document.querySelector("#conversation");
    var newMessage = document.createTextNode(txt);
    var contForNewMessage=document.createElement("div");
    contForNewMessage.className="newMes";
    contForNewMessage.appendChild(newMessage);
    txtArea.appendChild(contForNewMessage);
    var txt=document.querySelector("#message").value="";
    document.getElementById('conversation').scrollTop = 9999999;
}
