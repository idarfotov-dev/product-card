import { productCards } from "./productsData.js";

const cardTemplate = document.querySelector("#card-template");
const productCardContainer = document.querySelector(".product-card_container");

// Функция запроса количества карточек у пользователя с помощью prompt с проверкой допустимого диапазона (от 1 до 5)

const getCardsCount = () => {
    while (true) {
        const input = prompt(`Сколько карточек отобразить? От 1 до ${productCards.length}`);
        const cardsCount = Number(input);

        if (!isNaN(cardsCount) && cardsCount >= 1 && cardsCount <= productCards.length) {
            return cardsCount;
        }

        alert(`Введите корректное число от 1 до ${productCards.length}`);
    }
};

// Функция рендеринга карточек, которая принимает массив и отображает указанное количество элементов на странице

function createCards(card) {
    const cardClone = cardTemplate.content.cloneNode(true);

    const type = cardClone.querySelector(".product-card_type");
    const title = cardClone.querySelector(".product-card_title");
    const description = cardClone.querySelector(".product-card_description");
    const price = cardClone.querySelector(".product-card_price");
    const ul = cardClone.querySelector(".product-card_list");
    const img = cardClone.querySelector(".product-card_img");

    img.src = `image/${card.image}.png`;
    img.alt = card.title;

    type.textContent = card.type;
    title.textContent = card.title;
    description.textContent = card.description;
    price.textContent = `${card.price} ₽`;

    for (const composition of card.compositionList) {
        const li = document.createElement("li");
        li.textContent = composition;
        li.classList.add("product-card_list-item");
        ul.appendChild(li);
    }

    return cardClone;
}

const count = getCardsCount();
const visibleCards = productCards.slice(0, count);

visibleCards.forEach(productCard => {
    productCardContainer.appendChild(createCards(productCard));
});

// Использование reduce для преобразования массива продуктов в объект, где ключ — название продукта, а значение — его описание

const titleDescriptionsArray = productCards.reduce((acc, value) => {
    acc.push({ [value.title]: value.description });
    return acc;
}, []);

console.log(titleDescriptionsArray);