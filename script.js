'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
}

let	money,
    income = " без дополнительного дохода ", 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Кварплата, Садик'), 
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    expenses = [],
    mission = 50000, 
    period = 12;

    let start = function() {
        do{
            money = prompt('Ваш месячный доход?');
        } while (!isNumber((money)));
    };
    

    start();

    let getExpensesMonth = function(a, b){
        let sum = 0;

        for (let i = 0; i < 2; i++) {

                expenses [i] = prompt('Введите обязательную статью расходов?' , 'Кварплата');

            do{
                sum += +prompt('Во сколько это обойдется?', 600);
            } while(!isNumber(sum));

        }
        console.log(expenses);
        return sum;
    };

    let expensesAmount = getExpensesMonth();

    let getAccumulatedMonth = function(a, b){
        return (a - expensesAmount);
    };

    let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);

    let getTargetMonth = function(mission, accumulatedMonth){
        return mission / accumulatedMonth;
    };
    
    let budgetDay = accumulatedMonth / 30;

    let getStatusIncome = function(){
        if (budgetDay >= 1200){
            return('У вас высокий уровень дохода');
        }
        else if(budgetDay < 1200 && budgetDay >= 600){
            return('У вас средний уровень дохода');
        }
        else if(budgetDay < 600 && budgetDay > 0){
            return('К сожалению у вас уровень дохода ниже среднего');
        }
        else if(budgetDay <= 0){
            return('Что то пошло не так');
        }
        };


        if(getTargetMonth(mission, accumulatedMonth) <= 0 ){
            console.log('Цель не будет достигнута')
        }else{
            console.log("Цель будет достигнута за " + parseInt(getTargetMonth(mission, accumulatedMonth)) + " месяцев ");
        };
        


    console.log("income:", income);
    console.log("money:", money);
    console.log("deposit:", deposit);
    console.log("addExpenses length:", addExpenses.length);
    console.log("Период равен: " + period + " месяцев");
    console.log("Цель заработать: " + mission + " гривен");
    console.log("Сумма всех расходов:" , expensesAmount);
    console.log("Накопления за месяц:" + accumulatedMonth);
    console.log('Дневной бюджет: ' + budgetDay);
    console.log(getStatusIncome());