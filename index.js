
function getRandom(){
    // returns random number between 1 and 6
    var x = Math.random() * 6 ;
    x =  Math.floor(x) +1 ;
    return x;
}

//num and image path array
var num = [getRandom() , getRandom()];
var imgpath = ["images\\dice" + num[0] + ".png" ,"images\\dice" + num[1] + ".png" ]   ;

var imgs = document.querySelectorAll("img");

//changing image 
imgs[0].setAttribute( "src" , imgpath[0] );
imgs[1].setAttribute( "src" , imgpath[1] );


// changing heading
var heading = document.querySelector("h1");

if ( num[0] > num[1] ){
    heading.textContent = "Player 1 Wins !"
}
else if ( num[0]  < num[1] ){
    heading.textContent = "Player 2 Wins !"
}
else{
    heading.textContent = "Draw !"
}

