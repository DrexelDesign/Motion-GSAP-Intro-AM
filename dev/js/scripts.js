import {gsap} from "gsap";



var audio = document.getElementById("audio");

audio.muted = true;


window.onload = function() {
    document.getElementById("audio").play();
}

gsap.to(".red-box",{duration:2,x:400, onComplete: playMusic});

// this will play the music on page load

// this will play the music after the animation is complete

// $(".red-box").click(function(){
//     
// })



function playMusic(){
    audio.play();
}