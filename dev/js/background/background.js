import {gsap} from "gsap";

gsap.set("#moon-rings",{transformOrigin: "center"});
gsap.set(".rings",{transformOrigin: "center"});

var backgroundTL = gsap.timeline();

export function backgroundAnimation(){
    backgroundTL.from("#moon-rings",{duration: 3.5, y: 1000})
                .from(".rings",{duration: 1, scale:0, stagger:-.5, ease: "back.out(1.7)"},"-=2")
    return backgroundTL;
}