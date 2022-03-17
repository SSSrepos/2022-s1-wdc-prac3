const d = new Date()
document.getElementsByTagName('button')[0].onclick = function () { //   find all button tags (of which there is only one) and deploy function on click
  document.getElementById('current_time').innerHTML = d //  change HTML to date object created
}
