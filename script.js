let	money = prompt('Ваш месячный доход?'), 
    income = " без дополнительного дохода ", 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), 
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    expenses1 = prompt('Введите обязательную статью расходов?'), 
    amount1 = +prompt('Во сколько это обойдется?'), 
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount2 = +prompt('Во сколько это обойдется?'), 
    mission = 5000, 
    period = 12,
    budgetMonth = money - (amount1 + amount2),
    budgetDay = Math.floor(budgetMonth / 30),
    missionComplete = Math.ceil(mission / budgetMonth);
    console.log("missionComplete", missionComplete);

    console.log("income:", income);
    console.log("money:", money);
    console.log("deposit:", deposit);
    console.log("addExpenses length:", addExpenses.length);
    console.log("Период равен: " + period + " месяцев");
    console.log("Цель заработать: " + mission + " гривен");
    console.log("budgetDay:", budgetDay);
    console.log("budgetMonth", budgetMonth);
    console.log("missionComplete", missionComplete);

    

// 7) Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, вывести в консоль, округляя в большую сторону (методы объекта Math в помощь)



// 8) Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль  округлив в меньшую сторону 

