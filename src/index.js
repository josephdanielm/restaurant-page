import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";
import { loadContactPage } from "./contact";

const contentDiv = document.getElementById('content');

// Function to switch tabs and update content
const switchTab = (tabCreator) => {
    clearContent();
    displayTab(tabCreator);
};

// Function to clear current contents
const clearContent = () => {
    contentDiv.innerHTML = '';
};

// Function to display the selected tab
const displayTab = (tabCreator) => {
    const tab = tabCreator();
    contentDiv.appendChild(tab);
};

// Event listeners for each tab
document.getElementById('homeTab').addEventListener('click', () => switchTab(loadHomePage));
document.getElementById('contactTab').addEventListener('click', () => switchTab(loadContactPage));
document.getElementById('menuTab').addEventListener('click', () => switchTab(loadMenuPage));

// Initial load - display home tab
switchTab(loadHomePage);