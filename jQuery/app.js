//Intro


// Create a page that is using the jQuery library
// Print ‘Hello, world!’ in console when DOM loads
$( document ).ready(function sayHello() {
    console.log("Hello world");
});

//Selecting


//Select the first element of the list and give it a bottom border
//1. 
//$("li:first").css("border-bottom", "2px solid rgb(68, 107, 68)")
//2.
$("li:first").addClass("bottomBorder");


//Select all list elements and transform their text to uppercase
//1.
//$("li").css("text-transform","uppercase");
//2.
$("li").each(function(index,val){
    var upper=$(val).text().toUpperCase();
    $("li:nth-child(  " + (index+1) + ")"  ).text(upper);
});


//Select active element of the list and change its font color
//1.
//$('li.active').css("color","blue");
//2.
$("li").hover(function () {
    $(".active").removeClass("active");
    $(this).addClass("active");
});


//Find the middle one and change its background color
//one mid element:
var last
$("li").each(function(index,val){
    last=index;
});
var mid=(last+2)/2
$("li:nth-child(  " + mid + ")" ).css("background-color","rgb(20,120,200)")
//all mid elements:
//$('li:not(:first-child):not(:last-child)').css('background-color', 'rgb(20,120,200)');


//Inserting elements

$( document ).ready(function () {

    var arrOfImgLinks=[];
    arrOfImgLinks.push("./im1.jpg");
    arrOfImgLinks.push("./im2.jpg");
    arrOfImgLinks.push("./im3.jpg");
    arrOfImgLinks.push("./im4.jpg");
    arrOfImgLinks.push("./im5.jpg");
    arrOfImgLinks.push("./im6.jpg");
        

    $(arrOfImgLinks).each(function(index,element){
        var createImg=$("<a><img><a>");
        $("ul").after(createImg);
        $("a:first>img").attr("src",arrOfImgLinks[index])
        $("a:first").attr("href",arrOfImgLinks[index])

        $("a:first").addClass("magnific")
    });

    $("a:first").before("<h1>Amazing Gallery</h1>");
    $("h1").css({
        "display":"block",
        "margin":"10px",
        "color":"red"
    })

    $( "a>img" ).each(function( index, element ) {
        
        var widthPx =  Math.random() * (250 - 90) + 130;     
        $( element ).css("width", widthPx + "px")     
       
        if ( widthPx < 200 ) {   
            $( this ).css( "border" , "5px solid green" );
            return true          
        }else{
            return false
        }   
    });   
  
	$('.magnific').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

    
});

