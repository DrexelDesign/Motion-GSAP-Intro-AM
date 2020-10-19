import {gsap} from "gsap";

const toggleTL = gsap.timeline();

toggleTL.to("#background",{duration: 0.5, fill:"#f61bfe"},"toggle")
        .to("#toggle",{duration: 0.5, fill:"#fff"},"toggle");

export function toggleAnimation(){
    return toggleTL;
}