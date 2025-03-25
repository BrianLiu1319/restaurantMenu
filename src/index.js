import "./style/style.css";

import { homePage } from "./pages/home.js";
import { menuPage } from "./pages/menu.js";

const contextSelector = document.querySelector("#content");

const createHeader = function () {
  const content = document.querySelector("#content");
  const header = document.createElement("header");
  const nav = document.createElement("nav");

  function createButtons() {
    const menuButton = document.createElement("button");
    const aboutButton = document.createElement("button");
    const homeButton = document.createElement("button");

    menuButton.id = "menu";
    homeButton.id = "home";
    aboutButton.id = "about";

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    header.appendChild(nav);
    content.appendChild(header);

    menuButton.textContent = "Menu";
    homeButton.textContent = "Home";
    aboutButton.textContent = "About";

    const buttonList = [homeButton, menuButton, aboutButton];

    buttonList.forEach((e) =>
      e.addEventListener("click", () => {
        const containerDiv = document.querySelector("#container");
        containerDiv.replaceChildren();
      })
    );  

    homeButton.addEventListener("click", () => {
        homePage();
    });
    
    menuButton.addEventListener("click", () => {
        menuPage();
    });

    aboutButton.addEventListener("click", () => {
        // aboutPage();
    });
  }

  createButtons();
};

const createContainer = () => {
  const contDiv = document.createElement("div");

  contDiv.setAttribute("id", "container");
  contextSelector.appendChild(contDiv);
};

const createFooter = () => {
  const footDiv = document.createElement("div");

  footDiv.setAttribute("id", "footer");
  contextSelector.appendChild(footDiv);

  footDiv.textContent = "sgdsg";
};

createHeader();
createContainer();
createFooter();

// homePage();
menuPage();



const menuButton = document.querySelector("#menu");
const homeButton = document.querySelector("#home");




/**
 *
 * How we want to load a page
 *
 * Click Button (home about menu)
 * Delete Children within context
 * Load page within context
 */
