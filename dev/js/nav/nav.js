import $ from "jquery";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

var scrollItems = ["#section-1", "#section-2","#section-3","#section-5"];

export function movePage(){
    console.log("clicked");
    gsap.to(window, {duration: 1, scrollTo:{y: scrollItems[$('#nav-container button').index(this)], offsetY: 60}});
}