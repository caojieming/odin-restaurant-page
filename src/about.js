export const AboutContent = class AboutContent {
    
    constructor() {
        const contentDiv = document.querySelector("#content");

        // erase current elements in contentDiv
        contentDiv.textContent = "";
        
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("title");
        titleDiv.textContent = "About";

        const aboutDiv = document.createElement("div");
        aboutDiv.setAttribute("id", "about");
        aboutDiv.textContent = "We are a totally legitamate establishment that is totally not just a quickly slapped together fictional restaurant for the sake of webpack practice.";


        contentDiv.appendChild(titleDiv);
        contentDiv.appendChild(aboutDiv);
    }
};
