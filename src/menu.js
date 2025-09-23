export const MenuContent = class MenuContent {
    
    constructor() {
        const contentDiv = document.querySelector("#content");
        
        // erase current elements in contentDiv
        contentDiv.textContent = "";

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("title");
        titleDiv.textContent = "Menu";

        const noodleDiv = document.createElement("div");
        noodleDiv.classList.add("subheader");
        noodleDiv.textContent = "Noodles";

        const beefPhoDiv = document.createElement("div");
        beefPhoDiv.setAttribute("id", "beef-pho");
        beefPhoDiv.textContent = "Beef Pho: $16.99";

        const chickenPhoDiv = document.createElement("div");
        chickenPhoDiv.setAttribute("id", "chicken-pho");
        chickenPhoDiv.textContent = "Chicken Pho: $14.99";

        const drinkDiv = document.createElement("div");
        drinkDiv.classList.add("subheader");
        drinkDiv.textContent = "Drinks";

        const waterDiv = document.createElement("div");
        waterDiv.setAttribute("id", "water");
        waterDiv.textContent = "Water: Free with meal";

        const jasmineTeaDiv = document.createElement("div");
        jasmineTeaDiv.setAttribute("id", "jasmine-tea");
        jasmineTeaDiv.textContent = "Jasmine Tea: $4.99";
        

        contentDiv.appendChild(titleDiv);
        contentDiv.appendChild(noodleDiv);
        contentDiv.appendChild(beefPhoDiv);
        contentDiv.appendChild(chickenPhoDiv);
        contentDiv.appendChild(drinkDiv);
        contentDiv.appendChild(waterDiv);
        contentDiv.appendChild(jasmineTeaDiv);
    }
};
