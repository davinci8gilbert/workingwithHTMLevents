function changeColor(){
    changeFontColor()

}

var fontColorArray = ["gray","slategray","darkblue","teal","maroon","black", "red", "blue", "green"];
var bgColorArray = ["azure","linen","snow","powderblue","ivory","lightpink","lightyellow"];

var curFontColor=1;
var curBgColor=1;

function changeFontColor(){
    
    curFontColor = document.querySelector('input[name="color"]:checked').value;
    if (curFontColor == "red") document.getElementById('td_text').style.color="red";
    else if (curFontColor == "blue") document.getElementById('td_text').style.color="blue";
    else  document.getElementById('td_text').style.color="green";
    
}


function changeBgColor(){
    curBgColor = document.querySelector('option:checked').value;
    if (curBgColor == "red") document.getElementById('td_text').style.backgroundColor="red";
    else if (curBgColor == "blue") document.getElementById('td_text').style.backgroundColor="blue";
    else if (curBgColor == "green")  document.getElementById('td_text').style.backgroundColor="green";
    else document.getElementById('td_text').style.backgroundColor="white";
}

function changeBg(){
    changeBgColor()
    }
