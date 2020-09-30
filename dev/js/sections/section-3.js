import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section3TL = gsap.timeline();

gsap.set(".scale-left",{transformOrigin: "left"});

section3TL.from("#section-3 aside",{duration:0.5,alpha:0},"start-section3")
        .from("#section-3-container",{duration:0.5,scaleX:0},"start-section3")
        .from("#section-3-content h1",{duration:0.5,alpha:0},"start-section3-text")
        .from("#section-3-content p",{duration:0.5,alpha:0},"start-section3-text")
        .from(".bottom",{duration:0.5,scaleX:0, stagger:0.25})
        .from(".yellow-bar",{duration:0.5, scaleX:0, stagger:0.25})
        .from(".top h5",{duration:0.5, alpha:0, y:20, stagger:0.25})
        .from(".top h4",{duration:0.5, alpha:0, y:20, stagger:0.25});


export function section3Animation(){
    ScrollTrigger.create({

        markers: true,
        animation: section3TL,
        toggleActions: "restart none reverse none",
        trigger: "#section-3",
        scrub: 1,
        start:"top, 70%",
        end: "bottom 70%"
    });
}