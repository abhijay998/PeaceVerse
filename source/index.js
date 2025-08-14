import { Homep } from "./home.js";
import { Loginpp } from "./Login.js";
import { anim } from "./anim/gsapf.js";
import { Goalsp } from "./goals.js";
import { lcScrol } from "./anim/Locomotive Scroll/locomtion.js";
import { Handler } from "../lib/htmlHandler.js";
import { PeaceOfMindp } from "./PeaceOfMind.js";
import { Aboutp } from "./about.js";
import { yingYangp } from "./yingYang.js";
import { Qoutes } from "./qoutes.js";
import { warsp } from "./wars.js";

AddTailwindLib(
    function () {
        AddMaterial3Lib();
        webx.Navigate({
            animate: false,
            Page: App.homep(), 
            OnNavigation: function () {
                Handler.RendererAccountHandler.Inspection.Animation.Render();
                anim.animationH();
                lcScrol.scrollLocomotion();
            }
        });
    }
);

export let App = {
    homep: () => { return (Homep()) },
    loginp: () => { return (Loginpp()) },
    goalsp: () => { return (Goalsp()) },
    peaceMindp: () => { return (PeaceOfMindp()) },
    aboutUsp: () => { return (Aboutp()) },
    yingyangp: () => { return (yingYangp()) },
    qoutesp: () => { return (Qoutes()) },
    warsp: () => { return (warsp()) }
}

/* 

    To THE PERSON READING THIS CODE, I am Abhijay 
    one of the developers of the website
    if you are intrested in knowing about the tech stacks we used 
    the here it is - 

    1) JS CSS HTML the basics first
    2) GSAP - animate
    3) Locomotive.js + lenis.js - scroll behavior
    4) Tialwind CSS - for the style
    5) Webx.js - the dynamic + development webx is library made by me my self
    // check webx on github https://github.com/abhijay998/webx.js-
    6) Material Design 3 by google - (this is a web component lib by google for android but I added it into the webx.js for web),
    7) Three.js -> 3 demesions applied
    8) spline => tool used for building the 3d models

*/
