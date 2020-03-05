'use strict';

let money, time, asq1, asq2;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

const appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
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
}

chooseExpenses();

let moneyDay;

function detectDayBudget() {
    moneyDay = (appData.moneyData / 30).toFixed(1);
    alert(moneyDay);
}

detectDayBudget();

function detectLevel() {
    if (moneyDay <= 100) {
        console.log("Min");
    } else if (moneyDay > 100 && moneyDay <= 1500) {
        console.log("medium");
    } else if (moneyDay > 1500) {
        console.log("Max");
    } else {
        console.log("Error");
    }

}

detectLevel();

function checkSavings() {
    if (appData.savings === true) {
        let dep = prompt("deposit value: ");
        let percent = prompt("percent value: ");
        appData.mothIncome = dep / 100 / 12 * percent;

        alert("deposit in month: " + appData.mothIncome)
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let message = prompt("Статья необязательных расходов?");
        let k = i + 1;
        appData.optionalExpenses[k] = message;
    }
}

chooseOptExpenses();
