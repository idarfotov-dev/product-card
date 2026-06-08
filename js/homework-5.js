function setCityTemp(city, temperature) {
    console.log(`Сейчас в городе ${city} температура  — ${temperature}°C градусов по Цельсию`);
}

setCityTemp('Нальчик', '24');

const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) {
    if (speed > SPEED_OF_LIGHT) {
        console.log('Сверхсветовая скорость');
    } else if (speed < SPEED_OF_LIGHT) {
        console.log('Субсветовая скорость');
    } else {
        console.log('Скорость света');
    }
}

checkSpeed(299792458);

let productName = 'Машина';
let productPrice = 23000;

function computeBudget(currentBudget) {
    if (currentBudget >= productPrice) {
        console.log(`Ваш товар (${productName}) приобретён. Спасибо за покупку!`);
    } else {
         console.log(`Вам не хватает ${productPrice - currentBudget}$, пополните баланс`);
    }
}

computeBudget(23000);