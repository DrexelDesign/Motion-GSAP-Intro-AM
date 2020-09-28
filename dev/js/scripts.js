//import * as Demo from './demo.js';

import {gsap} from "gsap";

import {redBoxAnimation} from "./redBox.js"
import {blueBoxAnimation} from "./blueBox.js"
import {orangeBoxAnimation} from "./orangeBox.js"

//console.log(Demo);

const mainTL = gsap.timeline({paused:true});

    mainTL.add(redBoxAnimation())
        //.addLabel("orange")
        .add(orangeBoxAnimation())
        //.addPause()
        .add(blueBoxAnimation(),"-=1")
        //.seek("orange")
        .play();

