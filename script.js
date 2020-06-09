// let	money = prompt('Ваш месячный доход?'), 
//     income = " без дополнительного дохода ", 
//     addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), 
//     deposit = confirm('Есть ли у вас депозит в банке?'), 
//     expenses1 = prompt('Введите обязательную статью расходов?'), 
//     amount1 = +prompt('Во сколько это обойдется?'), 
//     expenses2 = prompt('Введите обязательную статью расходов?'),
//     amount2 = +prompt('Во сколько это обойдется?'), 
//     mission = 5000, 
//     period = 12,
//     budgetMonth = money - (amount1 + amount2),
//     budgetDay = Math.floor(budgetMonth / 30),
//     missionComplete = Math.ceil(mission / budgetMonth);


//     console.log("income:", income);
//     console.log("money:", money);
//     console.log("deposit:", deposit);
//     console.log("addExpenses length:", addExpenses.length);
//     console.log("Период равен: " + period + " месяцев");
//     console.log("Цель заработать: " + mission + " гривен");
//     console.log("budgetDay:", budgetDay);
//     console.log("budgetMonth", budgetMonth);
//     console.log("missionComplete", missionComplete);

let budgetDay = prompt();

    if (budgetDay >= 1200)
        console.log('У вас высокий уровень дохода');
    else if(budgetDay < 1200 && budgetDay >= 600)
        console.log('У вас средний уровень дохода');
    else if(budgetDay < 600 && budgetDay > 0)
        console.log('К сожалению у вас уровень дохода ниже среднего');
    else if(budgetDay <= 0)
        console.log('Что то пошло не так');
