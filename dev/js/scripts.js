import {gsap} from "gsap";
import {GSDevTools} from "gsap/GSDevTools";

import {backgroundAnimation} from "./background/background.js";
import {foregroundAnimation} from "./foreground/foreground.js";
import {skyAnimation} from "./background/sky.js";
//import {catAnimation} from "./foreground/cat.js";
//import {cloudAnimation} from "./background/sky.js";

import {batFourAnimation} from "./foreground/bat.js";

gsap.registerPlugin(GSDevTools);

// playClouds
//cloudAnimation();

// make bat 4 fly around
batFourAnimation();

const mainTL = gsap.timeline();

mainTL.add(backgroundAnimation(),"startSpooky")
      .add(skyAnimation(),"startSpooky")
      .add(foregroundAnimation(),"startSpooky");

//instantiate GSDevTools with default settings
GSDevTools.create();
