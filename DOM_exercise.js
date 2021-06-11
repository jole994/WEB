//Selecting One/Multiple Elements

function changeBackgroundSecondList(){
    document.querySelector('.second').className = "changeColour"
}
changeBackgroundSecondList();


function setBackgroundAllLI(){
    var x = document.getElementsByTagName("li");
    for (var i = 0; i < x.length; i++) {
        x[i].className = "blueClass";
    }
}
//setBackgroundAllLI();

function SelectLIofLastUL(){
    var x=document.getElementsByTagName("ul")[2].getElementsByTagName("li");
    for (var i = 0; i < x.length; i++) {
        x[i].className = "thirdList";
    }
}
SelectLIofLastUL();

//Traversing

function changeActiveElement(){
    var active=document.querySelector('.active');
    //changing to first elem od first ul:
    active.parentElement.parentElement.previousElementSibling.
    previousElementSibling.firstElementChild.firstElementChild.className="active";
    //delete default active element:
    active.classList.remove("active");
}
changeActiveElement();


//Access/Update Text Node
function showAlert () {
    var alertText = document.querySelector('.updateTxtNode > :first-child').textContent;
    alert(alertText);
}
//showAlert ();



//changeLastLI("jovana");

function changeLastLI(inputTxt){
    var lastOne=document.querySelector('.updateTxtNode > :last-child');
    lastOne.textContent=inputTxt;
}


//InnerHTML
function createdByInnerHTMl(arr){
    var titleInnerHTML=document.querySelector(".innerHTML");
    var buildHTML="<select name='fruits' id='fruits'>";
    for(var i=0; i<arr.length; i++){
        buildHTML+="<option value='" + arr[i] + "'>"+ arr[i] +"</option>";
    }
    buildHTML+="</select>";
    titleInnerHTML.nextElementSibling.innerHTML=buildHTML;
}
createdByInnerHTMl(["bananas","apples","pears","melon"]);



function createdByDOMmanipulation(arr){

var newDiv= document.createElement('div');
var newSelect= document.createElement('select');


for(var i=0; i<arr.length; i++){
    var newOption= document.createElement('option');
    var newText = document.createTextNode(arr[i]);
    newOption.appendChild(newText);
    newSelect.appendChild(newOption);
}
newDiv.appendChild(newSelect);
document.body.appendChild(newDiv);

}
createdByDOMmanipulation(["vine","milk","water","beer","tea","coffe"]);