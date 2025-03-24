import pokeTitle from "../images/pokemonTitle.png"
const funTest = () => {
    const contSelector = document.querySelector("#container");

    const imgElement = document.createElement("img");
    imgElement.src = pokeTitle;

    contSelector.appendChild(imgElement);

}

export {funTest};

