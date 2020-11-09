import {gsap} from "gsap";
import {GSDevTools} from "gsap/GSDevTools";

import {backgroundAnimation} from "./background/background.js";
import {foregroundAnimation} from "./foreground/foreground.js";
import {skyAnimation} from "./background/sky.js";
//import {cloudAnimation} from "./background/sky.js";

import {batOneAnimation} from "./foreground/bats.js";
import {batFourAnimation} from "./foreground/bats.js";
import {batEyesAnimation} from "./foreground/bats.js";

import {leftWebAnimation } from "./foreground/webs.js";
import {rightWebAnimation } from "./foreground/webs.js";

gsap.registerPlugin(GSDevTools);

// playClouds
//cloudAnimation();


// make bat one fly
batOneAnimation();

// make bat 4 fly around
batFourAnimation();

const mainTL = gsap.timeline();

mainTL.add(backgroundAnimation(),"startSpooky")
      .add(skyAnimation(),"startSpooky")
      .add(foregroundAnimation(),"startSpooky")
      .add(batEyesAnimation(),"-=3")
      .add(leftWebAnimation(),"webs")
      .add(rightWebAnimation(),"webs");

//instantiate GSDevTools with default settings
GSDevTools.create();
