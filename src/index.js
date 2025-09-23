import "./styles.css";
import { HomeContent } from "./home.js";
import { MenuContent } from "./menu.js";
import { AboutContent } from "./about.js";


// just using a class to bundle my code into something
class Script {
    constructor() {
        // start on home content
        new HomeContent();

        const homeBtn = document.querySelector("#home-btn");
        homeBtn.addEventListener("click", openHome);

        const menuBtn = document.querySelector("#menu-btn");
        menuBtn.addEventListener("click", openMenu);

        const aboutBtn = document.querySelector("#about-btn");
        aboutBtn.addEventListener("click", openAbout);

        function openHome() {
            new HomeContent();
        }
        function openMenu() {
            new MenuContent();
        }
        function openAbout() {
            new AboutContent();
        }
    }
}

// just runs the constructor
new Script();
