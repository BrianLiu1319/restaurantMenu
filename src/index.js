import "./style/style.css";

import { homePage } from "./pages/home.js";
import { menuPage } from "./pages/menu.js";
import { aboutPage } from "./pages/about.js";

import github from "./images/github.png";
import pika from "./images/Pikachu.png";


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
    githubLink.appendChild(githubImg);
    footDiv.appendChild(githubLink);
};

const pikachuCorner = () => {
    const bodySelector = document.querySelector("#footer")
    const pikachuDiv = document.createElement("div");
    const pikachu = document.createElement("img");

    pikachuDiv.id = "pikachuDiv";
    pikachu.src = pika;
    pikachu.id = "pikachu";

    const body = document.documentElement

    body.addEventListener('mousemove', (e) => {
      const x = e.clientX,
            y = e.clientY;
      pikachu.style.transform = `translate(${-x / 250}px,${-y / 300}px)`;
    });

    pikachuDiv.appendChild(pikachu);
    bodySelector.appendChild(pikachuDiv);



};

createHeader();
createContainer();
createFooter();

pikachuCorner();

homePage();

/**
 *
 * How we want to load a page
 *
 * Click Button (home about menu)
 * Delete Children within context
 * Load page within context
 */
