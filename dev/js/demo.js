import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");


// const morphTL = gsap.timeline();

gsap.set("#light-red-1",{alpha:0});

const monsterTL = gsap.timeline();


export function drawAnimation(){

    // morphTL.to("#blue",{duration:1, morphSVG:"#star", ease: "bounce.out"});
    // return morphTL;
    monsterTL.to("#shadow-1",{duration:1, morphSVG:"#shadow-2"})
    monsterTL.to("#dark-red-1",{duration:1, morphSVG:"#dark-red-2", fill:"#000"},"monster")
    monsterTL.to("#light-red-1",{duration:1, morphSVG:"#light-red-2", alpha:1},"monster")
    monsterTL.from("#light-red-1",{duration:1, drawSVG:"0%"},"monster")
    monsterTL.to("#right-eye-1",{duration:1, morphSVG:"#right-eye-2", fill:"#fff"},"monster")
    monsterTL.to("#left-eye-1",{duration:1, morphSVG:"#left-eye-2"},"monster")
    monsterTL.to("#mouth-1",{duration:1, morphSVG:"#mouth-2"},"monster")
    monsterTL.to("#leg-1",{duration:1, morphSVG:"#horn-2"},"monster")
    monsterTL.to("#leg-2",{duration:1, morphSVG:"#horn-2"},"monster");

    // does not work
    // monsterTL.to("#monster-1",{duration:1, morphSVG:"#monster-2"})
     return monsterTL;
}