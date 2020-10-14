import {gsap} from "gsap";

gsap.set("#red-box",{transformOrigin: "center"});

// only here to make codeKit be quiet!
const redBoxTL = gsap.timeline();
redBoxTL.from("#red-box",{duration:1,rotation:180, x:-600, ease: "none"})
        .to("#red-box",{duration:1,rotation: -180, x:600, ease: "none"});

export function redBoxAnimation(){
    return redBoxTL;
}


