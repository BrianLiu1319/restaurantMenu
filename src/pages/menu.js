import eeveeDrink from "../images/drinks/Eevee_Latte.png";
import brionneDrink from "../images/drinks/Bouncy_Brionne_Soda.png";
import litwickDrink from "../images/drinks/Hot_Litwick_Cocoa.png";
import lilligantDrink from "../images/drinks/Lilligant_Floral_Tea.png";
import miltankDrink from "../images/drinks/Miltank_Mix_au_Lait.png";
import bunearyDrink from "../images/drinks/Nutty_Buneary_Frappe.png";
import pachirisuDrink from "../images/drinks/Poppin 27_Pachirisu_Float.png";
import furretDrink from "../images/drinks/Roasted_Furret_Tea_Latte.png";
import teddiursaDrink from "../images/drinks/Teddiursa_Iced_Coffee.png";

import "../style/menuStyle.css";

function createCard(srcImg, price) {
    const card = document.createElement("li");
    const img = document.createElement("img");
    const priceCard = document.createElement("h1");
    const pair = document.createElement("div");
    img.src = srcImg;
    img.id = "drinkItem";

    pair.appendChild(img);
    pair.appendChild(priceCard);

    priceCard.textContent = price;
    priceCard.id = "price";

    card.id = String(srcImg);
    pair.id = "pair";

    card.appendChild(pair);

    return card;
}

const menuPage = () => {
    const containerDiv = document.querySelector("#container");
    containerDiv.setAttribute("class", "menu");

    const contSelector = document.querySelector("#container");
    const itemCont = document.createElement("div");
    itemCont.id = "itemCont";

    contSelector.appendChild(itemCont);

    const createItemCategories = () => {
        // const foodItem = document.createElement("div");
        // foodItem.id = "food";
        const drinkItem = document.createElement("div");
        drinkItem.id = "drink";
        // const snackItem = document.createElement("div");
        // snackItem.id = "snack";

        const drinkTitle = document.createElement("h1");
        drinkTitle.textContent = "Drinks";
        drinkItem.appendChild(drinkTitle);
        // const foodTitle = document.createElement("h1");
        // foodTitle.textContent = "Food";
        // foodItem.appendChild(foodTitle);
        // const snackTitle = document.createElement("h1");
        // snackTitle.textContent = "Snacks";
        // snackItem.appendChild(snackTitle);

        const drinkCont = document.createElement("ul");
        drinkCont.id = "drinkCont";
        // const foodCont = document.createElement("div");
        // foodCont.id = "foodCont"
        // const snackCont = document.createElement("div");
        // snackCont.id = "snackCont"

        drinkItem.appendChild(drinkCont);
        // foodItem.appendChild(foodCont);
        // snackItem.appendChild(snackCont);

        itemCont.appendChild(drinkItem);
        // itemCont.appendChild(foodItem);
        // itemCont.appendChild(snackItem);

        // return {drinkCont, foodCont, snackCont}
        return drinkCont;
    };

    createItemCategories();

    const drinks = [
        eeveeDrink,
        brionneDrink,
        litwickDrink,
        lilligantDrink,
        miltankDrink,
        bunearyDrink,
        pachirisuDrink,
        furretDrink,
        teddiursaDrink,
    ];

    const drinkPrice = [
        "$6",
        "$5",
        "$7.50",
        "$4",
        "$6.50",
        "$6",
        "$10",
        "$6",
        "$5",
    ];

    const cardList = [];

    for (let i = 0; i < drinks.length; i++) {
        cardList.push(createCard(drinks[i], drinkPrice[i]));
    }

    cardList.forEach((i) => {
        drinkCont.append(i);
    });
};

export { menuPage };
