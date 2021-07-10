const url1="http://api.tvmaze.com/shows";


$(document).ready(()=>{
    shows();
})

const shows=( ()=>{
    $.ajax({
        url:url1,
        method:'GET',
    }).done((response)=>{
        response.sort((a,b)=>{
            return b.rating.average - a.rating.average;
        })
        let firstTopMovies=response.slice(0,50);
        
        firstTopMovies.forEach((item)=>{
            
            //create new elements
            let card=$(`<div onclick='gotToShow(${item.id})' ></div>`)
            let cardImg=$('<img>');
            let cardBody=$('<div>');
            let cardTitle=$('<h5>');
            
            //adding classes and attributes to new elements
            card.addClass('card');
            card.addClass('cardHover');
            cardImg.addClass('card-img-top');
            card.attr("style",'width: 18rem');
            cardImg.attr("src",item.image.medium);
            cardBody.addClass('card-body');
            cardTitle.addClass('card-title');
            cardTitle.text(item.name);
            
            //append elements
            cardBody.append(cardTitle);
            card.append(cardImg);
            card.append(cardBody);
            console.log(card);
            cardHolder.append(card);
        })
    }).fail(()=>{
        alert('Network Error')
    })
})