import gsap from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { flamesAnimation } from "./rocket.js";
import { rocketAnimation } from "./rocket.js";

gsap.registerPlugin(GSDevTools);

flamesAnimation();

const mainTL = gsap.timeline();
mainTL.add(rocketAnimation());

//instantiate GSDevTools with default settings
//GSDevTools.create();
