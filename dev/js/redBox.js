
import {gsap} from "gsap";
//import {boxSpeed} from "./animationSpeed.js"

export function redBoxAnimation(){

    var tl = gsap.timeline();
    tl.to(".red-box",{duration:3,x:400});

    return tl;

}
