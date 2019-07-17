$(document).ready(function(){
    $('.sidenav').sidenav();
  });
        


var prevSrollPos = window.pageYOffset;
window.onscroll = function(){
  var currentScrollPos = window.pageYOffset;
  if(currentScrollPos > prevSrollPos){
    document.getElementById('nav').style.backgroundColor = "rgba(0, 0, 0, 0.938)";
  }
  else{
    document.getElementById('nav').style.backgroundColor = "transparent";
  }
  prevSrollPos = currentScrollPos;
}

