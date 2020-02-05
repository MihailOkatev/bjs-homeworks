"use strict";
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = new Date(window.date.value);

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let tempValuee;
    let check = parseInt(percent);
    if (isNaN (check) === true || percent === undefined) {
        tempValuee = percent;
        return "Поле Процентная ставка содержит недопустимое значение: " + tempValuee;
    }
    check = parseInt(contribution);
    if (isNaN (check) === true || percent === undefined) {
        tempValuee = contribution;
            return "Поле Первоначальный взнос содержит недопустимое значение: " + tempValuee;
    }
    check = parseInt(amount);
    if (isNaN (check) === true || percent === undefined) {
        tempValuee = amount;
            return "Поле Общая стоимость содержит недопустимое значение: " + tempValuee;
    }

    console.log(date.getFullYear());
     let totalMonth;
     totalMonth = Math.floor((date.getTime()  - new Date().getTime()) / 1000 / 3600 / 24 / 30); // получаем количество полных месяцев с текущей даты до указанного срока
     console.log(totalMonth);
     let s = amount - contribution;
     let p = percent / 12/ 100;
     let payPerMonth = s*(p + p / (Math.pow((1 + p),totalMonth) - 1));
     let totalAmount = payPerMonth*totalMonth;
     console.log(typeof(totalAmount));
     return parseFloat(totalAmount.toFixed(2));
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    let check = parseInt(name);
    console.log(check);
    if (name === undefined || name === "" || name === null) {
     return "Привет, мир! Меня зовут Аноним";
    } else if (isNaN(check) === false) {
        return "В поле имя введено числовое значение."
    } else {
        return "Привет, мир! Меня зовут " + name;
    }
}