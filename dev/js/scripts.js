import {gsap} from "gsap";
import {GSDevTools} from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import {backgroundAnimation} from "./background/background.js";
import {foregroundAnimation} from "./foreground/foreground.js"

const mainTL = gsap.timeline();

mainTL.add(backgroundAnimation())
      .add(foregroundAnimation());


//instantiate GSDevTools with default settings
GSDevTools.create();
