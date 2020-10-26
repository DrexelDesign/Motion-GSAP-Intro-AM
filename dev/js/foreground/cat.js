import {gsap} from "gsap";

gsap.set(".cat-eyes",{transformOrigin: "center"});

const catTL = gsap.timeline();

export function catAnimation(){
    catTL.to(".cat-eyes",{duration: 0.25, scaleY:0, yoyo:true, repeat:1});
    return catTL;
}