import $ from "jquery";
import {section1Animation   } from "./sections/section-1.js";
import {section2Animation} from "./sections/section-2.js";
import {section3Animation} from "./sections/section-3.js";
import {movePage} from "./nav/nav.js"

// call section 1 animation function
section1Animation();
section2Animation();
section3Animation();

// listener for the main nav clicks
$(".nav-btn").on("click", movePage);

