import { productCards } from "./productsData.js";

const cardTamplate = document.querySelector("#card-tamplate");
const productCardContainer = document.querySelector(".product-card_container");

const getCardsCount = () => {
    let isValid = false;

    while (!isValid) {
        const input = prompt(`Сколько карточек отобразить? От 1 до ${productCards.length}`);
        const cardsCount = Number(input);

        if (
            !isNaN(cardsCount) &&
            cardsCount >= 1 &&
            cardsCount <= productCards.length
        ) {
            isValid = true;
            return cardsCount;
        }

        alert(`Введите корректное число от 1 до ${productCards.length}`);
    };
};

function createCards(card) {
    const cardClone = cardTamplate.content.cloneNode(true);

    const ul = cardClone.querySelector(".product-card_list");
    const productImage = cardClone.querySelector(".product-card_img");
    const productType = cardClone.querySelector(".product-card_type");
    const productTitle = cardClone.querySelector(".product-card_title");
    const productDescription = cardClone.querySelector(".product-card_description");
    const productPrice = cardClone.querySelector(".product-card_price");

    productImage.src = card.image;
    productImage.alt = card.title;
    productType.textContent = card.type;
    productTitle.textContent = card.title;
    productDescription.textContent = card.description;
    productPrice.textContent = card.price;

    for(const composition of card.cardList) {
        const li = document.createElement("li");
        li.textContent = composition;
        li.classList.add("product-card_list-item");
        ul.appendChild(li);
    };

    return cardClone;
}

const count = getCardsCount();
const visibleCards = productCards.slice(0, count);

for(const productCard of visibleCards) {
    productCardContainer.appendChild(createCards(productCard));
};

const arr = productCards.reduce((acc, value) => {
    acc.push({
        [value.title]: value.description
    });
    return acc;
}, []);