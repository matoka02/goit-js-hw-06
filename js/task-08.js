"use strict";

// 1. поиск по классу
const form = document.querySelector(".login-form");
// 2. слушатель
form.addEventListener("submit", handleSubmit);
// 3. функция проверки
function handleSubmit(event) {
    // 3.1 запрет перезагрузки
    event.preventDefault();
    // 3.2 проверка заполненности
    const {
        elements: { email, password }
        } = event.currentTarget;

    if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
    }
    // 3.3 сбор объекта
    const userDetails = { email: email.value, password: password.value }
    // 3.4 показ объекта
    console.log(userDetails);
    // 3.5 очистка формы
    event.currentTarget.reset();
}
