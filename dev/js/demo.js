import {gsap} from "gsap";

const iceCreamTL = gsap.timeline();
iceCreamTL.from("#ice-cream-cp",{duration:3, y:-200,ease: "bounce.out"}, "iceCreamGo")
        .from("#ice-cream",{duration:3, y:400, ease:"none"}, "iceCreamGo")
        .to("#ice-cream",{duration:3, y:-400, ease:"none"},"iceCreamGo");

export function iceCreamAnimation(){
    return iceCreamTL;
}

