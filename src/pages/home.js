import "../style/homeStyle.css";

import pokeTitle from "../images/pokemonTitle.png";

const homePage = () => {
  const contSelector = document.querySelector("#container");
  const itemsSelector = document.createElement("div");
  itemsSelector.id = "items";
  
  contSelector.appendChild(itemsSelector);

  const imgElement = document.createElement("img");
  imgElement.src = pokeTitle;
  imgElement.alt = "pokemon cafe";

  const descDiv = document.createElement("div");

  itemsSelector.appendChild(imgElement);
  itemsSelector.appendChild(descDiv);

  descDiv.id = "description";

  descDiv.textContent =
    "Welcome to the Pokemon Cafe! Enjoy original sweets, \
    drinks and meals inspired by Pokemon while surrounded by \
    your favorite Pokemon!";
};

export { homePage };
