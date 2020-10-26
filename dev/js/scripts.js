import {gsap} from "gsap";
import {GSDevTools} from "gsap/GSDevTools";

import {backgroundAnimation} from "./background/background.js";
import {foregroundAnimation} from "./foreground/foreground.js";
import {skyAnimation} from "./background/sky.js";
import {catAnimation} from "./foreground/cat.js";
//import {cloudAnimation} from "./background/sky.js";

gsap.registerPlugin(GSDevTools);

// playClouds
//cloudAnimation();

const mainTL = gsap.timeline();

mainTL.add(backgroundAnimation(),"startSpooky")
      .add(skyAnimation(),"startSpooky")
      .add(foregroundAnimation(),"startSpooky")
      .add(catAnimation());

//instantiate GSDevTools with default settings
GSDevTools.create();
