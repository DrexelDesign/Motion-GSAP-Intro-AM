import {gsap} from "gsap";
import {redBoxAnimation} from "./demo.js"

const mainTL = gsap.timeline();
mainTL.add(redBoxAnimation());