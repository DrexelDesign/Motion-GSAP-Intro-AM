import {gsap} from "gsap";

gsap.set("#mask",{transformOrigin: "center"});

const iceCreamTL = gsap.timeline();
iceCreamTL.to("#mask",{duration:3, scale:4}, "iceCreamGo")
            .from("#ice-cream",{duration:3, y:400, ease:"none"}, "iceCreamGo")
            .to("#ice-cream",{duration:3, y:-400, ease:"none"},"iceCreamGo");

        

export function iceCreamAnimation(){
    return iceCreamTL;
}

