import {
    gsap
} from "gsap";
import {
    MotionPathPlugin
} from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

// Bat 1
gsap.set("#bat-1-container",{xPercent: -50, yPercent: -50, transformOrigin: "50% 50%"});

const batOneTL = gsap.timeline();

export function batOneAnimation() {

    // start bat 1 flying animation
    batOneFlying();

    batOneTL.to("#bat-1-container", {
        duration: 10,
        ease:"none",
        motionPath: {
            path: "#bat-1-path",
            align: "#bat-1-path"
        },
        onComplete: batOneFlyAway
    });
}

function batOneFlying(){
    const batOneFlyingTL = gsap.timeline();
    batOneFlyingTL.fromTo("#bat-1",{y:"-=10"},{y:"+=10", duration:0.25, yoyo:true, repeat:40, scale:0.95});
}

function batOneFlyAway(){
    batOneTL.to("#bat-1-container",{duration:1, scale:0, alpha:0, y:"-50"});
}


// Bat 4
const batFourTL = gsap.timeline();

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
    batFourFlyingTL.fromTo("#bat-4",{y:"-=20"},{y:"+=20", duration:0.25, yoyo:true, repeat:40});
}

function batFourFlyAway(){
    batFourTL.to("#bat-4", {duration: 0.25, y:"-=100", alpha:0, scale:0.25});
}