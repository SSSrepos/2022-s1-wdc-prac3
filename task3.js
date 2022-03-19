let mouseInCount = 0//  set variable for counting the # of times mouse has entered blue div
const mCountDiv = document.getElementById('mcount')//   select the div
mCountDiv.onmouseenter = function () { //    upon mouse entering the div, deploy functiom
  mouseInCount++;                     //increment counter
  mCountDiv.innerHTML = mouseInCount; //display counter in blue div
}


//post submit function -- has color, number of posts considered
const date = new Date();

let postButton = document.getElementById("postButton");

postButton.onclick = function createPost(){

    //attach child (or children if numeric input says more than 1) to parent div element
    let numberOfPosts = document.getElementById("numOfPosts").value;
    for(let i = 0; i < numberOfPosts; i++){

        let parent = document.getElementById('posts');

        //create variables for values to be used later
        let postText = document.getElementsByTagName('textarea')[0].value;
        let localDate = date.toLocaleString();

        //create child <p> element
        let postTime = document.createElement('p');
        postTime.className = "post-time";
        let postContent = document.createElement('p');
        postContent.className = "post-content";

        //set post time fontweight and color
        postTime.style.color = "grey";
        postTime.style.fontWeight = "bold";

        //check if color radio buttons are clicked
        let radioColorOptions = document.getElementsByName("color");
        if(radioColorOptions[0].checked){
            postContent.style.color = "blue";
        }else if(radioColorOptions[1].checked){
            postContent.style.color = "red";
        }

        //append and paragraph
        parent.appendChild(postTime);
        parent.appendChild(postContent);
        postContent.innerText = postText;
        postTime.innerText = localDate;
    }
}

/* main div hide and unhide function
*/
let menuButton = document.getElementsByClassName("right")[0]; //menu button - 0; back button - 1;
let backButton = document.getElementsByClassName("right")[1];
let mainDiv = document.getElementById("main");
let menuDiv = document.getElementById("menu");
menuButton.onclick = function hideMainDiv(){
    mainDiv.style.display = "none";
    menuDiv.style.display = "inline";
}
backButton.onclick = function revealMainDiv(){
    mainDiv.style.display = "inline";
    menuDiv.style.display = "none";
}
