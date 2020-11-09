import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


const drawTL = gsap.timeline();


export function drawAnimation(){

    //drawTL.from("#box",{duration:2, drawSVG: "0%", ease:"none"});

    //drawTL.to("#box",{duration:2, drawSVG:"0%"});

     //drawTL.to("#box",{duration:2, drawSVG:"20% 60%"});

    //drawTL.to("#box",{duration:2, drawSVG:0});

    //drawTL.to("#box",{duration:2, drawSVG:"40% 30%"});

    //drawTL.to("#box",{duration:2, drawSVG:"-10% -90%"});

    //drawTL.from("#box",{duration:2, drawSVG:"50% 50%"});

    //drawTL.from("#box",{duration:2, drawSVG:"10% 50%"});

    drawTL.fromTo("#box",{drawSVG:"0% 10%"},{duration:2, drawSVG: "90% 100%"})
          .to("#box",{duration:2, drawSVG: "100%"});

    return drawTL;
}