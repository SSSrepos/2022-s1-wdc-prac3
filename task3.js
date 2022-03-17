var mouseInCount = 0;
const mCountDiv = document.getElementById("mcount"); 
mCountDiv.onmouseenter = function(){
    mouseInCount++;
    mCountDiv.innerHTML = mouseInCount; 
}
