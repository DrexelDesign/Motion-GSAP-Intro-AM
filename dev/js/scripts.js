import {gsap} from "gsap";



var audio = document.getElementById("audio");


// this will play the music on page load
playMusic();

// this will play the music after the animation is complete

// gsap.to(".red-box",{duration:2,x:400, onComplete: playMusic});

function playMusic(){
    audio.play();
}