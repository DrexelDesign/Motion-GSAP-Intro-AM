import gsap from "gsap";

const skyTL = gsap.timeline();


export function skyAnimation(){
    skyTL.from(".stars",{duration: 0.5, alpha:0, stagger: 0.25});

    return skyTL;
}

const cloudsTL = gsap.timeline();

export function cloudAnimation(){

    cloudsTL.from("#cloud-1",{duration: 300, x:1000},"moveClouds")
    .from("#cloud-2",{duration: 300, x:500},"moveClouds")
    return cloudsTL
}