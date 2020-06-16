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
start();


let appData = {
    income : {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: 0,
    budgetDay: 0, 
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за  рассчитываемый период через запятую', 'Кварплата, Садик');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?'); 
        let sum = 0;
        let str = 0;

        for (let i = 0; i < 2; i++) {
            str = prompt('Введите обязательную статью расходов?' , 'Кварплата');
            do{
            sum += +prompt('Во сколько это обойдется?', 600);
            } while(!isNumber(sum));
            appData.expenses[str] = sum;
        }
        console.log(appData.expenses);

    }
}
// appdata
appData.asking();



    appData.getExpensesMonth = function(){
        for(let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];
        }
        console.log("Сумма всех расходов: " + appData.expensesMonth);
    };

    appData.getBudget = function(){
        appData.budgetMonth = money - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
        console.log("Накопления за месяц:" + appData.budgetMonth);
        console.log('Дневной бюджет: ' + appData.budgetDay);
    };

    appData.getTargetMonth = function(mission, budgetMonth){
        return appData.mission / appData.budgetMonth;
    };

    appData.getStatusIncome = function(){
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
        };




        appData.getBudget();
        appData.getExpensesMonth();
        appData.getTargetMonth();
        console.log(appData.getStatusIncome());

        if(appData.getTargetMonth(appData.mission, appData.budgetMonth) <= 0 ){
            console.log('Цель не будет достигнута')
        }else{
            console.log("Цель будет достигнута за " + parseInt(appData.getTargetMonth(appData.mission, appData.budgetMonth)) + " месяцев ");
        };

        for(let key in appData){
            console.log('Наша программа содержит в себе данные:')
            console.log(' Свойство: ' + key + ' Значение: ' + appData[key]);
        }
