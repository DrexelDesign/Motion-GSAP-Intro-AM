import {gsap} from "gsap";

gsap.set(".to-center",{transformOrigin: "center"});
gsap.set(".to-center-bottom",{transformOrigin: "center bottom"});

const foregroundTL = gsap.timeline();

export function foregroundAnimation(){

    foregroundTL.from("#back",{duration: 3, scale:6, y:1000})
                .from("#middle",{duration: 2, scale:6, y:1000},"-=1.5")
                .from("#grass",{duration: 2, scale:6, y:1000},"-=2")
                
                // trees
                .from("#tree-back-right-cp",{duration:2, alpha:0, scale:0},"-=2")
                .from("#tree-back-left-cp",{duration:2, scale:0, alpha:0},"-=2")

                .from("#tree-middle-right-cp",{duration:2, alpha:0, scale:0},"-=1.5")
                .from("#tree-middle-left-cp",{duration:2, alpha:0, scale:0},"-=1.5")

                .from("#tree-front-right-cp",{duration:2, scale:0, alpha:0},"-=2")
                .from("#tree-front-left-cp",{duration:2, alpha:0, scale:0},"-=2")
                
                // crosses
                .from("#cross-left",{duration:0.25, scaleY:0},"-=1.5")
                .from("#cross-right",{duration:0.25, scaleY:0},"-=1");

    return foregroundTL;
}