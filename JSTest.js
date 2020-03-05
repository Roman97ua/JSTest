'use strict';

let money, time, asq1, asq2;

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");
asq1 = prompt("Введите обязательную статью расходов в этом месяце");
asq2 = prompt("Во сколько обойдется?");

const appData = {
    moneyData: money,
    timeData: time,
    expenses: {
        asq1: asq2
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert(appData.moneyData / 30);
