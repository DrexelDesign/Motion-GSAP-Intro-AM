import {gsap} from "gsap";

const foregroundTL = gsap.timeline();

export function foregroundAnimation(){

    foregroundTL.from("#back",{duration: 3, scale:6, y:1000})
                .from("#middle",{duration: 2, scale:6, y:1000},"-=1.5");

    return foregroundTL;
}