import {gsap} from "gsap";
import {boxSpeed} from "./animationSpeed.js"

export function orangeBoxAnimation(){

    var tl = gsap.timeline();
    tl.to(".orange-box",{duration:boxSpeed,x:400});

    return tl;

}