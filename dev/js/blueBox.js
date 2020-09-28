import {gsap} from "gsap";
//import {boxSpeed} from "./animationSpeed.js"

export function blueBoxAnimation(){

    var tl = gsap.timeline();
    tl.from(".blue-box",{duration:0.5,x:-600});

    return tl;

}