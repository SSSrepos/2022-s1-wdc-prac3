var mouseInCount = 0;       //set variable for counting the # of times mouse has entered blue div
const mCountDiv = document.getElementById("mcount");    //select the div
mCountDiv.onmouseenter = function(){    //upon mouse entering the div, deploy functiom
    mouseInCount++;                     //increment counter
    mCountDiv.innerHTML = mouseInCount; //display counter in blue div
}

const date = new Date();


var postButton = document.getElementById("postButton")
postButton.onclick = function changeTextStyle(){ 
    //create variables for values to be used later
    let postText = document.getElementsByTagName('textarea')[0].value;
    let localDate = date.toLocaleString();
    //create child <p> element
    let postTime = document.createElement('p');
    postTime.className = "post-time";
    let postContent = document.createElement('p');
    postContent.className = "post-content"
    //attach child to parent div element
    var parent = document.getElementById('posts');
    parent.appendChild(postTime);
    parent.appendChild(postContent);
    //change text in element to be correct content and styling
    postContent.innerText = postText;
    postTime.innerText = localDate;
    postTime.style.color = "grey";
    postTime.style.fontWeight = "bold";
}

var menuButton = document.getElementsByClassName("right")[0]; //menu button - 0; back button - 1;
var backButton = document.getElementsByClassName("right")[1];
var mainDiv = document.getElementById("main");
var menuDiv = document.getElementById("menu");
menuButton.onclick = function hideMainDiv(){
    mainDiv.style.display = "none";
    menuDiv.style.display = "inline";
}
backButton.onclick = function revealMainDiv(){
    mainDiv.style.display = "inline";
    menuDiv.style.display = "none";
}