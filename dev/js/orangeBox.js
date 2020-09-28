import {gsap} from "gsap";
import {boxSpeed} from "./animationSpeed.js"

export function orangeBoxAnimation(){

    var tl = gsap.timeline();
    tl.from(".orange-box",{duration:boxSpeed,x:-800});

    return tl;

}