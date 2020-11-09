import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


// web left
const leftWebTL = gsap.timeline();

export function leftWebAnimation() {

    leftWebTL.from(".web-left", {
        duration: 0.5,
        stagger: 0.25,
        drawSVG: "0"
    })

    return leftWebTL;
}


// web right
const rightWebTL = gsap.timeline();

export function rightWebAnimation(){

    rightWebTL.from(".web-right",{duration:1,stagger:0.5, drawSVG:"0"})

        return rightWebTL;
}