import card from './images/card.svg';


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

createHeader();

const homeButton = document.querySelector("#home");
const aboutButton = document.querySelector("#about");
const menuButton = document.querySelector("#menu");


homeButton.addEventListener




