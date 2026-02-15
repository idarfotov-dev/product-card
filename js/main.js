const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstCatalogCard = document.querySelector('.product-card');

recolorFirstCardButton.addEventListener('click', () => {
    firstCatalogCard.style.backgroundColor = '#d8d7ff';
});

const recolorAllCardButton = document.getElementById('recolor-all-cards-button');
const catalogCards = document.querySelectorAll('.product-card');

recolorAllCardButton.addEventListener('click', () => {
    catalogCards.forEach(card => {
        card.style.backgroundColor = '#b2fbcd';
    });
});

const openGoogleButton = document.getElementById('open-google-button');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
    const answer = confirm('Вы действительно хотите перейти на Google?');

    if (answer === true) {
        window.open('https://www.google.com');
    } else {
        alert('Пользователь отказался переходить на сайт Google');
    }
};

const mainTitle = document.querySelector('.product-card_main-title');

mainTitle.addEventListener('mouseover', () => {
    console.log(mainTitle.textContent);
});

const multicoloredButton = document.getElementById('multicolored-button');

multicoloredButton.addEventListener('click', () => {
    multicoloredButton.classList.toggle('multicolored-button');
});