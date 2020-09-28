
import {gsap} from "gsap";
//import {boxSpeed} from "./animationSpeed.js"

export function redBoxAnimation(){

    var tl = gsap.timeline();
    tl.from(".red-box",{duration:3,x:-400});

    return tl;

}
