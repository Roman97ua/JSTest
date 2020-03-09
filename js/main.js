'use strict';

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],
    expensesItem = document.getElementsByClassName("expenses-item"),
    expensesBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    sumValue = document.querySelector(".choose-sum"),
    percentValue = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

let money, time;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

startBtn.addEventListener("click", function () {
    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;

    time = prompt("Введіть дату у форматі YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на місяць?", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на місяць?");
    }
    appData.moneyData = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
});

expensesBtn.addEventListener("click", function () {
        let sum = 0;

        for (let i = 0; i < expensesItem.length; i++) {
            let asq1 = expensesItem[i].value,
                asq2 = expensesItem[++i].value;

            if (typeof asq1 === 'string' && typeof asq1 != null && typeof asq2 != null && asq1 !== "" && asq2 !== "" && asq1.length < 50) {
                appData.expenses[asq1] = asq2;
                sum += +asq2;
            } else {
                console.log("error");
                i--;
            }
        }
        expensesValue.textContent = sum;
    }
);

optionalExpensesBtn.addEventListener("click", function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let message = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = message;
        optionalExpensesValue.textContent += message + ' ';
    }
});

countBtn.addEventListener("click", function () {
    if (appData.moneyData !== undefined) {
        appData.moneyDay = ((appData.moneyData - (+expensesValue.textContent)) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyDay;

        if (appData.moneyDay <= 100) {
            levelValue.textContent = "Min";
        } else if (appData.moneyDay > 100 && appData.moneyDay <= 1500) {
            levelValue.textContent = "Medium";
        } else if (appData.moneyDay > 1500) {
            levelValue.textContent = "Max";
        } else {
            levelValue.textContent = "Error";
        }
    } else {
        dayBudgetValue.textContent = "Error";
    }
});

incomeItem.addEventListener("input", function () {
    let income = incomeItem.value;
    appData.income = income.split(', ');
    optionalExpensesValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function () {
    if (appData.savings === true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener("input", function () {
    if (appData.savings === true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.mothIncome = sum / 100 / 12 * percent;
        appData.yearsIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.mothIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearsIncome.toFixed(1);
    }
});

percentValue.addEventListener("input", function () {
    if (appData.savings === true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.mothIncome = sum / 100 / 12 * percent;
        appData.yearsIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.mothIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearsIncome.toFixed(1);
    }
});

const appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
