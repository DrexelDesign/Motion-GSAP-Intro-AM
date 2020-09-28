import {gsap} from "gsap";


//TweenMax.to(".red-box",2,{x: 500, borderRadius: "50px" });
//TweenLite.to(".red-box",2,{x: 500, borderRadius: "50px" });

var redSpeed = 2;
var blueSpeed = 1.5;


// gsap call / what do you want to animate / how long should it animate / what should change?
gsap.to(".red-box",{duration: redSpeed, x: 500, borderRadius: "50px" });
gsap.to(".red-box",{duration: redSpeed, y: 500, borderRadius: "100px", delay:redSpeed });

gsap.from(".blue-box",{duration: blueSpeed, x: 300, y:300, borderRadius: "50px" });
gsap.to(".blue-box",{duration: blueSpeed, y: 100, borderRadius: "200px", delay:blueSpeed });