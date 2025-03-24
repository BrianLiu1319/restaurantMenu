import "./style/style.css";

import {funTest} from "./pages/home";

const contextSelector = document.querySelector("#content");

const createHeader = function () {
    const content = document.querySelector('#content');

    const header = document.createElement('header');
    const nav = document.createElement('nav');

    const menuButton = document.createElement('button');
    const aboutButton = document.createElement('button');
    const homeButton = document.createElement('button');

    menuButton.id = "menu";
    homeButton.id = "home";
    aboutButton.id = "about";

    nav.appendChild(homeButton)
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    header.appendChild(nav);
    content.appendChild(header);

    menuButton.textContent = "Menu";
    homeButton.textContent = "Home";
    aboutButton.textContent = "About";
}

const createContainer = () => {
    const contDiv = document.createElement("div");

    contDiv.setAttribute("id", "container");
    contextSelector.appendChild(contDiv);
}

const createFooter = () => {
    const footDiv = document.createElement("div");
    
    footDiv.setAttribute("id", "footer");
    contextSelector.appendChild(footDiv);

    footDiv.textContent = "sgdsg";
}

createHeader();
createContainer();
createFooter();


const homeButton = document.querySelector("#home");
const aboutButton = document.querySelector("#about");
const menuButton = document.querySelector("#menu");



funTest();




/**
 * 
 * How we want to load a page
 * 
 * Click Button (home about menu)
 * Delete Children within context
 * Load page within context
 */









