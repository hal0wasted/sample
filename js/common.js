var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("article button");

function vidFade() {
    vid.classList.add("stopfade");
}

vid.addEventListener('ended', function() {
    // only functional if "loop" is removed 
    vid.pause();
    // to capture IE10
    vidFade();
});

// Js only for drag the articles
$(function() {
	$( "article" ).draggable();
});

