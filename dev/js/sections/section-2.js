import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2TL = gsap.timeline();

section2TL.from("#section-2-first img",{duration: 0.5, alpha:0, rotation:180})
        .from("#section-2-first h1",{duration: 0.5, alpha:0, x: -300})
        .from("#section-2-first h4",{duration: 0.5, alpha:0, x: 300})
        .from("#section-2-middle",{duration: 0.5, alpha:0, x: -300})
        .from("#section-2-last",{duration: 10, alpha:0, x: 300});


export function section2Animation(){
    ScrollTrigger.create({

        markers: true,
        animation: section2TL,
        toggleActions: "play none none none",
        trigger: "#section-2",
        start:"top, 50%",
        end: "bottom 50%"
    });
}