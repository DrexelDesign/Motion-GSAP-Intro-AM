import {
    gsap
} from "gsap";
import {
    MotionPathPlugin
} from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);


const batFourTL = gsap.timeline();
// Bat 4
gsap.set("#bat-4-container",{xPercent: -50, yPercent: -50, transformOrigin: "50% 50%"});

export function batFourAnimation() {

    //make bat 4 fly up and down
    batFourFLying();

    batFourTL.to("#bat-4-container", {
        duration: 10,
        motionPath: {
            path: "#bat-4-path",
            align:"#bat-4-path"
            // autoRotate: 50
        },
        repeat: 1,
        onComplete: batFourFlyAway,
        ease:"none"
        // rotation: 15
    });
}

function batFourFLying(){
    const batFourFlyingTL = gsap.timeline();
    batFourFlyingTL.fromTo("#bat-4",{y:"-=20"},{y:"+=20", duration:0.25, yoyo:true, repeat:120});
}

function batFourFlyAway(){
    batFourTL.to("#bat-4", {duration: 0.25, y:"-=100", alpha:0, scale:0.25});
}