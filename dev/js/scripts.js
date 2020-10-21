import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import {backgroundAnimation} from "./background/background.js";

const mainTL = gsap.timeline();

mainTL.add(backgroundAnimation());


//instantiate GSDevTools with default settings
GSDevTools.create();
