import eevee from "../images/drinks/Eevee_Latte.png"

const menuPage = () => {
    const contSelector = document.querySelector("#container");
    const itemCont = document.createElement("div");
    itemCont.id = "itemCont";
    
    contSelector.appendChild(itemCont);

    const item = document.createElement("div");
    item.id = "item";

    const card_cont = document.createElement("ul");
    const card = document.createElement("li");

    const img = document.createElement("img");
    img.src = eevee;

    card.appendChild(img);
    card_cont.appendChild(card);
    itemCont.appendChild(item);
    item.append(card_cont);
    
    
}

export {menuPage};