'use strict';
let	money,
    start = function() {
    do{
        money = prompt('Ваш месячный доход?');
    } while (!isNumber((money)));
};


let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};
let isString = function(n){
    return String(n) && n === null && n.trim();
};
start();


let appData = {
    income : {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    budget: 0,
    budgetDay: 0, 
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
        let cashIncome = 0;
        let itemIncome;

        if(confirm('Есть ли у вас дополнительный источник заработка?')){
            do {
            itemIncome = prompt('Какой у вас дополнительный доход?', 'Таксую');
            }
            while(isString(itemIncome) || itemIncome === ''|| itemIncome === null || itemIncome === ' ');
            do{
            cashIncome = prompt('Сколько в месяц  вы на этом зарабатываете', 1000);
            }
            while (!isNumber(cashIncome));
            appData.income[itemIncome] = cashIncome;
        }
        appData.addExpenses = prompt('Перечислите возможные расходы через запятую?');

        function uppercase() {
        appData.addExpenses = appData.addExpenses.split(',');
        let newarray = [];
        for(let x = 0; x < appData.addExpenses.length; x++){
            newarray.push(appData.addExpenses[x].charAt(0).toUpperCase()+appData.addExpenses[x].slice(1));
        }
        return newarray.join(', ');
        }
        console.log(uppercase(appData.addExpenses));

        let sum;
        let str = [];
            for (let i = 0; i < 2; i++){
            do{
            str = prompt('Введите обязательную статью расходов', 'Кварплата');
            }
            while(isString(str) || str === '');
            do {
            sum = +prompt(' Во сколько это обойдется?', 200); 
            }
            while (!isNumber(sum));
            appData.addExpenses[str] = sum;
            }
            console.log(appData.addExpenses);
    },

    getExpensesMonth: function(){
        for(let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];
        }
        console.log("Сумма всех расходов: " + appData.expensesMonth);
    },

    getExpensesMonth: function(){
        for(let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];
        }
        console.log("Сумма всех расходов: " + appData.expensesMonth);
    },

    getBudget: function(){
        appData.budgetMonth = money - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
        console.log("Накопления за месяц:" + appData.budgetMonth);
        console.log('Дневной бюджет: ' + appData.budgetDay);
    },

    getTargetMonth: function(){
        return appData.mission / appData.budgetMonth;
    },

    getStatusIncome: function(){
        if (appData.budgetDay >= 1200){
            return('У вас высокий уровень дохода');
        }
        else if(appData.budgetDay < 1200 && appData.budgetDay >= 600){
            return('У вас средний уровень дохода');
        }
        else if(appData.budgetDay < 600 && appData.budgetDay > 0){
            return('К сожалению у вас уровень дохода ниже среднего');
        }
        else if(appData.budgetDay <= 0){
            return('Что то пошло не так');
        }
    },


        getInfoDeposit:function(){
            if(appData.deposit){
                appData.percentDeposit = prompt('Какой годовой процент?', "10");
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }
        },
        calcSaveMoney: function () {  
            return appData.budgetMonth * appData.period;
        }


};

        appData.asking();
        appData.getBudget();
        appData.getExpensesMonth();
        appData.getTargetMonth();
        console.log(appData.getStatusIncome());
        appData.getInfoDeposit();

        if(appData.getTargetMonth(appData.mission, appData.budgetMonth) <= 0 ){
            console.log('Цель не будет достигнута')
        }else{
            console.log("Цель будет достигнута за " + parseInt(appData.getTargetMonth(appData.mission, appData.budgetMonth)) + " месяцев ");
        };

        // for(let key in appData){
        //     console.log('Наша программа содержит в себе данные:')
        //     console.log(' Свойство: ' + key + ' Значение: ' + appData[key]);
        // }
