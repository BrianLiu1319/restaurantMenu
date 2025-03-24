import eevee from "../images/drinks/Eevee_Latte.png"

const menuPage = () => {
    const contSelector = document.querySelector("#container");

    const imgElement = document.createElement("img");
    imgElement.src = eevee;

    contSelector.appendChild(imgElement);
}

export {menuPage};