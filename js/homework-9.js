// Добавление логики проверки email и обработки отправки формы подписки

const subscribeForm = document.querySelector(".footer__form");
const subscribeInput = document.querySelector(".footer__input");

function getFormData(form) {
    const formData = new FormData(form);
    return Object.fromEntries(formData.entries());
};

subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailData = getFormData(subscribeForm);
    console.log(emailData);

    subscribeInput.value = "";
});

// Реализация открытия и закрытия модального окна регистрации

const openModalButton = document.querySelector(".register-button");
const closeModalButton = document.querySelector(".modal__close");
const overlay = document.querySelector(".overlay");
const body = document.body;

openModalButton.addEventListener("click", () => {
    overlay.classList.add("modal-showed");
    body.classList.add("no-scroll");
});

closeModalButton.addEventListener("click", () => {
    overlay.classList.remove("modal-showed");
    body.classList.remove("no-scroll");
});

// Обработка формы регистрации с валидацией данных, проверкой пароля и сохранением информации о пользователе в объект user

const modalForm = document.querySelector(".register-form");
const posswordInput = document.querySelector("#password");
const repeatPasswordInput = document.querySelector("#repeatPassword");

let user;

function checkPasswords() {
    if(posswordInput.value !== repeatPasswordInput.value) repeatPasswordInput.setCustomValidity("Пароли не совподают!");
    else repeatPasswordInput.setCustomValidity("");
};

posswordInput.addEventListener("input", checkPasswords);
repeatPasswordInput.addEventListener("input", checkPasswords);

modalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!modalForm.reportValidity()) return;

    user = getFormData(modalForm);
    user.createdOn = new Date();
    console.log(user);

    modalForm.reset()

    overlay.classList.remove("modal-showed");
    body.classList.remove("no-scroll");
});