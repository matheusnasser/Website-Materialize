var prevScrollPos = window.pageYOffset;
window.onscroll(function(){
    var currentPos = window.pageYOffset;
    if(currentPos > prevScrollPos){
        document.getElementById('nav').style.backgroundColor = "rgba(0, 0, 0, 0.938)";
    }
    else{
        document.getElementById('nav').style.backgroundColor = "transparent";
    }
    currentPos = prevScrollPos;
})