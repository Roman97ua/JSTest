'use strict';

let money, time, asq1, asq2, asq3, asq4;

money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

const appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    asq1 = prompt("Введите обязательную статью расходов в этом месяце");
    asq2 = prompt("Во сколько обойдется?");

    if (typeof asq1 === 'string' && typeof asq1 != null && typeof asq2 != null && asq1 !== "" && asq2 !== "" && asq1.length < 50) {
        console.log("done");
        appData.expenses[asq1] = asq2;
    } else {
        console.log("error");
        i--;
    }
}

let m = 0;
while (m < 2) {
    asq1 = prompt("Введите обязательную статью расходов в этом месяце");
    asq2 = prompt("Во сколько обойдется?");
    if (typeof asq1 === 'string' && typeof asq1 != null && typeof asq2 != null && asq1 !== "" && asq2 !== "" && asq1.length < 50) {
        console.log("done");
        appData.expenses[asq1] = asq2;
    } else {
        console.log("error");
        m--;
    }
    m++;
}

let k=0;
do{
    asq1 = prompt("Введите обязательную статью расходов в этом месяце");
    asq2 = prompt("Во сколько обойдется?");
    if (typeof asq1 === 'string' && typeof asq1 != null && typeof asq2 != null && asq1 !== "" && asq2 !== "" && asq1.length < 50) {
        console.log("done");
        appData.expenses[asq1] = asq2;
    } else {
        console.log("error");
        k--;
    }
    k++;
}while (k < 2)

let moneyDay = appData.moneyData / 30;
alert(moneyDay);

if (moneyDay <= 100) {
    console.log("Min");
} else if (moneyDay > 100 && moneyDay <= 1500) {
    console.log("medium");
} else if (moneyDay > 1500) {
    console.log("Max");
} else {
    console.log("Error");
}
