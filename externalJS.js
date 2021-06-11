function sayHello(){
    console.log("HELLO WORLD!");
}

function windowNavigator(){
    console.log(window.navigator.appCodeName);
    console.log(window.navigator.appVersion);
    console.log(window.navigator.appName);
}
windowNavigator();

function isOnline() {
    if (window.navigator.onLine) {
        console.log("online");
    } else {
        console.log("offline");
    }
}
isOnline();

function winScreen() {
    console.log(window.screen.availHeight);
    console.log(window.screen.availWidth);
    console.log(window.screen.height);
}
winScreen();

function URLprintOut(){
    console.log(window.location.href);
    console.log(window.location.hostname);
    console.log(window.location.protocol);
    console.log(window.location.search);
}
URLprintOut();

function reloading(){
  return window.location.reload();
}

function redirectToWebsite(){
    window.location.replace("https://www.wikipedia.org/")
}

function storeData(){
    localStorage.setItem('firstName', 'Jovana');
    localStorage.setItem('lastName', 'Obradovic'); 
}
storeData();

function read(data){
    var result=localStorage.getItem(data);
    if(!data || result===null){
        return "There is no data"
    }
    return result;
}
// read("firstName");
// remove("firstName");
// read("firstName");

function remove(item){
    localStorage.removeItem(item);
}

function navBack(){
    window.history.back();
    window.history.back();
}

function sayHi () {
    alert("Hi");
    var say=prompt("Say something...");
    var confirmation=confirm("We will submit this answer now:" + say);
    if(confirmation){
        alert("Success");
    }
}
    
function randomArray(){
    var arr=[];
    for(var i=0; i<10; i++){
        arr[i]=49*Math.random() + 1;
    }
    return arr;
}
    var newArray=randomArray();
    console.log(newArray);
    
function roundElementsOfArray(arr){   // ovde nesto nije dobro
    var a=arr.forEach(function(elem){
        elem.toFixed(2)
    })
    return a;
}
    console.log(roundElementsOfArray(newArray));
    
function floorArr(array){
    var a=array.forEach(function(elem){
        Math.round(elem);
    })
    return a;
}
    console.log(floorArr(newArray));
    
function biggest(arr){
    var max = arr. reduce(function(a, b) {
        return Math. max(a, b);
    })
    return max;
}







