let	money = +prompt('Ваш месячный доход?', 5000), 
    income = " без дополнительного дохода ", 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Кварплата, Садик'), 
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    expenses1 = prompt('Введите обязательную статью расходов?' , 'Кварплата'), 
    amount1 = +prompt('Во сколько это обойдется?', 500), 
    expenses2 = prompt('Введите обязательную статью расходов?' , 'Садик'),
    amount2 = +prompt('Во сколько это обойдется?', 700), 
    mission = 50000, 
    period = 12;

    let showTypeOf = function(data){
        console.log(data, typeof(data));
    };
    showTypeOf(money);
    showTypeOf(income);
    showTypeOf(mission); 

    function getExpensesMonth(a, b){
        return a + b;
    };

    getAccumulatedMonth = function(a, b){
        return (a - getExpensesMonth(amount1, amount2));
    };

    let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth());

    getTargetMonth = function(a, b){
        return a / b;
    };

    let budgetDay = accumulatedMonth / 30;

    getStatusIncome = function(){
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


    console.log("income:", income);
    console.log("money:", money);
    console.log("deposit:", deposit);
    console.log("addExpenses length:", addExpenses.length);
    console.log("Период равен: " + period + " месяцев");
    console.log("Цель заработать: " + mission + " гривен");
    console.log("Сумма всех расходов:" , getExpensesMonth(amount1, amount2));
    console.log("Накопления за месяц:" + accumulatedMonth);
    console.log('Месяцев до цели: ' + Math.floor(getTargetMonth(mission, accumulatedMonth)));
    console.log('Дневной бюджет: ' + budgetDay);

    console.log(getStatusIncome());