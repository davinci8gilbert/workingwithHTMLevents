var topPosition = 200;
var leftPosition = 0;

function runPuppy() {
                    
    var puppy = document.getElementById("puppy");
    
   if(leftPosition <1600)
   { 
    topPosition++;   
    leftPosition+= 3;
    puppy.style.top = topPosition+"px";
    puppy.style.left = leftPosition+"px";
    }   
   else
   {
    
    clearInterval();
   }

// add if it reaches the screen end (you can check with screen.availwidth)					
}
