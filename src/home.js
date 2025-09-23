export const HomeContent = class HomeContent {
    
    constructor() {
        const contentDiv = document.querySelector("#content");
        
        // erase current elements in contentDiv
        contentDiv.textContent = "";

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("title");
        titleDiv.textContent = "Pho Noodle House";

        const summaryDiv = document.createElement("div");
        summaryDiv.setAttribute("id", "summary");
        summaryDiv.textContent = "High quality Vietnamese Pho at affordable prices!";

        const hoursDiv = document.createElement("div");
        hoursDiv.setAttribute("id", "hours");
        hoursDiv.textContent = "Open weekdays from 11:00 am to 7:00 pm";

        const addressDiv = document.createElement("div");
        addressDiv.setAttribute("id", "address");
        addressDiv.textContent = "Find us at 12345 Ohvayonder Rd., Richmond, VA";

        
        contentDiv.appendChild(titleDiv);
        contentDiv.appendChild(summaryDiv);
        contentDiv.appendChild(hoursDiv);
        contentDiv.appendChild(addressDiv);
    }
};
