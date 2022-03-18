var mouseInCount = 0;       //set variable for counting the # of times mouse has entered blue div
const mCountDiv = document.getElementById("mcount");    //select the div
mCountDiv.onmouseenter = function(){    //upon mouse entering the div, deploy functiom
    mouseInCount++;                     //increment counter
    mCountDiv.innerHTML = mouseInCount; //display counter in blue div
}

const date = new Date();


var button = document.getElementById("postButton")
button.onclick = function changeTextStyle(){  //WTF
    //
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
    //change text in element
    postContent.innerText = postText;
    postTime.innerText = localDate;
    postTime.style.color = "grey";
    postTime.style.fontWeight = "bold";
}