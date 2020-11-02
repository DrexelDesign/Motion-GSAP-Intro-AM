import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

gsap.set("#rocket", {
    xPercent: -50,
    yPercent: -50,
    transformOrigin: "50% 50%",
    scale:2
    //rotation:-180
});

gsap.set(".flames",{transformOrigin:"center top"})


const rocketTL = gsap.timeline();

export function rocketAnimation() {

    //rocketTL.fromTo("#rocket",{y:"+=400"},{duration:2, y:"-300"});
    rocketTL.to("#rocket", {
        duration: 10,
        //rotation:55,
        scale:0.5,
        motionPath: {
            path: "#rocketPath",
            align:"#rocketPath",
            autoRotate: 80
        }
    });

    // MotionPathHelper.create("#rocket");

    return rocketTL;
}



const rocketFlamesTL = gsap.timeline({yoyo:true, repeat:10});

export function flamesAnimation(){
    rocketFlamesTL.to("#middle-orange",{duration:0.5, ease: "none",scale:0.75},"flames")
    .to("#middle-yellow",{duration:0.5, ease: "none",scale:0.5},"flames")
    .to("#left-orange",{duration:0.5, ease: "none",scale:0.5},"flames")
    .to("#left-yellow",{duration:0.5, ease: "none",scale:0.25},"flames")
    .to("#right-orange",{duration:0.5, ease: "none",scale:0.5},"flames")
    .to("#right-yellow",{duration:0.5, ease: "none",scale:0.25},"flames");
}

