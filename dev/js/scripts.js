import $ from "jquery";
import { gsap } from "gsap";
import { toggleAnimation } from './demo.js';

var toggle = false;

const mainTl = gsap.timeline({paused:true});
mainTl.add(toggleAnimation());

$("#toggle-button").on("click", function(){
    console.log("working");
    if(toggle === false){

        mainTl.play();
        toggle = true;

    }else{
        mainTl.reverse();
        toggle = false;
    }
})