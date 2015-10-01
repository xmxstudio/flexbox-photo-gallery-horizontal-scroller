$(document).ready(function(){
var scrolling = false;
var scrollInt;
var scrollDirection = -1;
var scrollSpeed = 20;
    var leftgutter = $('.photos').width() / 4; //our left "gutter"
    var rightgutter = $('.photos').width()- ($('.photos').width() / 4); //our right "gutter"
    

      $('.photos').mouseleave(function(e){
          console.log('left photo gallery div');
             if(scrolling){
                 scrolling=false;
                 clearInterval(scrollInt);
             }
        });


    $('#test').click(function(){
        alert('ScrollL: ' + $('.photos').scrollLeft() + '\nWidth: ' +  $('.photos').width() );
    });


    $('.photos').mousemove(function(e){
  
        if (e.clientX < leftgutter){

            //this way we need to flip our scale.
            //e.x of  0 needs to be  100% or leftgutter.width. 
            //so we can take the remainder from subtracing e.x from the width to get the remaining
            scrollDirection=Math.floor(-(leftgutter - e.clientX) / scrollSpeed);
            if(!scrolling){
                scrolling = true;
                scrollInt = setInterval(scrollLeft, 1);
            }
        }
        if (e.clientX > rightgutter){
            scrollDirection= Math.floor((e.clientX - rightgutter) / scrollSpeed);
            if(!scrolling){

                scrolling = true;
                scrollInt = setInterval(scrollRight, 1);
            }
        }
        if (e.clientX > leftgutter && e.clientX < rightgutter){
            clearInterval(scrollInt);//this turns the scrolling off!
            scrolling = false;//gotta disable this so entering in the gutters will allow a new timerInt to be set
        }


    });


function scrollLeft(){
    $('.photos').scrollLeft($('.photos').scrollLeft() + scrollDirection)
}

function scrollRight(){
    $('.photos').scrollLeft($('.photos').scrollLeft() + scrollDirection)
}
    

    
});



