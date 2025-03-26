import "./style/style.css";

import { homePage } from "./pages/home.js";
import { menuPage } from "./pages/menu.js";
import { aboutPage } from "./pages/about.js";

import github from "./images/github.png";



const contextSelector = document.querySelector("#content");

const createHeader = function () {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    const nav = document.createElement("nav");

    function createButtons() {
        const menuButton = document.createElement("button");
        const aboutButton = document.createElement("button");
        const homeButton = document.createElement("button");

        menuButton.id = "menuButton";
        homeButton.id = "homeButton";
        aboutButton.id = "aboutButton";

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
            const containerDiv = document.querySelector("#container");
            containerDiv.setAttribute("class", "about");

            aboutPage();
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

    footDiv.textContent = "Made with ❤︎";

    const githubLink = document.createElement("a");
    const githubImg = document.createElement("img");
    githubImg.src = github;
    githubImg.id = "github";
    githubLink.href = "https://github.com/BrianLiu1319/";
    githubLink.appendChild(githubImg)
    footDiv.appendChild(githubLink);

};

createHeader();
createContainer();
createFooter();

homePage();



/**
 *
 * How we want to load a page
 *
 * Click Button (home about menu)
 * Delete Children within context
 * Load page within context
 */
